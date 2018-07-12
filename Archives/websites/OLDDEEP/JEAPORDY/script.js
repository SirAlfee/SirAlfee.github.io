document.getElementById("cat").addEventListener("click", displaycat);

document.getElementById("Python").addEventListener("click", displayPython);
document.getElementById("a1").addEventListener("click", displayPythona1);
document.getElementById("a2").addEventListener("click", displayPythona2);
document.getElementById("a3").addEventListener("click", displayPythona3);
document.getElementById("a4").addEventListener("click", displayPythona4);
document.getElementById("a5").addEventListener("click", displayPythona5);

document.getElementById("HTML").addEventListener("click", displayHTML);
document.getElementById("b5").addEventListener("click", displayHTMLb5);
document.getElementById("b4").addEventListener("click", displayHTMLb4);
document.getElementById("b3").addEventListener("click", displayHTMLb3);
document.getElementById("b2").addEventListener("click", displayHTMLb2);
document.getElementById("b1").addEventListener("click", displayHTMLb1);

document.getElementById("Java").addEventListener("click", displayJava);
document.getElementById("c1").addEventListener("click", displayJavac1);
document.getElementById("c2").addEventListener("click", displayJavac2);
document.getElementById("c3").addEventListener("click", displayJavac3);
document.getElementById("c4").addEventListener("click", displayJavac4);
document.getElementById("c5").addEventListener("click", displayJavac5);

document.getElementById("BASH").addEventListener("click", displayBASH);
document.getElementById("d5").addEventListener("click", displayBASHd5);
document.getElementById("d4").addEventListener("click", displayBASHd4);
document.getElementById("d3").addEventListener("click", displayBASHd3);
document.getElementById("d2").addEventListener("click", displayBASHd2);
document.getElementById("d1").addEventListener("click", displayBASHd1);

document.getElementById("Hardware").addEventListener("click", displayHardware);
document.getElementById("e5").addEventListener("click", displayHardwaree5);
document.getElementById("e4").addEventListener("click", displayHardwaree4);
document.getElementById("e3").addEventListener("click", displayHardwaree3);
document.getElementById("e2").addEventListener("click", displayHardwaree2);
document.getElementById("e1").addEventListener("click", displayHardwaree1);
document.getElementById("Gaming").addEventListener("click", displayGaming);

document.getElementById("f1").addEventListener("click", displayGamingf1);
document.getElementById("f2").addEventListener("click", displayGamingf2);
document.getElementById("f3").addEventListener("click", displayGamingf3);
document.getElementById("f4").addEventListener("click", displayGamingf4);
document.getElementById("f5").addEventListener("click", displayGamingf5);


function displaycat() {
    document.getElementById("Python").innerHTML = "Python";
    document.getElementById("HTML").innerHTML = "HTML";
    document.getElementById("Java").innerHTML = "Java Script";
    document.getElementById("BASH").innerHTML = "BASH";
    document.getElementById("Hardware").innerHTML = "Hardware";
    document.getElementById("Gaming").innerHTML = "Gaming";
    document.getElementById("start").innerHTML = "     Press a category"
}

