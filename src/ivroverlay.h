#pragma once
#include <GLFW/glfw3.h>
#include <napi.h>
#include <openvr.h>

#include <map>

class IVROverlay : public Napi::ObjectWrap<IVROverlay> {
 public:
  IVROverlay(const Napi::CallbackInfo&);

  Napi::Value CreateOverlay(const Napi::CallbackInfo&);
  Napi::Value ShowOverlay(const Napi::CallbackInfo&);
  Napi::Value SetOverlayTextureFromBuffer(const Napi::CallbackInfo&);
  Napi::Value SetOverlayWidthInMetres(const Napi::CallbackInfo&);
  Napi::Value SetOverlayColor(const Napi::CallbackInfo&);
  Napi::Value SetOverlayTransformTrackedDeviceRelative(const Napi::CallbackInfo&);
  Napi::Value SetOverlayTransformAbsolute(const Napi::CallbackInfo&);

  static Napi::Function GetClass(Napi::Env);

 private:
  static std::map<uint32_t, vr::VROverlayHandle_t> overlayHandleMap;

  static GLFWwindow* glWindow;
  static GLuint bufferTexture;
};