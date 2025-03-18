let texts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(LEFT, TOP);
}

function draw() {
  background(0);
  fill(255);
  
  let newText = localStorage.getItem("sharedText");
  if (newText && !texts.includes(newText)) {
    texts.push(newText);
    localStorage.removeItem("sharedText");
  }
  
  let y = 20;
  for (let i = 0; i < texts.length; i++) {
    text(texts[i], 20, y);
    y += 30;
  }
}
