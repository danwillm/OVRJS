import {
    ETrackedControllerRole,
    ETrackedPropertyError,
    ETrackingUniverseOrigin, EVRApplicationType, HmdMatrix34_t, TrackedDeviceIndex_t, TrackedDeviceProperty,
    VREvent_t,
    VROverlayError,
    VROverlayFlags,
    VROverlayInputMethod
} from "./headers";
import * as Buffer from "buffer";

const ovr = require('bindings')('openvr');

export class VROverlay {
    private ivroverlay;

    private readonly handle: number;

    constructor(name: string, key: string) {
        this.ivroverlay = new ovr.IVROverlay();

        this.handle = this.ivroverlay.CreateOverlay(name, key);
    }

    ShowOverlay(): VROverlayError {
        return this.ivroverlay.ShowOverlay(this.handle);
    }

    SetOverlayWidthInMetres(width: number): VROverlayError {
        return this.ivroverlay.SetOverlayWidthInMetres(this.handle, width);
    }

    SetOverlayTextureFromBuffer(buffer: Buffer, width: number, height: number) {
        return this.ivroverlay.SetOverlayTextureFromBuffer(this.handle, buffer, width, height);
    }

    /** Sets the color tint of the overlay quad. Use 0.0 to 1.0 per channel. */
    SetOverlayColor(red: number, green: number, blue: number) {
        return this.ivroverlay.SetOverlayColor(this.handle, red, green, blue);
    }

    SetOverlayTransformTrackedDeviceRelative(device_index: TrackedDeviceIndex_t, transform: HmdMatrix34_t) {
        return this.ivroverlay.SetOverlayTransformTrackedDeviceRelative(this.handle, device_index, transform);
    }

    SetOverlayTransformAbsolute(origin: ETrackingUniverseOrigin, transform: HmdMatrix34_t) {
        return this.ivroverlay.SetOverlayTransformAbsolute(this.handle, origin, transform);
    }

    SetOverlayInputMethod(method: VROverlayInputMethod) {
        return this.ivroverlay.SetOverlayInputMethod(this.handle, method);
    }

    SetOverlayFlag(flag: VROverlayFlags) {
        return this.ivroverlay.SetOverlayFlag(this.handle, flag);
    }

    PollNextOverlayEvent(): VREvent_t | boolean {
        return this.ivroverlay.PollNextOverlayEvent(this.handle);
    }
}

export class VRSystem {
    private ivrsystem;

    constructor() {
        this.ivrsystem = new ovr.IVRSystem();
    }

    GetControllerRoleForTrackedDeviceIndex(device_index: TrackedDeviceIndex_t): ETrackedControllerRole {
        return this.ivrsystem.GetControllerRoleForTrackedDeviceIndex(device_index);
    }

    GetBoolTrackedDeviceProperty(device_index: TrackedDeviceIndex_t, property: TrackedDeviceProperty): boolean | ETrackedPropertyError {
        return this.ivrsystem.GetBoolTrackedDeviceProperty(device_index, property);
    }

    GetInt32TrackedDeviceProperty(device_index: TrackedDeviceIndex_t, property: TrackedDeviceProperty): number | ETrackedPropertyError {
        return this.ivrsystem.GetInt32TrackedDeviceProperty(device_index, property);
    }

    GetFloatTrackedDeviceProperty(device_index: TrackedDeviceIndex_t, property: TrackedDeviceProperty): number | ETrackedPropertyError {
        return this.ivrsystem.GetFloatTrackedDeviceProperty(device_index, property);
    }

    GetStringTrackedDeviceProperty(device_index: TrackedDeviceIndex_t, property: TrackedDeviceProperty): string | ETrackedPropertyError {
        return this.ivrsystem.GetStringTrackedDeviceProperty(device_index, property);
    }
}

export const VR_Init = (application_type: EVRApplicationType) => ovr.VR_Init(application_type);

export * from "./headers";
export const bindings = ovr;