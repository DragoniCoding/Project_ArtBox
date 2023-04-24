// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class button {
  constructor(x, y, length, wideth, colour){ //what makes up the button
    this.x = x;
    this.y = y;
    this.length = length;
    this.wideth = wideth;
    this.colour = colour;
  }

  display(){ // displaying the button
    fill(this.colour);
    rect(this.x, this.y, this.wideth, this.length);
  }
  isPressed(){

  }
}

let drawColor = "black";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(mouseX, mouseY, 15, 20);
}
