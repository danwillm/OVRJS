#pragma once

#include <napi.h>

class IVRSystem : public Napi::ObjectWrap<IVRSystem> {
 public:
  IVRSystem(const Napi::CallbackInfo&);

  Napi::Value GetControllerRoleForTrackedDeviceIndex(const Napi::CallbackInfo&);

  static Napi::Function GetClass(Napi::Env);
};