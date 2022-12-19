#include "ivrnotifications.h"

#include "util.h"

IVRNotifications::IVRNotifications(const Napi::CallbackInfo& info) : ObjectWrap(info){};

Napi::Value IVRNotifications::CreateNotification(const Napi::CallbackInfo& info) {
  CHECK_NUM_ARGUMENTS(info, 5);
  Napi::Env env = info.Env();

  vr::VROverlayHandle_t handle = info[0].As<Napi::Number>().Int64Value();
  vr::EVRNotificationType type = static_cast<vr::EVRNotificationType>(info[1].As<Napi::Number>().Int32Value());
  const char* text = info[2].As<Napi::String>().Utf8Value().c_str();
  vr::EVRNotificationStyle style = static_cast<vr::EVRNotificationStyle>(info[3].As<Napi::Number>().Int32Value());

  vr::VRNotificationId id = info[4].As<Napi::Number>();

  vr::EVRNotificationError err = vr::VRNotifications()->CreateNotification(handle, 0, type, text, style, nullptr, &id);

  if (err) {
    Napi::Error::New(env, "There was an error creating the notification");

    return env.Null();
  }

  return Napi::Boolean::New(env, true);
}

Napi::Function IVRNotifications::GetClass(Napi::Env env) {
  return DefineClass(env, "IVRNotifications", {IVRNotifications::InstanceMethod("CreateNotification", &IVRNotifications::CreateNotification)});
}