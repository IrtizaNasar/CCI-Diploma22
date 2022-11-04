let timer = 0; 
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";

function setup() {
  createCanvas(500, 400);
  //table = loadTable(url, 'csv', 'header');
}

function draw(){
    background(200);

    // CREATE AND DISPLAY TIMER 
    if (frameCount % 60 == 0) timer++; // If frames divisible by 60 1 sec has passed
    textAlign(CENTER, CENTER);
    text('timer: '+timer, width/2, height-50);
    if(typeof table=="undefined" || timer>60) {
        table = loadTable(url, 'csv', 'header');
        timer=0;
    }          

    // LOOP THROUGH CSV & DISPLAY QUAKES 
    let rows = table.getRowCount();      // Count the rows in the CSV  
    let x = 70;                          // Default x position
    let y = 50;                          // Default y position 
    for (let row=0; row<rows; row++){
        // Access placename and magnitude variables from the CSV
        let name = table.getString(row, 'place');     // Grab placename 
        let nameArr = name.split(" of ");             // Split the placename at ' of '
        let magnitude = table.getString(row, 'mag');  // Grab the magnitute
        // Draw the ellipse and text label
        ellipse(x, y, magnitude*12, magnitude*12);
        text(nameArr[1], x, y+25);                    // Placename text
        text(magnitude, x, y+38);                     // Manitude text
        // Calculate the x,y coordinates of the next ellipse 
        x += width/3; 
        if (x > width-70){
            y += 80;
            x = 70;
        } 
    }

}

