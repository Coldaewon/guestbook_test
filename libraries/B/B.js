let inputBox;
let sendButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  
  inputBox = createInput("");
  inputBox.position(20, height / 2);
  inputBox.size(300, 30);
  
  sendButton = createButton("전송");
  sendButton.position(330, height / 2);
  sendButton.mousePressed(sendText);
}

function sendText() {
  let textValue = inputBox.value().trim();
  if (textValue !== "") {
    localStorage.setItem("sharedText", textValue);
    inputBox.value("");
  }
}
