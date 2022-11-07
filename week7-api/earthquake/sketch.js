let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";

function setup() {
  createCanvas(500, 400);
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
        name = name.split(" of ")[1];   
        let magnitude = table.getString(row, 'mag');  // Grab the magnitute

        // Draw the ellipse and text label
        ellipse(x, y, magnitude*12, magnitude*12);
        text(name+'\n'+magnitude, x, y+25);  // Label

        // Calculate the x,y coordinates of the next ellipse 
        x += width/3; 
        if (x > width-70){
            y += 80;
            x = 70;
        } 
    }

}