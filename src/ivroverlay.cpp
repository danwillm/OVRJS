
#include "ivroverlay.h"

#include <openvr.h>

#include "napi_util.h"

std::map<uint32_t, vr::VROverlayHandle_t> IVROverlay::overlayHandleMap;

GLFWwindow* IVROverlay::glWindow = NULL;
GLuint IVROverlay::bufferTexture;

#define CHECK_OVERLAY_ERROR(env, err)                                         \
  if (err) {                                                                  \
    Napi::Error::New(env, vr::VROverlay()->GetOverlayErrorNameFromEnum(err)); \
    return env.Null();                                                        \
  }

IVROverlay::IVROverlay(const Napi::CallbackInfo& info) : ObjectWrap(info){};

Napi::Value IVROverlay::CreateOverlay(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();

    return env.Null();
  }

  if (!info[0].IsString() || !info[0].IsString()) {
    Napi::TypeError::New(env, "Arguments must be strings").ThrowAsJavaScriptException();

    return env.Null();
  }

  if (!glWindow) {
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 2);

    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
    glfwWindowHint(GLFW_VISIBLE, GL_FALSE);

    GLFWwindow* glWindow = glfwCreateWindow(1, 1, "NodeOpenVR", nullptr, nullptr);
    glfwMakeContextCurrent(glWindow);
  }

  vr::VROverlayHandle_t handle;

  Napi::String key = info[0].As<Napi::String>();
  Napi::String name = info[0].As<Napi::String>();

  vr::VROverlayError err = vr::VROverlay()->CreateOverlay(key.Utf8Value().c_str(), name.Utf8Value().c_str(), &handle);
  CHECK_OVERLAY_ERROR(env, err);

  vr::VRTextureBounds_t bounds = {0.f, 1.f, 1.f, 0.f};
  err = vr::VROverlay()->SetOverlayTextureBounds(handle, &bounds);
  CHECK_OVERLAY_ERROR(env, err);

  uint32_t ihandle = (uint32_t)handle;
  overlayHandleMap.insert(std::pair<uint32_t, vr::VROverlayHandle_t>(ihandle, handle));

  return Napi::Number::New(env, ihandle);
}

Napi::Value IVROverlay::ShowOverlay(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 1) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();

    return env.Null();
  }

  vr::VROverlayError err = vr::VROverlay()->ShowOverlay(overlayHandleMap[info[0].As<Napi::Number>()]);
  CHECK_OVERLAY_ERROR(env, err);

  return Napi::Boolean::New(env, true);
}

Napi::Value IVROverlay::SetOverlayTextureFromBuffer(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 4);

  Napi::Env env = info.Env();

  napi_valuetype infotype = info[1].Type();

  if (!info[1].IsTypedArray()) {
    Napi::TypeError::New(env, "Texture must be a typed array").ThrowAsJavaScriptException();

    return env.Null();
  }

  uint32_t width = info[2].As<Napi::Number>();
  uint32_t height = info[3].As<Napi::Number>();

  Napi::TypedArrayOf<uint8_t> buff = info[1].As<Napi::TypedArrayOf<uint8_t>>();

  uint8_t* buff_data = (uint8_t*)buff.ArrayBuffer().Data();

  if (bufferTexture == 0) {
    glGenTextures(1, &bufferTexture);

    glBindTexture(GL_TEXTURE_2D, bufferTexture);
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, buff_data);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);

    GLfloat fLargest;

    glBindTexture(GL_TEXTURE_2D, 0);
  } else {
    glBindTexture(GL_TEXTURE_2D, bufferTexture);
    glTexSubImage2D(GL_TEXTURE_2D, 0, 0, 0, width, height, GL_RGBA, GL_UNSIGNED_BYTE, buff_data);
    glBindTexture(GL_TEXTURE_2D, 0);
  }

  glFlush();
  glFinish();

  vr::Texture_t texture = {(void*)(uintptr_t)bufferTexture, vr::ETextureType::TextureType_OpenGL, vr::EColorSpace::ColorSpace_Auto};

  vr::VROverlayError err = vr::VROverlay()->SetOverlayTexture(overlayHandleMap[info[0].As<Napi::Number>()], &texture);
  CHECK_OVERLAY_ERROR(env, err);

  return Napi::Boolean::New(env, true);
}

Napi::Value IVROverlay::SetOverlayWidthInMetres(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 2);

  Napi::Env env = info.Env();

  vr::EVROverlayError err = vr::VROverlay()->SetOverlayWidthInMeters(overlayHandleMap[info[0].As<Napi::Number>()], info[1].As<Napi::Number>());
  CHECK_OVERLAY_ERROR(env, err);

  return Napi::Boolean::New(env, true);
}

Napi::Value IVROverlay::SetOverlayColor(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 4);

  Napi::Env env = info.Env();

  vr::EVROverlayError err = vr::VROverlay()->SetOverlayColor(
      overlayHandleMap[info[0].As<Napi::Number>()], info[1].As<Napi::Number>(), info[2].As<Napi::Number>(), info[3].As<Napi::Number>());

  CHECK_OVERLAY_ERROR(env, err);

  return Napi::Boolean::New(env, true);
}

Napi::Function IVROverlay::GetClass(Napi::Env env) {
  return DefineClass(
      env,
      "IVROverlay",
      {IVROverlay::InstanceMethod("CreateOverlay", &IVROverlay::CreateOverlay),
       IVROverlay::InstanceMethod("ShowOverlay", &IVROverlay::ShowOverlay),
       IVROverlay::InstanceMethod("SetOverlayTextureFromBuffer", &IVROverlay::SetOverlayTextureFromBuffer),
       IVROverlay::InstanceMethod("SetOverlayWidthInMetres", &IVROverlay::SetOverlayWidthInMetres),
       IVROverlay::InstanceMethod("SetOverlayColor", &IVROverlay::SetOverlayColor)});
}