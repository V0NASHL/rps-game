const options = ["rock", "paper", "scissors"];

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

function game(playerSelection){
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    const computerSelection = getComputerChoice();
    
    console.log(playRound(playerSelection, computerSelection));
        
    if(checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer++;
    }
    else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        scoreComputer++;
    }

    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player Wins!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer Wins!")
    }
    else{
        console.log("It's a tie!")
    }
}

startGame()