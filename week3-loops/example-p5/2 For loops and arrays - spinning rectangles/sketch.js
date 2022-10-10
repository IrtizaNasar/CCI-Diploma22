let angles = [0,0,0,0,0]; // declare an array to store the angle each rectangle is rotated
let speeds = [1,25,10,5,2]; // declare an array to store the speed at which rectangle rotates
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
  
  /* A rectangle is drawn on every loop, the amount of times 
  the for loop iterates is determined by the size of the angle array */
  for (let i = 0; i<angles.length; i++) {
    
    // start a drawing section
    push();    
      fill(153,50,204); // set the colour

      translate(xpos + (xstep * i), height/2); // set the drawing position

      rotate(angles[i]); // set the drawing rotation

      rect(0, 0, 50, 50); // draw a rectangle - notice the position is at 0

      angles[i] = angles[i] + speeds[i]; // update the angle
      
    pop(); // end the drawing section to reset the drawing position and orientation to default
  }
  
}
