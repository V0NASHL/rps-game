const options = ["Rock", "Paper", "Scissors"];
const scorePlayer_span = document.getElementById("pScore");
const scoreComputer_span = document.getElementById("cScore");
const playerDefault = document.getElementById("pChoice");
const comDefault = document.getElementById("cChoice");

let scorePlayer = 0;
let scoreComputer = 0;

document.getElementById("reset").style.visibility = "hidden";

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
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
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
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function endGame(){
    if (scorePlayer > scoreComputer){
        document.getElementById("finalResult").textContent = "YOU WIN!!!";
        document.getElementById("finalResult").style.color = "blue"
    }
    else if (scoreComputer > scorePlayer){
        document.getElementById("finalResult").textContent = "Computer Wins..."
        document.getElementById("finalResult").style.color = "red"
    }
}

function resetGame(){
    scorePlayer = 0;
    scoreComputer = 0;
    scorePlayer_span.textContent = '0';
    scoreComputer_span.textContent = '0';
    playerDefault.src = "images/p_rock.png";
    comDefault.src = "images/c_rock.png";
    document.getElementById("finalResult").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("displayText").textContent = "Make Your Choice";
    document.getElementById("result").textContent = "";
    document.getElementById("button").style.display = "flex";
}

function game(playerSelection){

    const computerSelection = getComputerChoice();

    if (computerSelection == "Rock"){
        document.querySelector("#cChoice").src = "images/c_rock.png";
    }
    else if (computerSelection == "Paper"){
        document.querySelector("#cChoice").src = "images/c_paper.png";
    }
    else if (computerSelection == "Scissors"){
        document.querySelector("#cChoice").src = "images/c_scissors.png";
    }
    
    document.getElementById("result").textContent = playRound(playerSelection, computerSelection);
        
    if(checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer++;
        document.getElementById("pScore").innerText = scorePlayer;
        document.getElementById("result").style.color = "blue";
    }
    else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        scoreComputer++;
        document.getElementById("cScore").innerText = scoreComputer;
        document.getElementById("result").style.color = "red";
    }
    else{
        document.getElementById("result").style.color = "black";
    }

    if(scorePlayer === 5 || scoreComputer === 5){
        endGame();
        document.getElementById("button").style.display = "none";
        document.getElementById("displayText").textContent = "Game Over";
        document.getElementById("reset").style.visibility = "visible"
        document.getElementById("finalResult").style.visibility = "visible";
    }
}

startGame()