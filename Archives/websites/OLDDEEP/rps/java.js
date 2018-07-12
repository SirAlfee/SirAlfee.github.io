var win = 0;
var tie = 0;
var loss = 0;
var total = 0;
document.getElementById( "Papper" ).onclick = function() {
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==3){ 
       var c = document.getElementById("Papper").setAttribute("src", "Lost.jpg"); 
        loss += 1;
    }
    if (x==2){
       var y = document.getElementById("Papper").setAttribute("src", "tie.jpg"); 
        tie += 1;
    }
    if (x==1){
       var z = document.getElementById("Papper").setAttribute("src", "win.jpg"); 
       win += 1;
     

    }
    console.log(x); 
    document.getElementById("win").innerHTML = win;
    document.getElementById("tie").innerHTML = tie;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("total").innerHTML = win-loss;
    var myVar = setInterval(Papper, 2500);


};

document.getElementById( "Rock" ).onclick = function() {
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==3){ 
       var c = document.getElementById("Rock").setAttribute("src", "Lost.jpg"); 
        loss += 1;
    }
    if (x==2){
       var y = document.getElementById("Rock").setAttribute("src", "tie.jpg"); 
        tie += 1;

    }
    if (x==1){
       var z = document.getElementById("Rock").setAttribute("src", "win.jpg"); 
        win += 1;
    }
    
    
    console.log(x);
    document.getElementById("win").innerHTML = win;
    document.getElementById("tie").innerHTML = tie;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("total").innerHTML = win-loss;
    var myVar = setInterval(Rock, 2500);


};

document.getElementById( "Scissors" ).onclick = function() {
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==3){ 
       var c = document.getElementById("Scissors").setAttribute("src", "Lost.jpg"); 
        loss += 1;
    }
    if (x==2){
       var y = document.getElementById("Scissors").setAttribute("src", "tie.jpg");         
        tie += 1;
    }
    if (x==1){
       var z = document.getElementById("Scissors").setAttribute("src", "win.jpg"); 
        win += 1;
    }
    console.log(x);
    document.getElementById("win").innerHTML = win;
    document.getElementById("tie").innerHTML = tie;
    document.getElementById("loss").innerHTML = loss;    
    document.getElementById("total").innerHTML = win-loss;
    var myVar = setInterval(Scissors, 2500);


};




function Papper() {
   var z = document.getElementById("Papper").setAttribute("src", "paper.png"); 
}


function Scissors() {
    var z = document.getElementById("Scissors").setAttribute("src", "scissors.png"); 
}


function Rock() {
    var z = document.getElementById("Rock").setAttribute("src", "rock.png"); 
}

function Fix() {
   
   var z = document.getElementById("Papper").setAttribute("src", "paper.png"); 
   var z = document.getElementById("Rock").setAttribute("src", "rock.png"); 
   var z = document.getElementById("Scissors").setAttribute("src", "scissors.png"); 
   window.location.reload();
}