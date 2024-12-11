// Danh sách các tên
const names = [
  "Nguyễn Đình Trung",
  "Nguyễn Thị Mỹ Linh",
  "Đinh Văn Sĩ",
  "Nguyễn Thị Hồng Ngọc",
  "Vũ Thị Phương",
  "Phạm Văn Tiến",
  "Cao Tiến Thiên",
  "Nguyễn Thị Ngọc Trang"
];

// Hàm tạo cặp ngẫu nhiên đảm bảo mỗi người chỉ xuất hiện 1 lần
function randomizePairs() {
  const shuffledNames = [...names].sort(() => Math.random() - 0.5); // Xáo trộn danh sách ngẫu nhiên
  const pairs = [];

  for (let i = 0; i < shuffledNames.length; i += 2) {
    // Nếu số lượng người lẻ, người cuối sẽ không có cặp
    if (i + 1 < shuffledNames.length) {
      pairs.push([shuffledNames[i], shuffledNames[i + 1]]);
    }
  }

  return pairs;
}

// Hàm hiển thị kết quả
function displayResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Xóa kết quả cũ

  const pairs = randomizePairs();
  pairs.forEach(pair => {
    const pairText = document.createElement("p");
    pairText.textContent = `${pair[0]} nối với ${pair[1]}`;
    resultDiv.appendChild(pairText);
  });
}

// Xử lý sự kiện nút bấm
document.getElementById("randomizeBtn").addEventListener("click", displayResult);
