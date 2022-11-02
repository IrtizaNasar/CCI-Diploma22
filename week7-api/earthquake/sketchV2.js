let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";


function setup() {
  createCanvas(400, 400);
  noLoop();
  loadJSON(url, drawEarthquake);
}

function draw() {
    background(200);
    describe(`50×50 ellipse that changes from black to white
      depending on the current humidity`);
}

function drawEarthquake(earthquakes) {
    // Get the magnitude and name of the earthquake out of the loaded JSON
    let magnitude = earthquakes.features[0].properties.mag;
    let earthquakeName = earthquakes.features[0].properties.place;
    ellipse(width/2, height/2, magnitude*10, magnitude*10);
    textAlign(CENTER);
    text(earthquakeName, 0, height - 30, width, 30);
}
