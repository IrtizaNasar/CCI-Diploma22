const home = document.getElementById("home"); 
const submit = document.getElementById("tracker"); 
submit.setAttribute("onClick", "createShamConsultation(event)"); 
document.body.setAttribute("onmousemove", "moveMe(event)"); 
const words = [
    "test",
    "another",
    "financial-viability",
    "displacement",
    "killing-community",
    "social-cleansing",
    "governance",
    "demolition",
    "destroyed homes",
    "for-profit",
    "affordability",
    "party-politics"
];
let intensity = 0; 

function createTag(word, x, y, d){
    let tag = document.createElement("div"); 
    tag.innerHTML = word; 
    tag.setAttribute("class", "word"); 
    tag.style.left = x+'px';
    tag.style.top = y+'px';
    tag.style.transform = "rotate("+d+"deg)";
    home.appendChild(tag); 
}

function createShamConsultation(){
    let x, y;
    let body = document.body; 
    for(word=0; word<words.length; word++){
        x = createRandom(-100, 700);
        y = createRandom(-50, 500); 
        d = createRandom(-4, 4);
        createTag(words[word], x, y, d); 
        intensity++;
    }
    body.style.transform = "rotate("+d+"deg)";
    console.log('generated words');

    setTimeout(function(){
        if(intensity>=500){
            home.innerHTML = "";
            intensity=0;
        }else{
            createShamConsultation();
        } 
    }, 300); // Timer
} 

function moveMe(event){
    submit.style.left= (event.pageX-50)+'px';
    submit.style.top=(event.pageY-50)+'px';
}

function createRandom(from, to){ 
    let r1 = [0.0,1.0];
    let r2 = [from,to]; 
    let rand = Math.random(); 
    return Math.floor((rand-r1[0])*(r2[1]-r2[0])/(r1[1]-r1[0])+r2[0]);
}

console.log("all ok"); 