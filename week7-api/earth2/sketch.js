let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv"; 
let table; 

function setup() {
  createCanvas(500, 400);
  table = loadTable(url,'csv', 'header');
}

function draw() {
  background(220);
  if(table.getRowCount()==0) return;

  let rows = table.getRowCount(); 
  let x = 70; 
  let y = 50; 
  
  for (let row=0; row<rows; row++){
    let name = table.getString(row, 'place');
    let magnitude = table.getString(row, 'mag'); 
    ellipse(x, y, magnitude*12, magnitude*12); 
    text(name+'\n'+magnitude, x, y+25);
    //print(name);
    x+= width/3; 
    if(x> width-70){
      y += 80; 
      x = 70; 
    }
  }

}
