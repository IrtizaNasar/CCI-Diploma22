// 5 variables to store the angle of each circle
let angleOne = 0;
let angleTwo = 0;
let angleThree = 0;
let angleFour = 0;
let angleFive = 0;

let xpos = 80; // variable to store the x position of each rectangle
let xstep = 60; // variable to store the distance between the rectangle (on the x axis)

/* The code in the setup function runs only once when the sketch starts */
function setup() {

  createCanvas(400, 400); // p5 function to create a canvas of the set size 
  angleMode(DEGREES); // sets all rotation values to be in degrees
  rectMode(CENTER); // sets the position values of each rectangle to be from the center of the shape

}

/* The code in the draw function is looped on every frame until closed */
function draw() {

  background(0); // draws the background a set colour
  
  // start a drawing section
  push();

    fill(153,50,204); // set the colour

    translate(xpos + (xstep * 0), height/2); // set the drawing position

    rotate(angleOne); // set the drawing rotation

    rect(0, 0, 50, 50); // draw a rectangle - notice the position is at 0 as the drawing position is set using translate()
    
    angleOne = angleOne + 1; // update the angle on every draw loop

  pop(); // end the drawing section to reset the drawing position and orientation to default
 
  // repeat the code to draw more rectangles
  push();
    fill(153,50,204);
    translate(xpos + (xstep * 1), height/2);
    rotate(angleTwo);
    rect(0, 0, 50, 50);
    angleTwo = angleTwo + 25;
  pop();

  push();
    fill(153,50,204);
    translate(xpos + (xstep * 2), height/2);
    rotate(angleThree);
    rect(0, 0, 50, 50);
    angleThree = angleThree + 10;
  pop();

  push();
    fill(153,50,204);
    translate(xpos + (xstep * 3), height/2);
    rotate(angleFour);
    rect(0, 0, 50, 50);
    angleFour = angleFour + 5;
  pop();

  push();
  fill(153,50,204);
  translate(xpos + (xstep * 4), height/2);
  rotate(angleFive);
  rect(0, 0, 50, 50);
  angleFive = angleFive + 2;
pop();
  
}
