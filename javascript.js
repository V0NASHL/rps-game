const options = ["rock", "paper", "scissors"];

let scorePlayer = 0;
let scoreComputer = 0;

function startGame(){
    let choice = document.querySelectorAll("img");
    choice.forEach((img) => {
        img.addEventListener("click", () => {
            if (img.id) {
                game(img.id)
            }
        })
    });
}

function changeImage(fileName){
    let img = document.querySelector("#pChoice");
    img.setAttribute("src", fileName)
}

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function endGame(){
    if (scorePlayer > scoreComputer){
        console.log("You Win!");
    }
    else if (scoreComputer > scorePlayer){
        console.log("Computer Wins...")
    }
}

function game(playerSelection){

    const computerSelection = getComputerChoice();

    if (computerSelection == "rock"){
        document.querySelector("#cChoice").src = "images/c_rock.png";
    }
    else if (computerSelection == "paper"){
        document.querySelector("#cChoice").src = "images/c_paper.png";
    }
    else if (computerSelection == "scissors"){
        document.querySelector("#cChoice").src = "images/c_scissors.png";
    }
    
    console.log(playRound(playerSelection, computerSelection));
        
    if(checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer++;
        document.getElementById("pScore").innerText = scorePlayer;
    }
    else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        scoreComputer++;
        document.getElementById("cScore").innerText = scoreComputer;
    }

    if(scorePlayer === 5 || scoreComputer === 5){
        endGame();
    }
}

startGame()