// ArtBox
// Aidan Thorpe
// ? - June 20, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let penRadio, penSlide, colPick, backPick, backSelect, canvasClear;

let canvasW = prompt("How big do you want you're drawing's width?", 1000);
let canvasH = prompt("How big do you want you're drawing's Height?", 1000);

function preload() {
  
  radioSet();
  colouring();
}

function setup() {
  createCanvas(canvasW, canvasH);
  background(backPick.value());
  noStroke();

  //Width adjuster 
  penSlide = createSlider(1, 20, 3);
  penSlide.position(windowWidth*0.05, 0);

  // Canvas clear
  canvasClear = createButton("Clear Canvas");
  canvasClear.position(windowWidth*0.04, windowHeight*0.10);
  canvasClear.mousePressed(cleared);
}

function draw() {
  display(penSlide.value(), penRadio.value());
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
      rect(mouseX, mouseY, size*3);
      pop();
    }
    else if (type === "chizel") {
      push();
      angleMode("DEGREES");
      translate(mouseX, mouseY);
      rotate(120);
      fill(colPick.value());
      rect(0, 0, size);
      pop();
    }
    else if (type === "fancyRight") {
      push();
      stroke(colPick.value());
      strokeWeight(3);
      line(mouseX - size/2, mouseY +size/2, mouseX +size/2, mouseY -size/2);
      pop();
    }
    else if (type === "fancyLeft") {
      push();
      stroke(colPick.value());
      strokeWeight(3);
      line(mouseX - size/2, mouseY -size/2, mouseX +size/2, mouseY +size/2);
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
  backPick = createColorPicker("#eeeeee");
  backPick.position(200, 20);

  //Pen picker
  colPick = createColorPicker("#A4AEF9");
  colPick.position(260, 20);
}

function cleared() {
  background(backPick.value());
}