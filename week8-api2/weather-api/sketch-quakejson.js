let quakejson = false;
let weatherjson = false; 
let counter = 0; 
let quakeurl ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
// Weather URL From: https://open-meteo.com/en/docs#api_form
let weatherurl = "https://archive-api.open-meteo.com/v1/era5?"
weatherurl += "latitude=51.5002&longitude=-0.1262"
weatherurl += "&start_date=2022-01-11&end_date=2022-01-11"
weatherurl += "&daily=temperature_2m_max,rain_sum&timezone=auto"

function setup() {
  createCanvas(400, 400);
  // Call the setcounter function every second
  setInterval(setcounter, 1000);
  loadJSON(weatherurl, loadedweather);
}

function setcounter(){
  counter--; 
}

function draw() {
  background(200);
  
  // Timer to load JSON data every 60 secs
  if(counter<0){
    counter = 60;
    quakejson = false;
    loadJSON(quakeurl, loadedquakes);
  }
  text(counter, width-20, 18);
  

  // If JSON hasn't loaded then stop drawing
  if(quakejson===false){
    return;
  }else{
    // Get the magnitude and place from the loaded JSON
    let mag = quakejson.features[0].properties.mag;
    let place = quakejson.features[0].properties.place;
    let x = 50;
    let y = 50;
    ellipse(x, y, mag*10, mag*10);
    textAlign(CENTER);
    text(place, x+50, y+50);
  }
}

function loadedquakes(json){
  quakejson = json; 
}

function loadedweather(json){
  weatherjson = json; 
}



