// See https://open-meteo.com/en/docs#api_form 
let weatherjson = false; 
let weatherloaded = 0; 
let counter = 0; 
let yr, ukdate; 
let theta = 0.0; // Calculating speed of waves
let img;

function setup() {
  createCanvas(400, 300);
  setInterval(countdown, 1000); // Call 'setcounter' every second
  img = loadImage('temp.png'); 
}

function countdown(){
  // Variables to work with in the rest of the script
  let m = month();
  let d = day();
  counter--; 

  // Timer to load JSON data every 30 seconds
  if(counter<0){
    // Reset countdown to 30 secs
    counter = 30;        
    yr = int(random(1963, 2022));
    // Build date strings for the API URL and to draw
    let apidate = `${yr}-${m}-${d}`;
    ukdate = `${d}-${m}-${yr}`;
    // Build the weather URL (see https://open-meteo.com/en/docs#api_form) 
    let weatherurl = "https://archive-api.open-meteo.com/v1/era5?";
    weatherurl += `latitude=51.5002&longitude=-0.1262`;
    weatherurl += `&start_date=${apidate}&end_date=${apidate}`;
    weatherurl += "&daily=temperature_2m_max,rain_sum&timezone=auto";
    // Load the JSON
    loadJSON(weatherurl, loadedweather); 
  }
}

// Called once the JSON is loaded 
function loadedweather(json){
  weatherjson = json; 
  weatherloaded++; 
}


function draw() {
  // Draw a grey background and the timer 
  background(230);

  // If the JSON hasn't loaded then don't go any further
  if(weatherjson===false) return;

  // Otherwise get the date, temp, and rain
  let temp = weatherjson.daily.temperature_2m_max;
  let rain = weatherjson.daily.rain_sum;

  // Add gradiated image to the background
  let pos = map(temp, -20, 40, -1000, 0);
  image(img, 0, pos); // Position is linked to the temp

  // Draw text
  fill(255);
  textSize(16);
  text(frameCount, width-150, 18);
  text(counter, width-90, 18);
  text(weatherloaded, width-25, 18);

  // Draw the date, temp, and rainfall text
  let x = 10;
  let y = 30;
  textAlign(LEFT);
  text(`  Date: ${ukdate}`, x, y);
  text(`Temp:  ${temp}°C`, x, y+15);
  text(`  Rain:  ${rain}mm`, x, y+30);

  // Draw some waves
  noStroke();
  fill(43, 142, 240);
  y = height-100;   
  speed = map(rain, 0, 15, 0.01, 0.09); // Map rain to wave speed
  newwave(y, 9,  30.0, speed);      // Ypos, spacing, freq
  newwave(y+40, 11,  60.0, speed);  // Ypos, spacing, freq
  newwave(y+70, 13,  150.0, speed); // Ypos, spacing, freq

}

// Derived from:  https://p5js.org/examples/math-sine-wave.html
function newwave(ypos, xspace, freq, speed){
  let dx = (TWO_PI/freq)*xspace;        // Calc wave frequency 
  let w = floor((width+xspace)/xspace); // Calc spacing
  let yvals = new Array(w);             // Store height values
  theta += speed;                       // Calc speed of all waves

  // For every x value calculate a y value with sine function
  let x = theta;
  for (let i=0; i < yvals.length; i++) {
    yvals[i] = sin(x)*10.0; // Height of wave
    x += dx;
  }

  // Draw the wave with an ellipse at each location
  for (let x = 0; x<yvals.length; x++) {
    ellipse(x*xspace, ypos+yvals[x], 8, 8);
  }
}
