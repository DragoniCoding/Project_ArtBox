// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Pen {
  constructor(size, type) {
    this.size = size;
    this.type = type;
  }

  display() {
    if (mouseIsPressed) {
      if (this.type === "pencil") {
        circle(pmouseX, pmouseY, this.size);
        circle(mouseX, mouseY, this.size);
      }
      else if (this.type === "chizel") {
        rect(mouseX, mouseY, this.size);
      }
      else if (this.type === "fancyRight") {
        line(mouseX, mouseY, mouseX, mouseY);
      }
      else if (this.type === "fancyLeft") {
        circle(mouseX-5, mouseY-5, mouseX+5, mouseY+5);
      }
    }
  }
}

let drawColor = "black";
let thePen, penImg, penRadio, penSlide, colPick;

let canvasW = prompt("How big do you want you're drawing's width?", 1000);
let canvasH = prompt("How big do you want you're drawing's Height?", 1000);

function preload() {
  penImg = createImg("assets/pixilart-drawing.png", "fuck");
}

function setup() {
  createCanvas(canvasW, canvasH);
  background(55);
  penImg.position(70, 55);
  // img
  penImg = createImg("assets/pixilart-drawing.png", "pen fail");

  // Pen Radio (option selector)
  penRadio = createRadio();
  penRadio.position(0, 0);
  penRadio.center("vertical");
  penRadio.option("pencil", "Pencil");
  penRadio.option("chizel", "Chizel");
  penRadio.option("fancyRight", "Calligraphy Forward");
  penRadio.option("fancyLeft", "Calligraphy Backward");

  //Width adjuster 
  penSlide = 5;

  //The Pen (du dun)
  thePen = new Pen(penSlide, penRadio.value());
}

function draw() {
  fill("green");
  thePen.display();
}
