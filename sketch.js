function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#1b263b'); // 背景顏色

  // 繪製牌子背景
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 250, 15); // 牌子有圓角

  // 顯示文字資訊
  textAlign(CENTER, CENTER);
  textSize(24);
  fill('#1b263b'); // 文字顏色

  // 顯示姓名
  text("姓名: 張祉姸", width / 2, height / 2 - 60);

  // 顯示生日
  text("生日: 94/08/12", width / 2, height / 2);

  // 顯示學校
  text("學校: 淡江教科", width / 2, height / 2 + 60);
}
