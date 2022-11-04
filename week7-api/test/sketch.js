function setup() {
  createCanvas(400, 400);
  table = loadTable('data.csv', 'csv', 'header');
}

function draw() {
  background(220);
  if(table.getRowCount()==0) return; 
  let row = 1; 
  let col = 'name'; 
  let str = table.getString(row, col);  
  text(str, 50, 50);  
}
