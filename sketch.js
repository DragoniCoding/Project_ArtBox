// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class button {
  constructor(x, y, length, wideth, img){ //what makes up the button
    this.x = x;
    this.y = y;
    this.length = length;
    this.wideth = wideth;
    this.img = img;
  }

  display(){ // displaying the button
    image(this.img, this.x, this.y, this.wideth, this.length);
  }
  isPressed(){

  }
}

class pen {
  constructor(x, y, size) {
    this.y = y;
    this.x = x;
    this.size = size;
  }

  display() {
    if (mouseIsPressed) {
      if (this.type === "circle") {
        circle(mouseX, mouseY, this.size);
      }
    }
  }
  drawing(type) {
    this.type = type;
  }
}

let drawColor = "black";
let test;
let testImg;
let testP5;

function preload() {
  testImg = loadImage("assets/pixilart-drawing.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(55);
  test = new button(250, 1050, 50, 50, testImg);
  testP5 = createButton("Success");
  testP5.position(0, 55);
  testP5.mousePressed(upppp);
}

function draw() {
  test.display();
}
let val = 255;
function upppp() {
  val -= 30;
  background(val);
}