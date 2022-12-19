#pragma once

#include <napi.h>

class IVRSystem : public Napi::ObjectWrap<IVRSystem> {
 public:
  IVRSystem(const Napi::CallbackInfo&);
};