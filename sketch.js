// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let drawColor = "black";
let penImg, penRadio, penSlide, colPick, backPick;

let canvasW = prompt("How big do you want you're drawing's width?", 1000);
let canvasH = prompt("How big do you want you're drawing's Height?", 1000);

function preload() {
  penImg = createImg("assets/pixilart-drawing.png", "fuck");
  
  // Pen Radio (option selector)
  penRadio = createRadio();
  penRadio.position(500, 50);
  penRadio.center("vertical");
  penRadio.option("pencil", "Pencil");
  penRadio.option("eraser", "Eraser");
  penRadio.option("chizel", "Chizel");
  penRadio.option("fancyRight", "Calligraphy Forward");
  penRadio.option("fancyLeft", "Calligraphy Backward");

  //Background picker
  backPick = createColorPicker("#f8f8ff");
  backPick.position(200, 20);
}

function setup() {
  createCanvas(canvasW, canvasH);
  background(backPick.value());
  noStroke();

  // img
  penImg.position(70, 55);
  penImg = createImg("assets/pixilart-drawing.png", "pen fail");

  //Width adjuster 
  penSlide = createSlider(1, 20, 3);
  penSlide.position(0, 0);
}

function draw() {
  fill("green");
  display(penSlide.value(), penRadio.value());
}

function display(size, type) {
  if (mouseIsPressed) {
    if (type === "pencil") {
      circle(pmouseX, pmouseY, size);
      circle(mouseX, mouseY, size);
    }
    else if (type === "chizel") {
      rect(pmouseX, pmouseY, size);
      rect(mouseX, mouseY, size);
    }
    else if (type === "fancyRight") {
      stroke("green");
      strokeWeight(size);
      line(pmouseX, pmouseY, mouseX, mouseY);
      noStroke();
    }
    else if (type === "fancyLeft") {
      stroke("green");
      strokeWeight(size);
      line(mouseX-size, mouseY+size, mouseX+size, mouseY-size);
      noStroke();
    }
  }
}
