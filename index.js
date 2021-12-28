var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates random number from 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImage1 = "images/dice" + randomNumber1 + ".png"; // Generates the Random Dice image with the value of random number
var randomSourceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage1); //Sets the random image dice into src attribute
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

// Title Change Logic

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
