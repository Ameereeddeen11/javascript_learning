const numberToGuess = Math.floor(Math.random()* 10);
let attempts = 0;

function thinkOfANumber() {
    document.getElementById("thinking").style.display = 'block';
    setTimeout(function(){
        document.getElementById("thinking").style.display = 'none';
        document.getElementById("got-it").style.display = 'block'
        document.getElementById("user-input").style.display = 'block'
    }, 2000)
}

function checkNumber() {
    const userInput = Number(document.getElementById("user-guess").value);
    if (userInput === numberToGuess) {
        document.getElementById("correct").style.display = 'block';
    }
    else if(userInput > numberToGuess) {
        document.getElementById("greater").style.display = 'block';
    }
    else {
        document.getElementById("lesser").style.display = 'block';
    }
    document.getElementById("attempts").textContent = "Attempts: " + ++attempts;
}