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
let testP5, testImg, rad, colPick;

function preload() {
  testImg = createImg("assets/pixilart-drawing.png", "test fail");
}

function setup() {
  createCanvas(windowWidth/1.05, windowHeight/1.5);
  background(55);
  testP5 = createButton("Success");
  testP5.position(0, 55);
  testP5.mousePressed(upppp);
  testImg.position(70, 55);
}


let val = 255;
function upppp() {
  val -= 30;
  background(val);
}