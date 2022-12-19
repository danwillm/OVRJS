#pragma once

#include <napi.h>

class IVRNotifications : public Napi::ObjectWrap<IVRNotifications> {
 public:
  IVRNotifications(const Napi::CallbackInfo&);

  Napi::Value CreateNotification(const Napi::CallbackInfo&);

  static Napi::Function GetClass(Napi::Env);
};