// Tạo hiệu ứng bông tuyết
function createSnowflakes() {
  const snowflakeContainer = document.getElementById('snowflakes');
  const snowflakeCount = 50; // Số lượng bông tuyết

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDelay = Math.random() * 10 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowflakeContainer.appendChild(snowflake);

    // Xóa bông tuyết sau khi rơi
    snowflake.addEventListener('animationend', () => snowflake.remove());
  }
}

// Gọi hàm tạo hiệu ứng bông tuyết
createSnowflakes();

// Giới hạn nút bốc thăm
let hasDrawn = false; // Cờ kiểm tra việc bấm nút

document.getElementById('draw-button').addEventListener('click', function () {
  if (hasDrawn) {
    alert('Bạn chỉ được bốc thăm 1 lần!');
    return;
  }

  hasDrawn = true;

  // Logic bốc thăm
  const participants = ['Nguyễn Đình Trung', 'Nguyễn Thị Mỹ Linh', 'Đinh Văn Sĩ', 'Nguyễn Thị Hồng Ngọc', 'Vũ Thị Phương', 'Phạm Văn Tiến', 'Cao Tiến Thiên', 'Nguyễn Thị Ngọc Trang', 'Nguyễn Thị Ngọc Trang', 'Đỗ Văn Cường'];
  const randomIndex = Math.floor(Math.random() * participants.length);
  alert('Người được chọn là: ' + participants[randomIndex]);
});
