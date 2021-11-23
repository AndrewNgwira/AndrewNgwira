var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceimage = "dice" + randomNumber1 + ".png"; // dice1-dice6

var randomImageSource = "images/"+ randomDiceimage;// images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // gets the first element in an array

image1.setAttribute("src", randomImageSource);

// create a randomNumber2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// change to title to display winner

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " Player1 Wins!!!";
  document.querySelector("h1").innerHTML = "Player1 Wins!!!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins!!!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!!!"
}
