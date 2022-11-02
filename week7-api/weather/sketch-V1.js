let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

function preload() {
  earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  let earthquakeMag = earthquakes.features[0].properties.mag;
  let earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
  describe(`50×50 ellipse that changes from black to white
    depending on the current humidity`);
}
