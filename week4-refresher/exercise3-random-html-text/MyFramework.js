// This code is in MyFramework.js

// Generate an HTML tag within a tag identified by id
function createTagAtID(id, tag, style, content){                
    const thetag = document.createElement(tag); 
    thetag.setAttribute("style", style);   
    thetag.innerHTML = content;                 
    document.getElementById(id).appendChild(thetag);       
}
  
// Generate a random number between a & b
function random(a, b){
    return Math.floor(Math.random()*b)+a;
}