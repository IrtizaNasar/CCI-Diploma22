let counter = 0; // variable to track which circle is being drawn
let step = 80; // variable to store the size of the circle
let x = step / 2; // variable to store the x position of the circle
let y = step / 2; // variable to store the y position of the circle

/* The code in the setup function runs only once when the sketch starts */
function setup() {
  createCanvas(400, 400); // p5 function to create a canvas of the set size 
  background(0); // draws the background a set colour
}


/* The code in the draw function is run on every frame until closed */
function draw() {

  // this code loops until all the circles are drawn
  while (counter < (width / step) * (height / step)) {

    fill(153,50,204); // set the colour
 
    ellipse(x, y, step, step); // draw the circle

    x += step; // updates the x position once the circle is drawn

    // the code in this conditional statement is only run once the x position moves off the screen
    if(x >= width){
      x = step/2; // resets the x position to the left of the canvas to start the row again
      y += step; // updates the y position to move onto the next row of circles
    }


    // increment the counter by one every loop
    counter++;
  }

  // after the loop reset the counter
  counter = 0;
}
