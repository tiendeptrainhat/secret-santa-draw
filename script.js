// Danh sách người tham gia
const participants = ['Nguyễn Đình Trung', 'Nguyễn Thị Mỹ Linh', 'Đinh Văn Sĩ', 'Nguyễn Thị Hồng Ngọc', 'Vũ Thị Phương', 'Phạm Văn Tiến', 'Cao Tiến Thiên', 'Nguyễn Thị Ngọc Trang', 'Nguyễn Thị Ngọc Trang', 'Đỗ Văn Cường'];

// Xử lý sự kiện nút "Bốc thăm"
document.getElementById('drawButton').addEventListener('click', function () {
    // Xáo trộn danh sách
    const shuffledParticipants = shuffleArray(participants.slice());

    // Tạo cặp
    const pairs = [];
    while (shuffledParticipants.length > 1) {
        const person1 = shuffledParticipants.pop();
        const person2 = shuffledParticipants.pop();
        pairs.push(`${person1} nối với ${person2}`);
    }

    // Nếu còn dư 1 người thì thêm vào danh sách
    if (shuffledParticipants.length === 1) {
        pairs.push(`${shuffledParticipants.pop()} chưa có cặp`);
    }

    // Hiển thị kết quả trên giao diện
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Xóa nội dung cũ
    pairs.forEach(pair => {
        const p = document.createElement('p');
        p.textContent = pair;
        resultDiv.appendChild(p);
    });

    // Tắt nút để không bấm lại
    this.disabled = true;
});

// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
