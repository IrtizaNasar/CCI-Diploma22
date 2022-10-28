let angle = 0; // variable to store the angle of the sun/moon

// the setup function runs once at the beginning
function setup() {
  // create a canvas on the screen of a set size
  createCanvas(400, 400);
  
  // set the rotation values to be in degrees
  angleMode(DEGREES);
  
  // no outline on shapes
  noStroke();
  
  buttonDay = createButton('Day');  // create a button for the day, display the text 'Day' on it
  buttonDay.position(300, 300); // set the position of the button
  buttonDay.mousePressed(theDay); // set the function to be called when the button is clicked

  buttonNight = createButton('Night'); // create a button for the night, display the text 'Night' on it
  buttonNight.position(100, 300); // set the position of the button
  buttonNight.mousePressed(theNight); // set the function to be called when the button is clicked

  slider = createSlider(180, 360, 180); // create a slider with range 180 to 360, set the slider to start at 180
  slider.position(100, 250); // set the position of the slider
  slider.style('width', '200px'); // set the width of the slider
}

/* the draw function loops until the program is closed */
function draw() {

  // draw the background for sky colour
  background(153, 0, 153);

  /* draw 2 ellipses in a push and pop
   section to rotate around the middle
   of the canvas */
  push();

    translate(width/2, height/2); // set the drawing position to the centre
    rotate(angle); // set the angle of the drawing position
    
    // draw the Sun
    fill(255);
    ellipse(0, -100, 50, 50);
    
    // draw the Moon
    fill(100);
    ellipse(0, 100, 50, 50);

  pop();

  // draw a rectangle for the foreground
  fill(0, 102, 102);
  rect(0, 200, 400, 250);

  // update angle of sun/moon with slider
  angle = slider.value();

}

/* function called when the day button
is pressed. Sets the angle to position
the sun at the top, and updates the slider */
function theDay() {
  angle = 360;
  slider.value(360);
}

/* function called when the night button
is pressed. Sets the angle to position
the moon at the top, and updates the slider */
function theNight() {
  angle = 180;
  slider.value(180);
}
