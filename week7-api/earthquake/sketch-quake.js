let table, x, y;
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv";

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable(url, 'csv', 'header');

}

function setup() {
  let x = 70; 
  let y = 50;
  createCanvas(500, 400);
  background(200);
  noLoop();
  //count the columns
  let rows = table.getRowCount(); 
  print('Rows:'+table.getRowCount());

  // Cycle through the table
  for (let row=0; row<rows; row++){
    let name = table.getString(row, 'place'); 
    let nameArr = name.split(" of ");
    let magnitude = table.getString(row, 'mag'); 
    drawEarthquake(nameArr[1], magnitude, x, y);
    x += width/3; 
    if (x > width-70){
        y += 70;
        x = 70;
        
    } 
  }
    
}

function draw(){
    
}

function drawEarthquake(name, magnitude, x, y) {
    // Set the postion and size of the elipse
    print('mag:'+magnitude+' Name:'+name)
    ellipse(x, y, magnitude*12, magnitude*12);
    textAlign(CENTER);
    text(name, x, y+30);
}