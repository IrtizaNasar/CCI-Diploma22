/* This sketch demonstrates the noise function by drawing a 
line of rectangles using a for loop */ 

let xpos = 5; // variable to store the x position of each rectangle
let xstep = 5; // variable to store the distance between the rectangle (on the x axis)


/* The code in the setup function runs only once when the sketch starts */
function setup() {
  createCanvas(600, 400); // p5 function to create a canvas of the set size
  rectMode(CENTER); // sets the position values of each rectangle to be from the center of the shape
}

/* The code in the draw function is looped on every frame until closed */
function draw() {
  background(0); // draws the background a set colour
  
  /* A rectangle is drawn on every loop, the amount of times 
  the for loop iterates is determined by the size of the angle array */
  for (let i = 0; i < width/xstep; i++) {
    
    factor = i/10; // Factors noise output to smoother 
    ypos = map(noise(factor), 0, 1, 0, height); // calculate y position with noise 
    
    //fill(random(255)); // set the colour - random to glitter
    fill(map(mouseX, 0, width, 50, 255)); // use mouse input to change colour

    rect(xpos + (xstep*i), ypos, 5, 5); // draw a rectangle
      
  }
  
}
