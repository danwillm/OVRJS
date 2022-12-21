#include "ivrsystem.h"

#include "util.h"

IVRSystem::IVRSystem(const Napi::CallbackInfo& info) : ObjectWrap(info){};

#define CHECK_PROPERTY_ERROR(env, err)                                                                 \
  if (err) {                                                                                           \
    Napi::Error::New(env, vr::VRSystem()->GetPropErrorNameFromEnum(err)).ThrowAsJavaScriptException(); \
    return env.Null();                                                                                 \
  }

Napi::Value IVRSystem::GetControllerRoleForTrackedDeviceIndex(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 1);

  Napi::Env env = info.Env();

  vr::ETrackedControllerRole role = vr::VRSystem()->GetControllerRoleForTrackedDeviceIndex(info[0].As<Napi::Number>());

  return Napi::Number::New(env, role);
}

Napi::Value IVRSystem::GetBoolTrackedDeviceProperty(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 2);

  Napi::Env env = info.Env();

  vr::ETrackedPropertyError err;
  bool result = vr::VRSystem()->GetBoolTrackedDeviceProperty(
      info[0].As<Napi::Number>().Int32Value(), static_cast<vr::ETrackedDeviceProperty>(info[1].As<Napi::Number>().Int32Value()), &err);
  CHECK_PROPERTY_ERROR(env, err);

  return Napi::Boolean::New(env, result);
}

Napi::Value IVRSystem::GetInt32TrackedDeviceProperty(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 2);

  Napi::Env env = info.Env();

  vr::ETrackedPropertyError err;
  int32_t result = vr::VRSystem()->GetInt32TrackedDeviceProperty(
      info[0].As<Napi::Number>().Int32Value(), static_cast<vr::ETrackedDeviceProperty>(info[1].As<Napi::Number>().Int32Value()), &err);
  CHECK_PROPERTY_ERROR(env, err);

  return Napi::Number::New(env, result);
}

Napi::Value IVRSystem::GetFloatTrackedDeviceProperty(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 2);

  Napi::Env env = info.Env();

  vr::ETrackedPropertyError err;
  float result = vr::VRSystem()->GetFloatTrackedDeviceProperty(
      info[0].As<Napi::Number>().Int32Value(), static_cast<vr::ETrackedDeviceProperty>(info[1].As<Napi::Number>().Int32Value()), &err);
  CHECK_PROPERTY_ERROR(env, err);

  return Napi::Number::New(env, result);
}

Napi::Value IVRSystem::GetStringTrackedDeviceProperty(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 2);

  Napi::Env env = info.Env();

  vr::ETrackedPropertyError err;

  char result[4096];
  vr::VRSystem()->GetStringTrackedDeviceProperty(
      info[0].As<Napi::Number>().Int32Value(),
      static_cast<vr::ETrackedDeviceProperty>(info[0].As<Napi::Number>().Int32Value()),
      result,
      sizeof(result),
      &err);
  CHECK_PROPERTY_ERROR(env, err);

  return Napi::String::New(env, result);
}

Napi::Function IVRSystem::GetClass(Napi::Env env) {
  return DefineClass(
      env,
      "IVRSystem",
      {
          IVRSystem::InstanceMethod("GetControllerRoleForTrackedDeviceIndex", &IVRSystem::GetControllerRoleForTrackedDeviceIndex),
          IVRSystem::InstanceMethod("GetBoolTrackedDeviceProperty", &IVRSystem::GetBoolTrackedDeviceProperty),
          IVRSystem::InstanceMethod("GetInt32TrackedDeviceProperty", &IVRSystem::GetInt32TrackedDeviceProperty),
          IVRSystem::InstanceMethod("GetFloatTrackedDeviceProperty", &IVRSystem::GetFloatTrackedDeviceProperty),
          IVRSystem::InstanceMethod("GetStringTrackedDeviceProperty", &IVRSystem::GetStringTrackedDeviceProperty),
      });
}