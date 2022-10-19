const words = [
    "consultation",
    "financial viability",
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

function createTag(thisTag){
    tag = document.createElement("div");
    tag.innerHTML = thisTag;
    document.getElementById("home").appendChild(tag);
}

function createConsultation(){
    let content;
    let x;
    let y;
    for(word=0; word<words.length; word++){
        x = Math.floor(Math.random()*650);
        y = Math.floor(Math.random()*450);
        content = words[word]; 
        pos = `left:${x};top:${y};`;
        createTag(`<div class="word" style="${pos}">${content}</div>`);
    }
    console.log('generated words');

    setTimeout(function(){
        createConsultation(); 
    }, 100);
}

createConsultation(); 
console.log('all OK');