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

function preload() {
  
}

function setup() {
  createCanvas(1000, 1000);
  background(55);
//  test = new button(250, -200, 50, 50, assets/);
}

function draw() {

}
