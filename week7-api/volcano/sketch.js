let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";

function setup() {
  createCanvas(500, 440);
  rectMode(CENTER);
  noStroke();
  table = loadTable(url, 'csv', 'header');
}

function draw(){
    background(200);

    // Only run the rest of the draw function if the data has loaded
    //if(table==='undefined') return; // Otherwise stop here.

    // SETUP DEFAULT VARIABLES 
    let rows = table.getRowCount();  // Count the rows in the CSV  
    let x = 70;                      // Default x position
    let y = 50;                      // Default y position 

    // LOOP THROUGH CSV & DISPLAY QUAKES 
    for (let row=0; row<rows; row++){

        // Access placename and magnitude variables from the CSV
        let name = table.getString(row, 'place');     // Grab placename 
        let magnitude = table.getString(row, 'mag');  // Grab the magnitute

        // Draw the ellipse and text label
        //ellipse(x, y, magnitude*12, magnitude*12);
        
        drawVolcano(x,y,magnitude);
        fill(255);
        text(name+'\n'+magnitude, x-50, y+65);  // Label

        // Calculate the x,y coordinates of the next ellipse 
        x += width/3; 
        if (x > width-70){
            y += 150;
            x = 70;
        } 
    }

}


/* custom function to draw animation of a volcano erupting
Takes in x and y coordinates of the animation and the size of the eruption */
function drawVolcano(x,y,size) {

  // Draw rectangle for sky
  fill(135, 206, 235); // sky colour
  rect(x + 15, y + 15, width/3, 150);

  // Draw rectangle for foreground
  fill(0,128,0); // grass colour
  rect(x + 15, y + 70, width/3, 35);

  // draw the volcano
  for (let i = 0; i<4; i++) {
    fill(139,69,19);
    ellipse(x + 10, 30 + y + (i*10), 20 + (i*10), 5 + (i*10));
  }

   // A loop to animate smoke bubbles
   for (let i = 0; i<6; i++) {

    // Create a colour for the smoke bubble 
    smokeColour = color(255,255,255);
    // Set the transparency to a semi random shade
    smokeColour.setAlpha(random(100,200) - (i*10));
    fill(smokeColour);
    // Create a variable to hold the x position of the smoke bubble
    xpos = x + (i*10);
    // draw an ellipse
    ellipse(map(noise(xpos), 0, 1, x - 25, x + 25), 30 + y - (i*10), (i*10) * size/2, (i*10) * size/2);
  
  }


}
