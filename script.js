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

// Điều kiện cấm ghép cặp
const forbiddenPairs = [
  ["Vũ Thị Phương", "Phạm Văn Tiến"],
  ["Nguyễn Thị Ngọc Trang", "Cao Tiến Thiên"]
];

// Hàm tạo hiệu ứng bông tuyết
function createSnowflakes() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 3 + 7 + "s";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflakes, 200);

// Hàm kiểm tra cặp có hợp lệ hay không
function isValidPair(pair) {
  return !forbiddenPairs.some(
    forbidden =>
      (forbidden[0] === pair[0] && forbidden[1] === pair[1]) ||
      (forbidden[1] === pair[0] && forbidden[0] === pair[1])
  );
}

// Hàm tạo cặp ngẫu nhiên
function randomizePairs() {
  const shuffledNames = [...names].sort(() => Math.random() - 0.5);
  const pairs = [];

  for (let i = 0; i < shuffledNames.length; i += 2) {
    const pair = [shuffledNames[i], shuffledNames[i + 1]];
    if (isValidPair(pair)) {
      pairs.push(pair);
    } else {
      return randomizePairs(); // Lặp lại nếu cặp không hợp lệ
    }
  }

  return pairs;
}

// Hàm hiển thị kết quả
function displayResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const pairs = randomizePairs();
  pairs.forEach(pair => {
    const pairText = document.createElement("p");
    pairText.textContent = `${pair[0]} nối với ${pair[1]}`;
    resultDiv.appendChild(pairText);
  });
}

// Xử lý sự kiện nút bấm
document.getElementById("randomizeBtn").addEventListener("click", displayResult);
