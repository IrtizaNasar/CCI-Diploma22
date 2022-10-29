let r, g, b, x, y;

function setup() {
  createCanvas(400, 300);
  r = 200;
  g = 200; 
  b = 200; 
  myButton = createButton('Hello');     // Create a button
	myButton.position(250, 25);           // set its position
	myButton.mousePressed(myButtonClick); // On a MouseClick call myButtonClick();
  myButton.style('background', 'rgb(100,200,50)'); 
}

function draw() {
  background(r, g, b);

  // Mouse clicks 
  push();
  fill(255);
  if (mouseIsPressed === true) {
	  ellipse(50, 50, 50, 50); 
  } else {
    rect(25, 25, 50, 50);    
  }
  pop();

  // Key pressed event. 
  push();
  if (keyIsPressed === true && keyCode===82) { // if key is "r"
    fill(200,0,0);
  } else {
    fill(255);
  }
  textSize(18);
  text("key: "+keyCode, 100, 100);
  rect(100, 25, 50, 50); 
  pop();

  // Event on a circle 
  push();
  x = 200;
  y = 50;
  let radius = 50; 
  let distance = dist(mouseX, mouseY, x, y); //distance between mouse and circle
  if(distance < radius/2){ // If the mouse is in the radius 
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  ellipse(x, y, radius, radius);
  pop();

  // Event on a rectangle 
  push();
  x = 300; 
  y = 25; 
  w = 50;
  h = 100;
  fill(255);
  // Works out the coordiantes on the screen 
  if ((mouseX>x) && (mouseX<x+w) && (mouseY>y) && (mouseY<y+h)){
    fill(0);
  }
  rect(x, y, 50, 50);
  pop();

}


function myButtonClick() {
	r = random(50, 255);
  g = random(50, 255);
  b = random(50, 255);
}

function windowResized() {
	r = 255;
  g = 0;
  b = 0;
  resizeCanvas(windowWidth, windowHeight);
}