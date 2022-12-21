#pragma once

#include <napi.h>

class IVRSystem : public Napi::ObjectWrap<IVRSystem> {
 public:
  IVRSystem(const Napi::CallbackInfo&);

  Napi::Value GetControllerRoleForTrackedDeviceIndex(const Napi::CallbackInfo&);

  Napi::Value GetBoolTrackedDeviceProperty(const Napi::CallbackInfo&);
  Napi::Value GetInt32TrackedDeviceProperty(const Napi::CallbackInfo&);
  Napi::Value GetFloatTrackedDeviceProperty(const Napi::CallbackInfo&);
  Napi::Value GetStringTrackedDeviceProperty(const Napi::CallbackInfo&);

  static Napi::Function GetClass(Napi::Env);
};