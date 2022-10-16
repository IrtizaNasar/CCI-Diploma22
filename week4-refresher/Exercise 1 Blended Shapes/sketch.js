function setup() {
  createCanvas(400, 400);
  // use blendMode to sest how elements are drawn on top of each other
  blendMode(BLEND);

  // draw a black background
  background(0);

  // set the shapes to be draw with no stroke (border)
  noStroke();

  // use blendMode to sest how elements are drawn on top of each other
  blendMode(DIFFERENCE);
  // draw a rectangle + set the fill colour
  fill(255);
  rect(width/2 - 50, height/2 - 50, 100);

  push();
    // draw the triangle at this position
    translate((width/2) - 70, (height/2) - 70);
    // call the function to draw the triangle
    drawTriangle();
  pop();

  // draw a circle
  ellipse(width/2 + 10, height/2 + 10, 100);

}


// function to draw a triangle
function drawTriangle() {
  // draw a triangle
  triangle(
    0, 100, 
    100, 100,
    50, 0
  );
}










