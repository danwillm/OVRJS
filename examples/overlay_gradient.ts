import { ETrackedControllerRole, EVRApplicationType, HmdMatrix34_t, k_unMaxTrackedDeviceCount, VROverlay, VRSystem, VR_Init } from '../websrc/index';

const width = 1024;
const height = 1024;

const vrsystem = new VRSystem();

const sleep = (ms: number) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});


const generate_gradient = (w: number, h: number) => {
    let imgArray: Array<number> = [];

    for (let yy = 0; yy < h; yy++) {
        for (let xx = 0; xx < w; xx++) {
            const r = yy / h;
            const g = xx / h;

            imgArray.push(r, g, 0.0, 1.0);
        }
    }

    const image = imgArray.map(v => v * 255.0);

    return Uint8ClampedArray.from(image);
}

const get_left_hand_tracked_device_index = async () => {
    let tracked_device_index = 0;
    while (!tracked_device_index) {
        for (let i = 1; i < k_unMaxTrackedDeviceCount; i++) {
            const role = vrsystem.GetControllerRoleForTrackedDeviceIndex(i);

            if (role === ETrackedControllerRole.TrackedControllerRole_LeftHand) {
                tracked_device_index = i;
                break;
            }
        }
        await sleep(1000);
    }

    return tracked_device_index;
}

(async () => {
    console.log("initialising vr...");
    VR_Init(EVRApplicationType.VRApplication_Overlay);
    console.log("initialised vr!");

    console.log("setting up overlay...");
    const overlay = new VROverlay("OVRJS example", `${Date.now()}`);
    overlay.SetOverlayWidthInMetres(0.2);
    console.log("set up overlay!");

    console.log("generating gradient to display...");
    const gradient = generate_gradient(width, height);
    overlay.SetOverlayTextureFromBuffer(Buffer.from(gradient), width, height);
    console.log("generated gradient to display!");

    console.log("finding left controller to display overlay on...");
    const left_hand_index = await get_left_hand_tracked_device_index();
    console.log("found left controller with id: " + left_hand_index);

    const transform: HmdMatrix34_t = {
        m: [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0]
        ],
    };
    overlay.SetOverlayTransformTrackedDeviceRelative(left_hand_index, transform);

    overlay.ShowOverlay();

    console.log("overlay is displayed!");

    await sleep(2147483600);
})();