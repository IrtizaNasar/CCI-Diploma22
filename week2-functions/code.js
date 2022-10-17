const name = 'Bob';        
let x = 1;         
function printmsg(){           
   let msg = name;           
   msg = "I've asked you "            
   msg += x+' times ';           
   msg += 'if you are ok!!';           
   let p = document.createElement("p");     
   p.innerHTML = msg;  
   document.getElementsByTagName("body")[0].appendChild(p);   
   x = x+1;     
}        
printmsg();        
printmsg();
printmsg(); 