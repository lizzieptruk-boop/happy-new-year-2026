const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const wishText = document.getElementById("wish-text");
const popup = document.getElementById("result-popup");

const wishes = [
    "Chúc năm mới an khang, tâm sáng – trí vững – đường dài thênh thang, việc gì cũng hanh thông.",
    "Năm mới chúc gia đình luôn bình an, nhà cửa ấm êm, tài lộc gõ cửa mỗi ngày.",
    "Chúc một năm đủ sức khỏe để sống trọn, đủ bình an để an lòng và đủ thành công để tự hào.",
    "Mong năm mới mang đến nhiều cơ hội mới, quyết định đúng đắn và những bước tiến vững vàng.",
    "Chúc mọi dự định ấp ủ đều nảy mầm, mọi cố gắng đều được đền đáp xứng đáng.",
    "Năm mới vạn sự như ý, tâm thế an nhiên, sự nghiệp thăng hoa, gia đạo thuận hòa.",
    "Chúc mỗi ngày trong năm đều có niềm vui nhỏ, may mắn lớn và những người tử tế bên cạnh.",
    "Mong năm mới nhẹ lòng với chuyện cũ, mạnh mẽ cho chặng đường mới và rực rỡ theo cách riêng của bạn.",
    "Chúc khởi đầu thuận lợi, giữa năm rực rỡ, cuối năm viên mãn.",
    "Năm mới kính chúc sức khỏe dồi dào, tinh thần vững vàng, tiền vào như nước và cuộc sống ngày càng thăng hoa."
];

const colors = ["#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00"];
let currentRotation = 0;

// Vẽ vòng quay
function drawWheel() {
    const sliceAngle = (2 * Math.PI) / 10;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, i * sliceAngle, (i + 1) * sliceAngle);
        ctx.fill();
        ctx.stroke();

        // Vẽ số từ 1 - 10
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(i * sliceAngle + sliceAngle / 2);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 30px Arial";
        ctx.fillText(i + 1, 150, 10);
        ctx.restore();
    }
}

spinBtn.onclick = () => {
    const randomSpin = Math.floor(Math.random() * 3600) + 1800; // Quay ít nhất 5 vòng
    currentRotation += randomSpin;
    canvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        const actualDeg = currentRotation % 360;
        const index = 9 - Math.floor(actualDeg / 36); // Tính toán index dựa trên độ xoay
        wishText.innerText = wishes[index];
        popup.classList.remove("hidden");
    }, 4000);
};

function closePopup() {
    popup.classList.add("hidden");
}

drawWheel();