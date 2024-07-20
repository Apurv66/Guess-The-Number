let userInput = document.querySelector("#inputBox");
let button = document.querySelector("button");
let invalidMSG = document.querySelector("#invalidMSG");
let msg = document.querySelector("#msg");
let Previous = document.querySelector("#Previous");
let result = document.querySelector("#score");

let ans = Math.floor(Math.random() * 100 + 1);
console.log(ans);
let prevGuess = [];
let score = 100;
let playGame = true;

if(playGame){
    button.addEventListener("click", (e) => {
        e.preventDefault();
        var guess = userInput.value;
        // console.log(guess);
        validation(guess);
    })
}

let validation = (guess) => {
    if(isNaN(guess)){
        displayCLS();
        invalidMSG.innerHTML = "Please enter valid number.";
    }
    else if(guess < 1){
        displayCLS();
        invalidMSG.innerHTML = "Please enter number between 1 - 100.";
    }
    else if(guess > 100){
        displayCLS();
        invalidMSG.innerHTML = "Please enter number between 1 - 100.";
    }
    else{
        score=score-2.5;
        displayCLS();
        prevGuess.push(guess);
        Previous.innerHTML = prevGuess;
        invalidMSG.innerHTML = "";
        checkGuess(guess);
    }
}

let checkGuess = (guess) => {
    if(guess == ans){
        endGame();
    }
    else if(guess < ans ){
        msg.innerHTML = "Try bigger number.";
    }
    else if(guess > ans ){
        msg.innerHTML = "Try smaller number.";
    }
}

let displayCLS = () => {
    userInput.value = "";
}

let endGame = () => {
    console.log(score);
    let result = document.querySelector("#score");
    result.innerHTML = `Correct!! Your Score is ${score}`;
    playGame = false;
    userInput.disabled = true;
    button.disabled = true;
    newGame();
}

let newGame = () => {
    let newGameBtn = document.createElement("button");
    newGameBtn.innerHTML = "New Game";
    newGameBtn.style.backgroundColor = "seagreen";
    newGameBtn.style.color = "white";
    newGameBtn.style.height = "40px";
    newGameBtn.style.width = "100px";
    newGameBtn.style.cursor = "pointer";
    newGameBtn.style.borderRadius = "15px";
    newGameBtn.style.border = "none";
    let form = document.querySelector("form");
    form.appendChild(newGameBtn);
    newGameBtn.addEventListener("click" , () => {
        playGame = true;
        userInput.disabled = false;
        button.disabled = false;
        prevGuess = [];
        score = 100;
        ans = Math.floor(Math.random() * 100 + 1);
        msg.innerHTML = "";
        result.innerHTML = "";
    })
}