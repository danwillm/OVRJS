import * as headers from "./headers";
import {ETrackedPropertyError} from "./headers";

const ovr = require('bindings')('openvr');

class VROverlay {
    private ivroverlay;

    private readonly handle: number;

    constructor(name: string, key: string) {
        this.ivroverlay = new ovr.IVROverlay();

        this.handle = this.ivroverlay.CreateOverlay(name, key);
    }

    ShowOverlay() : headers.VROverlayError {
        return this.ivroverlay.ShowOverlay(this.handle);
    }

    SetOverlayWidthInMetres(width: number) : headers.VROverlayError {
        return this.ivroverlay.SetOverlayWidthInMetres(width);
    }

    SetOverlayTextureFromBuffer(buffer: Uint8ClampedArray, width: number, height: number) {
        return this.ivroverlay.SetOverlayTextureFromBuffer(this.handle, buffer, width, height);
    }

    /** Sets the color tint of the overlay quad. Use 0.0 to 1.0 per channel. */
    SetOverlayColor(red: number, green: number, blue: number) {
        return this.ivroverlay.SetOverlayColor(this.handle, red, green, blue);
    }

    SetOverlayTransformTrackedDeviceRelative(device_index: headers.TrackedDeviceIndex_t, transform: headers.HmdMatrix34_t) {
        return this.ivroverlay.SetOverlayTransformTrackedDeviceRelative(this.handle, device_index, transform);
    }

    SetOverlayTransformAbsolute(origin: headers.ETrackingUniverseOrigin, transform: headers.HmdMatrix34_t) {
        return this.ivroverlay.SetOverlayTransformAbsolute(this.handle, origin, transform);
    }

    SetOverlayInputMethod(method: headers.VROverlayInputMethod) {
        return this.ivroverlay.SetOverlayInputMethod(this.handle, method);
    }

    SetOverlayFlag(flag: headers.VROverlayFlags) {
        return this.ivroverlay.SetOverlayFlag(this.handle, flag);
    }

    PollNextOverlayEvent() : headers.VREvent_t | boolean {
        return this.ivroverlay.PollNextOverlayEvent(this.handle);
    }
}

class VRSystem {
    private ivrsystem;

    constructor() {
        this.ivrsystem = new ovr.IVRSystem();
    }

    GetControllerRoleForTrackedDeviceIndex(device_index: headers.TrackedDeviceIndex_t) : headers.ETrackedControllerRole {
        return this.ivrsystem.GetControllerRoleForTrackedDeviceIndex(device_index);
    }

    GetBoolTrackedDeviceProperty(device_index: headers.TrackedDeviceIndex_t, property: headers.TrackedDeviceProperty) : boolean | ETrackedPropertyError {
        return this.ivrsystem.GetBoolTrackedDeviceProperty(device_index, property);
    }

    GetInt32TrackedDeviceProperty(device_index: headers.TrackedDeviceIndex_t, property: headers.TrackedDeviceProperty) : number | ETrackedPropertyError {
        return this.ivrsystem.GetInt32TrackedDeviceProperty(device_index, property);
    }

    GetFloatTrackedDeviceProperty(device_index: headers.TrackedDeviceIndex_t, property: headers.TrackedDeviceProperty) : number | ETrackedPropertyError {
        return this.ivrsystem.GetFloatTrackedDeviceProperty(device_index, property);
    }

    GetStringTrackedDeviceProperty(device_index: headers.TrackedDeviceIndex_t, property: headers.TrackedDeviceProperty) : string | ETrackedPropertyError {
        return this.ivrsystem.GetStringTrackedDeviceProperty(device_index, property);
    }
}

export default {
    VROverlay,
    VRSystem,
    ...headers,
    ...ovr
};