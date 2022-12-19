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
            const r = (yy * 1.0) / h;
            const g = (xx * 1.0) / h;

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
        overlay.SetOverlayWidthInMetres(handle, 1.0);

        const imgSize = 1024;
        const image = generateImage(imgSize, imgSize);

        overlay.SetOverlayTextureFromBuffer(handle, image, imgSize, imgSize);

        overlay.SetOverlayTransformTrackedDeviceRelative(handle, 1, [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, -1]
        ]);

        overlay.ShowOverlay(handle);

    } catch (e) {
        console.trace(e);
    }

    await sleep(2147483600);
}

init();