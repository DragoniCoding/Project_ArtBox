// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let drawColor = "black";
let penImg, penRadio, penSlide, colPick, backPick, backSelect;

let canvasW = prompt("How big do you want you're drawing's width?", 1000);
let canvasH = prompt("How big do you want you're drawing's Height?", 1000);

function preload() {
  penImg = createImg("assets/pixilart-drawing.png", "fuck");
  
  radioSet();
  colouring();
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
  display(penSlide.value(), penRadio.value());
}

function windowResized() {
  resizeCanvas(canvasW, canvasH, true);
}

function display(size, type) {
  if (mouseIsPressed) {
    if (type === "pencil") {
      push();
      fill(colPick.value());
      circle(pmouseX, pmouseY, size);
      circle(mouseX, mouseY, size);
      pop();
    }
    else if (type === "eraser") {
      push();
      fill(backPick.value());
      rect(mouseX, mouseY, size);
      pop();
    }
    else if (type === "chizel") {
      push();
      fill(colPick.value());
      rect(pmouseX, pmouseY, size);
      rect(mouseX, mouseY, size);
      pop();
    }
    else if (type === "fancyRight") {
      push();
      stroke(colPick.value());
      strokeWeight(size);
      line(mouseX - 5, mouseY +5, mouseX +5, mouseY -5);
      pop();
    }
    else if (type === "fancyLeft") {
      push();
      stroke(colPick.value());
      strokeWeight(size);
      line(mouseX - 5, mouseY -5, mouseX +5, mouseY +5);
      pop();
    }
  }
}

function radioSet() {
  // Pen Radio (option selector)
  penRadio = createRadio();
  penRadio.position(windowWidth/2, windowHeight/55);
  penRadio.center("vertical");
  penRadio.option("pencil", "Pencil");
  penRadio.option("eraser", "Eraser");
  penRadio.option("chizel", "Chizel");
  penRadio.option("fancyRight", "Calligraphy Forward");
  penRadio.option("fancyLeft", "Calligraphy Backward");
  penRadio.selected("2");
}

function colouring() {
  //Background picker
  backPick = createColorPicker("#f8f8ff");
  backPick.position(200, 20);

  //Pen picker
  colPick = createColorPicker("#eeeeee");
  colPick.position(260, 20);
}