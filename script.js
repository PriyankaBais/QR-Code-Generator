document.addEventListener("DOMContentLoaded", () => {
    const qrText = document.getElementById("qrText");
    const qrSizes = document.getElementById("qrSizes");
    const colorLight = document.getElementById("colorLight");
    const colorDark = document.getElementById("colorDark");
    const qrCodeView = document.getElementById("qrCodeView");
    const downloadQR = document.getElementById("downloadQR");

    function generateQRCode() {
        const qrContent = qrText.value;
        const size = qrSizes.value;
        const bgColor = colorLight.value || "#ffffff";
        const fgColor = colorDark.value || "#000000";

        if (qrContent.trim() !== "") {
            qrCodeView.innerHTML = ""; // Clear any previous QR code

            new QRCode(qrCodeView, {
                text: qrContent,
                width: size,
                height: size,
                colorDark: fgColor,
                colorLight: bgColor,
            });
        }
    }

    qrText.addEventListener("keyup", generateQRCode);
    qrSizes.addEventListener("change", generateQRCode);
    colorLight.addEventListener("change", generateQRCode);
    colorDark.addEventListener("change", generateQRCode);

    downloadQR.addEventListener("click", () => {
        const qrCanvas = qrCodeView.querySelector("canvas");
        if (qrCanvas) {
            const link = document.createElement("a");
            link.href = qrCanvas.toDataURL("image/png");
            link.download = "qrcode.png";
            link.click();
        }
    });
});
