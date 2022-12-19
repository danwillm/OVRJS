#pragma once

#include <napi.h>
#include <openvr.h>

#define CHECK_NUM_ARGUMENTS(info, count)                                                        \
  if (info.Length() < count) {                                                                  \
    Napi::TypeError::New(info.Env(), "Wrong number of arguments").ThrowAsJavaScriptException(); \
    return info.Env().Null();                                                                   \
  }

vr::HmdMatrix34_t ArgumentToHmdMatrix34(const Napi::Value& input);