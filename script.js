// Danh sách tên người tham gia
const participants = [
    "Nguyễn Đình Trung",
    "Nguyễn Thị Mỹ Linh",
    "Đinh Văn Sĩ",
    "Nguyễn Thị Hồng Ngọc",
    "Vũ Thị Phương",
    "Phạm Văn Tiến",
    "Cao Tiến Thiên",
    "Nguyễn Thị Ngọc Trang",
    "Đỗ Văn Cường"
];

document.getElementById("drawButton").addEventListener("click", () => {
    // Random chọn người
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedPerson = participants[randomIndex];

    // Hiển thị kết quả
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Người nhận quà là: ${selectedPerson}`;
});
