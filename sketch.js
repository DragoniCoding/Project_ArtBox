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
  constructor(x, y, type) {
    this.y = y;
    this.x = x;
    this.type = type;
  }

  display() {

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