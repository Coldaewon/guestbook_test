let texts = [];
let inputText = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(LEFT, TOP);
}

function draw() {
  background(0);
  fill(255);
  
  let y = 20;
  for (let i = 0; i < texts.length; i++) {
    text(texts[i], 20, y);
    y += 30;
  }
  
  text(inputText + "|", 20, y); // 입력 중인 텍스트 표시
}

function keyTyped() {
  if (keyCode !== ENTER) {
    inputText += key;
  }
}

function keyPressed() {
  if (keyCode === ENTER && inputText.trim() !== "") {
    texts.push(inputText);
    inputText = "";
    if (texts.length * 30 > height - 20) {
      texts.shift(); // 화면을 벗어나면 가장 오래된 문장 삭제
    }
  }
}
