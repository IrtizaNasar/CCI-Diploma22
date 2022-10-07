let x = 1;                                                         // Define a global x variable

function printmsg(){                                               // Define the printmsg() function
    let msg = 'Test '+x;                                            // Define a local msg variable 
    let p = document.createElement("p");                            // Create a p HTML tag
    p.innerHTML = msg;                                              // Set the contents of p to msg 
    document.getElementsByTagName("body")[0].appendChild(p);        // Add p to body
    console.log(msg);                                               // Log msg to the console                
    x = x+1;                                                         // Add 1 to x
}              

printmsg();                                                        // Run the print msg function once
printmsg();                                                        // Run the print msg function twice
printmsg();                                                   // Run the print msg function three times
 