const buttons = document.querySelectorAll("button");
const main = document.querySelector('main');

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;
let computerLetterChoice = ["r", "p", "s"];

const template= `
  <h1>Rock Paper Scissors</h1>
    <h2 id="winTally">Wins: ${totalWins}</h2>
    <h2 id="tieTally">Ties: ${totalTies}</h2>
    <h2 id="lossTally">Losses: ${totalLosses}</h2>
`;

main.innerHTML = template;

for(i=0; i<buttons.length; i++) {

  buttons[i].addEventListener("click", function(e) {
    let userChoice = e.target.value;
    let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
  
    if ((userChoice === "r" && computerChoice === "r") || (userChoice === "p" && computerChoice === "p") || (userChoice === "s" &&  computerChoice === "s")) {
      totalTies++;
      document.querySelector("h2#tieTally").textContent = `Ties: ${totalTies}   ` 
    } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" &&  computerChoice === "p")) {
      totalWins++;
      document.querySelector("h2#winTally").textContent = `Wins: ${totalWins}   ` 
    } else if ((userChoice === "r" && computerChoice === "p") || (userChoice === "p" && computerChoice === "s") || (userChoice === "s" &&  computerChoice === "r")) {
      totalLosses++;
      document.querySelector("h2#lossTally").textContent = `Losses: ${totalLosses}   ` 
    }

   })
  }