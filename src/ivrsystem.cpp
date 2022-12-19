#include "ivrsystem.h"

#include "util.h"

IVRSystem::IVRSystem(const Napi::CallbackInfo& info) : ObjectWrap(info){};

Napi::Value IVRSystem::GetControllerRoleForTrackedDeviceIndex(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 1);

  Napi::Env env = info.Env();

  vr::ETrackedControllerRole role = vr::VRSystem()->GetControllerRoleForTrackedDeviceIndex(info[0].As<Napi::Number>());

  return Napi::Number::New(env, role);
}

Napi::Function IVRSystem::GetClass(Napi::Env env) {
  return DefineClass(
      env, "IVRSystem", {IVRSystem::InstanceMethod("GetControllerRoleForTrackedDeviceIndex", &IVRSystem::GetControllerRoleForTrackedDeviceIndex)});
}