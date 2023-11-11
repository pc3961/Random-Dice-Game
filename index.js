var randomNumber = Math.floor(Math.random()* 6) + 1;

var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if (randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw";
}


