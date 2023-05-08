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

  }
  drawing(type) {
    if (mouseIsPressed) {
      if (type === "circle") {
        circle(mouseX, mouseY, this.size);
      }
    }

  }
}

let drawColor = "black";
let test;

function setup() {
  createCanvas(500, 500);
  background(55);
}

function draw() {

}
