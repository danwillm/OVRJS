#include "util.h"

vr::HmdMatrix34_t ArgumentToHmdMatrix34(const Napi::Value& input) {
  vr::HmdMatrix34_t result{};

  Napi::Array rows = input.As<Napi::Array>();

  for (int i = 0; i < 3; i++) {
    Napi::Array cols = static_cast<Napi::Value>(rows[i]).As<Napi::Array>();

    for (int j = 0; j < 4; j++) {
      result.m[i][j] = static_cast<Napi::Value>(cols[j]).As<Napi::Number>();
    }
  }

  return result;
}