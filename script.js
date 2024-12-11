// Danh sách các tên
const names = [
  "Cao Tiến Thiên",
  "Đinh Văn Sĩ",
  "Nguyễn Thị Ngọc Trang",
  "Nguyễn Thị Mỹ Linh",
  "Phạm Văn Tiến",
  "Nguyễn Thị Hồng Ngọc",
  "Vũ Thị Phương",
  "Nguyễn Đình Trung"
];

// Hàm tạo vòng tròn ghép cặp
function createCircularPairs() {
  const shuffledNames = [...names].sort(() => Math.random() - 0.5); // Xáo trộn danh sách ngẫu nhiên
  const pairs = [];

  for (let i = 0; i < shuffledNames.length; i++) {
    const current = shuffledNames[i];
    const next = shuffledNames[(i + 1) % shuffledNames.length]; // Người tiếp theo, vòng lại đầu nếu cuối danh sách
    pairs.push(`${current} nối với ${next}`);
  }

  return pairs;
}

// Hàm hiển thị kết quả
function displayResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Xóa kết quả cũ

  const pairs = createCircularPairs();
  pairs.forEach(pair => {
    const pairText = document.createElement("p");
    pairText.textContent = pair;
    resultDiv.appendChild(pairText);
  });
}

// Xử lý sự kiện nút bấm
document.getElementById("randomizeBtn").addEventListener("click", displayResult);
