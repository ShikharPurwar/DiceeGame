var p1 = prompt("Name of Player 1 ?")
p1 = p1.toUpperCase();
var p2 = prompt("Name of Player 2 ?")
p2 = p2.toUpperCase();

var Number1 = Math.floor(Math.random() * 6) + 1;
var DiceImg = "images/dice" + Number1 + ".png";
var select = document.querySelectorAll("img")[0];
select.setAttribute("src",DiceImg);


var Number2 = Math.floor(Math.random() * 6) + 1;
var DiceImg2 = "images/dice" + Number2 + ".png";
var select = document.querySelectorAll("img")[1];
select.setAttribute("src",DiceImg2);


if(Number1>Number2){
    document.querySelector("h1").innerHTML ="✌️ " + p1 + " Won! "
}
else if(Number2>Number1){
    document.querySelector("h1").innerHTML = p2 + " Won! ✌️ "
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}