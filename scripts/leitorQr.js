const qrcodeBtn = document.getElementById("qrcode");
const videoElement = document.getElementById("videoElemento");
const qrResult = document.getElementById("qrResultado");

let videoStream = null;


async function startCamera() {
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" } 
        });
        videoElement.srcObject = videoStream;
        scanQRCode();
    } catch (err) {
        alert("Erro ao acessar a câmera: " + err.message);
    }
}


function scanQRCode() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    function detectQRCode() {
        if (videoStream && videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
            canvas.height = videoElement.videoHeight;
            canvas.width = videoElement.videoWidth;
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const qrCode = jsQR(imageData.data, canvas.width, canvas.height);

            if (qrCode) {
                qrResult.innerText = "QR Code Detectado: " + qrCode.data;
                videoStream.getTracks().forEach(track => track.stop());
            }
        }

        requestAnimationFrame(detectQRCode);
    }

    detectQRCode();
}

qrcodeBtn.addEventListener("click", () => {
    qrcodeBtn.disabled = true;  
    startCamera();  
});