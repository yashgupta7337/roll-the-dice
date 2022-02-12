var randomNumber1;
var randomNumber2;

function generateRandomNumbers() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
}

function buttonClicked() {
    generateRandomNumbers();
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw! 🏳";
    }
    document.getElementById("footer-text").innerHTML = "🎲 click to roll again! 🎲";
    setInterval(() => {
        document.getElementById("footer-text").innerHTML = "🎲 they see me rollin' they hatin' 🎲";
    }, 3000);
}


// console.log(randomNumber1);