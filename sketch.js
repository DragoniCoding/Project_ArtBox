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
let test;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55);
  test = createButton("testcase");
  test.position(25, 25);
  test.mouseOver(party);
}

function draw() {
}

function party() {
  let val = color(random(255), random(255), random(255));
  test.colour(val);
}