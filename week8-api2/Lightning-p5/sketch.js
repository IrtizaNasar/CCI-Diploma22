var xpos1 = 0;
var ypos1 = 0;
var xpos2 = 0;
var ypos2 = height / 2;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
}

function draw() {
  for (var i = 0; i < 4; i++) {
    xpos1 = xpos2;
    ypos1 = ypos2;
    xpos2 = xpos1 + int(random(-20, 20));
    ypos2 = ypos1 + int(random(-10, 20));
    
    line(xpos1, ypos1, xpos2, ypos2);

    if ((xpos2>width) | (xpos2<0) | (ypos2>height) | (ypos2<0)) {
      background(0);
      xpos2 = int(random(0, width));
      ypos2 = 0;
    }
  }
}

