const buttons = document.querySelectorAll("button");
const main = document.querySelector('main');

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;
let computerLetterChoice = ["rock", "paper", "scissors"];

const template= `
  <h1>Rock Paper Scissors</h1>
    <h2 id="winTally">Wins: <span>${totalWins}</span></h2>
    <h2 id="tieTally">Ties: <span>${totalTies}</span></h2>
    <h2 id="lossTally">Losses: <span>${totalLosses}</span></h2>
    <h3 id="gameMessage"></h3>
`;

main.innerHTML = template;

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    let userChoice = e.target.value;
    let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
    let alertMessageTie = `It's a tie! You picked ${userChoice} and the computer picked ${computerChoice}.`;
    let alertMessageWin = `You won! You picked ${userChoice} and the computer picked ${computerChoice}.`; 
    let alertMessageLose = `Sorry, you lost. You picked ${userChoice} and the computer picked ${computerChoice}.`;

    if ((userChoice === "rock" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "paper") || (userChoice === "scissors" &&  computerChoice === "scissors")) {

      totalTies++;
      document.querySelector("#tieTally span").textContent = totalTies;
      document.querySelector("h3#gameMessage").innerHTML = alertMessageTie;

    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" &&  computerChoice === "paper")) {

      totalWins++;
      document.querySelector("#winTally span").textContent = totalWins;
      document.querySelector("h3#gameMessage").innerHTML = alertMessageWin;

    } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" &&  computerChoice === "rock")) {

      totalLosses++;
      document.querySelector("#lossTally span").textContent = totalLosses;
      document.querySelector("h3#gameMessage").innerHTML = alertMessageLose;

    }
  })
}