function displayPython() {
    document.getElementById("a1").innerHTML = "200$";
    document.getElementById("a2").innerHTML = "400$";
    document.getElementById("a3").innerHTML = "600$";
    document.getElementById("a4").innerHTML = "800$";
    document.getElementById("a5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "     Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displayHTML() {
    document.getElementById("b1").innerHTML = "200$";
    document.getElementById("b2").innerHTML = "400$";
    document.getElementById("b3").innerHTML = "600$";
    document.getElementById("b4").innerHTML = "800$";
    document.getElementById("b5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "     Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displayJava() {
    document.getElementById("c1").innerHTML = "200$";
    document.getElementById("c2").innerHTML = "400$";
    document.getElementById("c3").innerHTML = "600$";
    document.getElementById("c4").innerHTML = "800$";
    document.getElementById("c5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "     Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displayBASH() {
    document.getElementById("d1").innerHTML = "200$";
    document.getElementById("d2").innerHTML = "400$";
    document.getElementById("d3").innerHTML = "600$";
    document.getElementById("d4").innerHTML = "800$";
    document.getElementById("d5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "    Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displayHardware() {
    document.getElementById("e1").innerHTML = "200$";
    document.getElementById("e2").innerHTML = "400$";
    document.getElementById("e3").innerHTML = "600$";
    document.getElementById("e4").innerHTML = "800$";
    document.getElementById("e5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "     Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displayGaming() {
    document.getElementById("f1").innerHTML = "200$";
    document.getElementById("f2").innerHTML = "400$";
    document.getElementById("f3").innerHTML = "600$";
    document.getElementById("f4").innerHTML = "800$";
    document.getElementById("f5").innerHTML = "1000$";
    document.getElementById("start").innerHTML = "     Press a amount. Remember Higher the Price = Harder the question is, Lower the Price = Easier it is"
}

function displaydone() {
    
    document.getElementsByClassName("a1").setAttribute("src", "check.png"); 
}



function displayElavatorMusic() {
     document.getElementById("music").innerHTML = '<audio autoplay controls> <source src="Elevator%20Music%201%20hour.mp3" type="audio/mp3"> Your browser does not support the audio element. </audio>';
}
function displayHouse() {
    document.getElementById("music").innerHTML = '<audio autoplay controls> <source src="Best%20of%20No%20Copyright%20Sounds%20%20February%202015%20-%20Gaming%20Mix%20%20NCS%20PixelMusic.mp3" type="audio/mp3"> Your browser does not support the audio element. </audio>';
}
function displayHardcoreEDM() {
document.getElementById("music").innerHTML = '<audio autoplay controls> <source src="Top%2030%20NoCopyRightSounds%20%20Best%20of%20NCS%20%202H%20NoCopyRightSounds%20%20NCS%20%20The%20Best%20of%20all%20time.mp3" type="audio/mp3"> Your browser does not support the audio element. </audio>';
}
function displayHardwaree5() {
var txt;
    var aone;
    var answer = prompt("Jerry Sanders, Jack Gifford, Edwin Turney, Larry Stenger, John Carey, Frank Botte, Sven Simonsen, and Jim Giles are founders of what company?");
    if (answer.toUpperCase() ===  'AMD' ) {
        document.getElementById("e5").innerHTML = "Correct";
         document.getElementById("e5").removeEventListener("click", displayHardwaree5);

	} else {
   		document.getElementById("e5").innerHTML = "wrong.";
        document.getElementById("e5").removeEventListener("click", displayHardwaree5);
       }
}

function displayHardwaree4() {
var txt;
    var aone;
    var answer = prompt("Gordon Moore and Robert Noyce are founders of what company?");
    if (answer.toUpperCase() ===  'INTEL' ) {
        document.getElementById("e4").innerHTML = "Correct";
         document.getElementById("e4").removeEventListener("click", displayHardwaree4);

	} else {
   		document.getElementById("e4").innerHTML = "wrong.";
        document.getElementById("e4").removeEventListener("click", displayHardwaree4);
       }
}

function displayHardwaree3() {
var txt;
    var aone;
    var answer = prompt("What company owns the gtx NVDIA 1080TI Founders Edition Graphics Card?");
    if (answer.toUpperCase() ===  'GEFORCE' ) {
        document.getElementById("e3").innerHTML = "Correct";
         document.getElementById("e3").removeEventListener("click", displayHardwaree3);

	} else {
   		document.getElementById("e3").innerHTML = "wrong.";
        document.getElementById("e3").removeEventListener("click", displayHardwaree3);
       }
}

function displayHardwaree2() {
var txt;
    var aone;
    var answer = prompt("The cooling fan on the proccesor is also known as a...?");
    if (answer.toUpperCase() ===  'HEAT SINK' ) {
        document.getElementById("e2").innerHTML = "Correct";
         document.getElementById("e2").removeEventListener("click", displayHardwaree2);

	} else {
   		document.getElementById("e2").innerHTML = "wrong.";
        document.getElementById("e2").removeEventListener("click", displayHardwaree2);
       }
}

function displayHardwaree1() {
var txt;
    var aone;
    var answer = prompt("What does cpu stand for?");
    if (answer.toUpperCase() ===  'CENTRAL PROSSING UNIT' ) {
        document.getElementById("e1").innerHTML = "Correct";
         document.getElementById("e1").removeEventListener("click", displayHardwaree1);

	} else {
   		document.getElementById("e1").innerHTML = "wrong.";
        document.getElementById("e1").removeEventListener("click", displayHardwaree1);
       }
}

function displayGamingf1() {
var txt;
    var aone;
    var answer = prompt("‘Black Ops’ is the subtitle of which game?");
    if (answer.toUpperCase() ===  'CALL OF DUTY' ) {
        document.getElementById("f1").innerHTML = "Correct";
         document.getElementById("f1").removeEventListener("click", displayGamingf1);

	} else {
   		document.getElementById("f1").innerHTML = "wrong.";
        document.getElementById("f1").removeEventListener("click", displayGamingf1);
       }
}

function displayGamingf2() {
var txt;
    var aone;
    var answer = prompt("In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?");
    if (answer.toUpperCase() ===  'PRINECSS PEACH' ) {
        document.getElementById("f2").innerHTML = "Correct";
         document.getElementById("f2").removeEventListener("click", displayGamingf2);

	} else {
   		document.getElementById("f2").innerHTML = "wrong.";
        document.getElementById("f2").removeEventListener("click", displayGamingf2);
       }
}

function displayGamingf3() {
var txt;
    var aone;
    var answer = prompt("Who did Ash Ketchum choose as a first Pokemon?");
    if (answer.toUpperCase() ===  'PIKACHU' ) {
        document.getElementById("f3").innerHTML = "Correct";
         document.getElementById("f3").removeEventListener("click", displayGamingf3);

	} else {
   		document.getElementById("f3").innerHTML = "wrong.";
        document.getElementById("f3").removeEventListener("click", displayGamingf3);
       }
}

function displayGamingf4() {
var txt;
    var aone;
    var answer = prompt("What is the name of the fictional English archaeologist in the game ‘Tomb Raider’??");
    if (answer.toUpperCase() ===  'LARA CROFT' ) {
        document.getElementById("f4").innerHTML = "Correct";
         document.getElementById("f4").removeEventListener("click", displayGamingf4);

	} else {
   		document.getElementById("f4").innerHTML = "wrong.";
        document.getElementById("f4").removeEventListener("click", displayGamingf4);
       }
}

function displayGamingf5() {
var txt;
    var aone;
    var answer = prompt("What famous Baseball player ran his own video game company?");
    if (answer.toUpperCase() ===  'CURT SCHILLING' ) {
        document.getElementById("f5").innerHTML = "Correct";
         document.getElementById("f5").removeEventListener("click", displayGamingf5);

	} else {
   		document.getElementById("f5").innerHTML = "wrong.";
        document.getElementById("f5").removeEventListener("click", displayGamingf5);
       }
}

function displayBASHd1() {
var txt;
    var aone;
    var answer = prompt("What dose comand ls do?");
    if (answer.toUpperCase() ===  'LIST DIRECTORY CONTENTS' ) {
        document.getElementById("d1").innerHTML = "Correct";
         document.getElementById("d1").removeEventListener("click", displayBASHd1);

	} else {
   		document.getElementById("d1").innerHTML = "wrong";
        document.getElementById("d1").removeEventListener("click", displayBASHd1);
       }
}

function displayBASHd2() {
var txt;
    var aone;
    var answer = prompt("what does the comand cd do?");
    if (answer.toUpperCase() ===  'CHANGE DIRECTORY' ) {
        document.getElementById("d2").innerHTML = "Correct";
         document.getElementById("d2").removeEventListener("click", displayBASHd2);

	} else {
   		document.getElementById("d2").innerHTML = "wrong";
        document.getElementById("d2").removeEventListener("click", displayBASHd2);
       }
}

function displayBASHd3() {
var txt;
    var aone;
    var answer = prompt("What dose the command echo do?");
    if (answer.toUpperCase() ===  'GEFORCE' ) {
        document.getElementById("d3").innerHTML = "Correct";
         document.getElementById("d3").removeEventListener("click", displayBASHd3);

	} else {
   		document.getElementById("d3").innerHTML = "wrong";
        document.getElementById("d3").removeEventListener("click", displayBASHd3);
       }
}

function displayBASHd4() {
var txt;
    var aone;
    var answer = prompt("What dose touch do? CHANGE FILE TIMESTAMPS");
    if (answer.toUpperCase() ===  'HEAT SINK' ) {
        document.getElementById("d4").innerHTML = "Correct";
         document.getElementById("d4").removeEventListener("click", displayBASHd4);

	} else {
   		document.getElementById("d4").innerHTML = "wrong";
        document.getElementById("d4").removeEventListener("click", displayBASHd4);
       }
}

function displayBASHd5() {
var txt;
    var aone;
    var answer = prompt("what dose the comad date do?");
    if (answer.toUpperCase() ===  'PRINT/SET THE SYSTEM DATE AND TIME' ) {
        document.getElementById("d5").innerHTML = "Correct";
         document.getElementById("d5").removeEventListener("click", displayBASHd5);

	} else {
   		document.getElementById("d5").innerHTML = "wrong";
        document.getElementById("d5").removeEventListener("click", displayBASHd5);
       }
}

function displayHTMLb1() {
var txt;
    var aone;
    var answer = prompt("How do you open a webpage?");
    if (answer.toUpperCase() ===  '<!DOCTYPE html>' ) {
        document.getElementById("b1").innerHTML = "Correct";
         document.getElementById("b1").removeEventListener("click", displayHTMLb1);

	} else {
   		document.getElementById("b1").innerHTML = "wrong";
        document.getElementById("b1").removeEventListener("click", displayHTMLb1);
       }
}

function displayHTMLb2() {
var txt;
    var aone;
    var answer = prompt("What is the paragraph tag?");
    if (answer.toUpperCase() ===  '<p>' ) {
        document.getElementById("b2").innerHTML = "Correct";
         document.getElementById("b2").removeEventListener("click", displayHTMLb2);

	} else {
   		document.getElementById("b2").innerHTML = "wrong";
        document.getElementById("b2").removeEventListener("click", displayHTMLb2);
       }
}

function displayHTMLb3() {
var txt;
    var aone;
    var answer = prompt("How to link a MYSTYLE.css to a html file?");
    if (answer.toUpperCase() ===  '<link rel="stylesheet" type="text/css" href="MYSTYLE.css">' ) {
        document.getElementById("b3").innerHTML = "Correct";
         document.getElementById("b3").removeEventListener("click", displayHTMLb3);

	} else {
   		document.getElementById("b3").innerHTML = "wrong";
        document.getElementById("b3").removeEventListener("click", displayHTMLb3);
       }
}

function displayHTMLb4() {
var txt;
    var aone;
    var answer = prompt("How to link JAVA.js to an html file?");
    if (answer.toUpperCase() ===  '<script src="JAVA.js"></script>' ) {
        document.getElementById("b4").innerHTML = "Correct";
         document.getElementById("b4").removeEventListener("click", displayHTMLb4);

	} else {
   		document.getElementById("b4").innerHTML = "wrong";
        document.getElementById("b4").removeEventListener("click", displayHTMLb4);
       }
}

function displayHTMLb5() {
var txt;
    var aone;
    var answer = prompt("What Does HTML stand for?");
    if (answer.toUpperCase() ===  'HYPER TEXT MARKUP LANGUAGE' ) {
        document.getElementById("b5").innerHTML = "Correct";
         document.getElementById("b5").removeEventListener("click", displayHTMLb5);

	} else {
   		document.getElementById("b5").innerHTML = "wrong";
        document.getElementById("b5").removeEventListener("click", displayHTMLb5);
       }
}



function displayPythona1() {
var txt;
    var aone;
    var answer = prompt("How do you open a webpage?");
    if (answer.toUpperCase() ===  '<!DOCTYPE html>' ) {
        document.getElementById("a1").innerHTML = "Correct";
         document.getElementById("a1").removeEventListener("click", displayPythona1);

	} else {
   		document.getElementById("a1").innerHTML = "wrong";
        document.getElementById("a1").removeEventListener("click", displayPythona1);
       }
}

function displayPythona2() {
var txt;
    var aone;
    var answer = prompt("What is the paragraph tag?");
    if (answer.toUpperCase() ===  '<p>' ) {
        document.getElementById("a2").innerHTML = "Correct";
         document.getElementById("a2").removeEventListener("click", displayPythona2);

	} else {
   		document.getElementById("a2").innerHTML = "wrong";
        document.getElementById("a2").removeEventListener("click", displayPythona2);
       }
}

function displayPythona3() {
var txt;
    var aone;
    var answer = prompt("How to link a MYSTYLE.css to a html file?");
    if (answer.toUpperCase() ===  '<link rel="stylesheet" type="text/css" href="MYSTYLE.css">' ) {
        document.getElementById("a3").innerHTML = "Correct";
         document.getElementById("a3").removeEventListener("click", displayPythona3);

	} else {
   		document.getElementById("a3").innerHTML = "wrong";
        document.getElementById("a3").removeEventListener("click", displayPythona3);
       }
}

function displayPythona4() {
var txt;
    var aone;
    var answer = prompt("How to link JAVA.js to an html file?");
    if (answer.toUpperCase() ===  '<script src="JAVA.js"></script>' ) {
        document.getElementById("a4").innerHTML = "Correct";
         document.getElementById("a4").removeEventListener("click", displayPythona4);

	} else {
   		document.getElementById("a4").innerHTML = "wrong";
        document.getElementById("a4").removeEventListener("click", displayPythona4);
       }
}

function displayPythona5() {
var txt;
    var aone;
    var answer = prompt("What Does HTML stand for?");
    if (answer.toUpperCase() ===  'HYPER TEXT MARKUP LANGUAGE' ) {
        document.getElementById("a5").innerHTML = "Correct";
         document.getElementById("a5").removeEventListener("click", displayPythona5);

	} else {
   		document.getElementById("a5").innerHTML = "wrong";
        document.getElementById("a5").removeEventListener("click", displayPythona5);
       }
}


function displayJavac1() {
var txt;
    var aone;
    var answer = prompt("Inside which HTML element do we put the JavaScript?");
    if (answer.toUpperCase() ===  '<script>' ) {
        document.getElementById("c1").innerHTML = "Correct";
         document.getElementById("c1").removeEventListener("click", displayJavac1);

	} else {
   		document.getElementById("c1").innerHTML = "wrong";
        document.getElementById("c1").removeEventListener("click", displayJavac1);
       }
}

function displayJavac2() {
var txt;
    var aone;
    var answer = prompt("How to state a on click comand?");
    if (answer.toUpperCase() ===  'onclick=""' ) {
        document.getElementById("c2").innerHTML = "Correct";
         document.getElementById("c2").removeEventListener("click", displayJavac2);

	} else {
   		document.getElementById("c2").innerHTML = "wrong";
        document.getElementById("c2").removeEventListener("click", displayJavac2);
       }
}

function displayJavac3() {
var txt;
    var aone;
    var answer = prompt("Is Java the same as Java Script?");
    if (answer.toUpperCase() ===  'NO' ) {
        document.getElementById("c3").innerHTML = "Correct";
         document.getElementById("c3").removeEventListener("click", displayJavac3);

	} else {
   		document.getElementById("c3").innerHTML = "wrong";
        document.getElementById("c3").removeEventListener("click", displayJavac3);
       }
}

function displayJavac4() {
var txt;
    var aone;
    var answer = prompt("What does innerHTML mean?");
    if (answer.toUpperCase() ===  'SETS OR RETURNS THE HTML CONTENT (INNER HTML) OF AN ELEMENT' ) {
        document.getElementById("c4").innerHTML = "Correct";
         document.getElementById("c4").removeEventListener("click", displayJavac4);

	} else {
   		document.getElementById("c4").innerHTML = "wrong";
        document.getElementById("c4").removeEventListener("click", displayJavac4);
       }
}

function displayJavac5() {
var txt;
    var aone;
    var answer = prompt("What is Java Script called Java Scripts?");
    if (answer.toUpperCase() ===  'BECAME JAVASCRIPT WHEN NETSCAPE AND SUN GOT TOGETHER' ) {
        document.getElementById("c5").innerHTML = "Correct";
         document.getElementById("c5").removeEventListener("click", displayJavac5);

	} else {
   		document.getElementById("c5").innerHTML = "wrong";
        document.getElementById("c5").removeEventListener("click", displayJavac5);
       }
}
