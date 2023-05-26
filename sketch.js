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
    this.drewArray = [];
  }

  display() {
    if (mouseIsPressed) {
      if (this.type === "circle") {
        circle(mouseX, mouseY, this.size);
      }
      if (this.type === "chizel") {
        rect(mouseX, mouseY, this.size);
      }
      if (this.type === "fancyRight") {
        line(mouseX, mouseY, mouseX, mouseY);
      }
      if (this.type === "fancyLeft") {
        circle(mouseX, mouseY, this.size);
      }
    }
  }
  drawing(type) {
    this.type = type;
  }
}

let drawColor = "black";
let penImg, penRadio, colPick;

function preload() {
  penImg = createImg("assets/pixilart-drawing.png", "pen fail");
}

function setup() {
  createCanvas(windowWidth/1.05, windowHeight/1.5);
  background(55);
  penImg.position(70, 55);
}

