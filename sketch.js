// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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
let testImg;
let testP5;

function preload() {
  testImg = loadImage("assets/pixilart-drawing.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(55);
  testP5 = createButton("Success");
  testP5.position(0, 55);
  testP5.mousePressed(upppp);
  testP5.html();
}


let val = 255;
function upppp() {
  val -= 30;
  background(val);
}