let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector(".scoreboard__score--user");
const computerScore_span = document.querySelector(".scoreboard__score--pc");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result p");
const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
getComputerChoice();

const win = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}. You win!`;
}

const lose = (userChoice, computerChoice) => {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} loses to ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}. You lost!`;
}

const draw = (userChoice, computerChoice) => {
    result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} equals ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}. It's a draw!`
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();

    switch(userChoice + "-" + computerChoice) {
        // cases in which player wins
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win(userChoice, computerChoice);
            break;

        // loses
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            lose(userChoice, computerChoice);
            break;
            
        // draw
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            draw(userChoice, computerChoice);
            break;   
    }
}

for(const choice of choices){

    choice.addEventListener("click", function(){

        switch(this){
            case choices[0]:
            game("rock");
            break;

            case choices[1]:
            game("paper");
            break;

            case choices[2]:
            game("scissors");
            break;
        }
    });
}