#include <napi.h>
#include <openvr.h>

#include "ivrnotifications.h"
#include "ivroverlay.h"
#include "ivrsystem.h"

Napi::Value VR_Init(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 1) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();

    return env.Null();
  }

  if (!info[0].IsNumber()) {
    Napi::TypeError::New(env, "Wrong argument type").ThrowAsJavaScriptException();

    return env.Null();
  }

  uint32_t app_type = info[0].As<Napi::Number>().Int32Value();

  vr::EVRInitError err;
  vr::IVRSystem* sys = vr::VR_Init(&err, static_cast<vr::EVRApplicationType>(app_type));

  if (err) {
    const char* err_msg = vr::VR_GetVRInitErrorAsEnglishDescription(err);

    Napi::Error::New(env, err_msg).ThrowAsJavaScriptException();
  }

  return Napi::Boolean::New(env, true);
};

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "VR_Init"), Napi::Function::New(env, VR_Init));
  exports.Set(Napi::String::New(env, "IVROverlay"), IVROverlay::GetClass(env));
  exports.Set(Napi::String::New(env, "IVRSystem"), IVRSystem::GetClass(env));
  exports.Set(Napi::String::New(env, "IVRNotifications"), IVRNotifications::GetClass(env));

  return exports;
}

NODE_API_MODULE(openvr, Init);