const buttons = document.querySelectorAll("button");
const main = document.querySelector('main');

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;
let computerLetterChoice = ["r", "p", "s"];

const template= `
  <h1>Rock Paper Scissors</h1>
    <h2 id="winTally">Wins: <span class="total">${totalWins}</span></h2>
    <h2 id="tieTally">Ties: <span class="total">${totalTies}</span></h2>
    <h2 id="lossTally">Losses: <span class="total">${totalLosses}</span></h2>
`;

main.innerHTML = template;

for(let i=0; i<buttons.length; i++) {

  buttons[i].addEventListener("click", function(e) {
    let userChoice = e.target.value;
    let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
  
    if ((userChoice === "r" && computerChoice === "r") || (userChoice === "p" && computerChoice === "p") || (userChoice === "s" &&  computerChoice === "s")) {
      totalTies++;
      document.querySelector("#tieTally span").textContent = totalTies;
    } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" &&  computerChoice === "p")) {
      totalWins++;
      document.querySelector("#winTally span").textContent = totalWins;
    } else if ((userChoice === "r" && computerChoice === "p") || (userChoice === "p" && computerChoice === "s") || (userChoice === "s" &&  computerChoice === "r")) {
      totalLosses++;
      document.querySelector("#lossTally span").textContent = totalLosses;
    }
   })
  }