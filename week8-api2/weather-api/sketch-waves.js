let weatherjson = false; 
let counter = 0; 
let yr = 2022; 
let speed = 0.0; // Calculating speed of waves

function setup() {
  createCanvas(400, 400);
  // Call a setcounter function every second
  setInterval(setcounter, 1000);
}

function setcounter(){
  counter--; 
}

function draw() {
  background(230);
  let m = month();
  let d = day();
  
  // Timer to load JSON data every 30 seconds
  if(counter<0){
    // Reset some variables 
    counter = 30;
    weatherjson = false;
    yr = int(random(1963, 2022));
    let date = `${yr}-${m}-${d}`;
    // Construct a weather URL (see https://open-meteo.com/en/docs#api_form) 
    let weatherurl = "https://archive-api.open-meteo.com/v1/era5?";
    weatherurl += `latitude=51.5002&longitude=-0.1262`;
    weatherurl += `&start_date=${date}&end_date=${date}`;
    weatherurl += "&daily=temperature_2m_max,rain_sum&timezone=auto";
    // Call the loadedweather function once JSON is loaded
    loadJSON(weatherurl, loadedweather); 
  }
  text(counter, width-20, 18);

  // If JSON hasn't loaded then stop drawing
  if(weatherjson===false) return;

  // Otherwise get the date, temp, and rain
  let temp = weatherjson.daily.temperature_2m_max;
  let rain = weatherjson.daily.rain_sum;
  
  // Draw the date, temp, and rainfall text
  let x = 10;
  let y = 30;
  textAlign(LEFT);
  text(`  Date: ${d}-${m}-${yr}`, x, y);
  text('Temp: '+temp+"°C", x, y+15);
  text('  Rain: '+rain+"mm", x, y+30);

  // Draw some waves
  noStroke();
  fill(43, 142, 240);
  //rain = 15.0;
  y = map(rain, 0, 15, height+10, height-110);
  wave(y, 9,  130.0);    // Ypos, spacing, freq, speed
  wave(y+40, 11,  140.0); // Ypos, spacing, freq, speed
  wave(y+70, 13,  150.0); // Ypos, spacing, freq, speed

}

function loadedweather(json){
  weatherjson = json; 
}




// Derived from:  https://p5js.org/examples/math-sine-wave.html
function wave(ypos, xspace, freq){
  let dx = (TWO_PI/freq)*xspace; 
  let w = floor((width+xspace)/xspace)
  let yvals = new Array(w); // Array to store height values
  speed += 0.02;

  // For every x value calculate a y value with sine function
  let x = speed;
  for (let i=0; i < yvals.length; i++) {
    yvals[i] = sin(x)*10.0; // Height of wave
    x += dx;
  }

  // Draw the wave with an ellipse at each location
  for (let x = 0; x<yvals.length; x++) {
    ellipse(x*xspace, ypos+yvals[x], 8, 8);
  }
}
