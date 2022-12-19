const vr = require('../index');

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function generateImage(w, h) {
    const imgArray = [];
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

const init = async () => {

    try {
        vr.VR_Init(vr.EVRApplicationType.VRApplication_Overlay);

        const overlay = new vr.IVROverlay();

        const handle = overlay.CreateOverlay("test", "test");
        overlay.SetOverlayWidthInMetres(handle, 0.2);

        const imgSize = 1024;
        const image = generateImage(imgSize, imgSize);

        overlay.SetOverlayTextureFromBuffer(handle, image, imgSize, imgSize);

        let tracked_device_index = 0;
        const system = new vr.IVRSystem();
        while (!tracked_device_index) {
            for (let i = 1; i < vr.k_unMaxTrackedDeviceCount; i++) {
                const role = system.GetControllerRoleForTrackedDeviceIndex(i);

                if (role === vr.ETrackedControllerRole.TrackedControllerRole_LeftHand) {
                    tracked_device_index = i;
                    break;
                }
            }
            await sleep(1000);
        }

        console.log(tracked_device_index);

        overlay.SetOverlayTransformTrackedDeviceRelative(handle, tracked_device_index, [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0]
        ]);

        overlay.ShowOverlay(handle);

    } catch (e) {
        console.trace(e);
    }

    await sleep(2147483600);
}

init();