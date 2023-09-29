
const buttons = document.querySelectorAll("button");
const main = document.querySelector('main');

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;
let computerLetterChoice = ["r", "p", "s"];




for(i=0; i<buttons.length; i++) {

  buttons[i].addEventListener("click", function(e) {
    let userChoice = e.target.value;
    let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
  
    if ((userChoice === "r" && computerChoice === "r") || (userChoice === "p" && computerChoice === "p") || (userChoice === "s" &&  computerChoice === "s")) {
      console.log("I tied")
      totalTies++;
    } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" &&  computerChoice === "p")) {
      console.log("I won")
      totalWins++;
    } else if ((userChoice === "r" && computerChoice === "p") || (userChoice === "p" && computerChoice === "s") || (userChoice === "s" &&  computerChoice === "r")) {
      console.log("I lost")
      totalLosses++;
   } 
  })

}



const template= `
  <h1>Rock Paper Scissors</h1>
    <h2>Wins: ${totalWins}</h2>
    <h2>Ties: ${totalTies}</h2>
    <h2>Losses: ${totalLosses}</h2>
`;

main.innerHTML = template;



















//     if(userInput == "rock") {
//       totalWins++;
//     } else if (userInput == "paper") {
//       totalTies++;
//     } else if (userInput == "scissors") {
//       totalLosses++;
//     }
//   })

// }










// let totalWin = 0;
// let totalLoss = 0;
// let totalTie = 0;
// // let computerLetterChoice = ["r", "p", "s"];

// let gameCount = Number(prompt("How many rounds do you want to play?"));

// for (i=0; i < gameCount; i++) {
//   // let userChoice = prompt("Pick rock, paper or scissors (enter r, p or s)");
//   // let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
//   let alertMessageTie = "It's a tie! You picked " + userChoice + " and the computer picked " + computerChoice 
//   let alertMessageWin = "You won! You picked " + userChoice + " and the computer picked " + computerChoice 
//   let alertMessageLose = "Sorry, you lost. You picked " + userChoice + " and the computer picked " + computerChoice 
  
//   if ((userChoice === "r" && computerChoice === "r") || (userChoice === "p" && computerChoice === "p") || (userChoice === "s" &&  computerChoice === "s")) {
//     alert(alertMessageTie);
//     totalTie++;
//   } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" &&  computerChoice === "p")) {
//     alert(alertMessageWin);
//     totalWin++;
//   } else if ((userChoice === "r" && computerChoice === "p") || (userChoice === "p" && computerChoice === "s") || (userChoice === "s" &&  computerChoice === "r")) {
//     alert(alertMessageLose);
//     totalLoss++;
//  } else {
//     alert("Please only enter r, p, or s as your choice");
//     i--;
//   }
// }

// alert("Games you won: " + totalWin + " | Games you lost: " + totalLoss + " | Games you tied: " + totalTie);














// for {

  
//   button.addEventListener('click', function() {
//   return totalWins++;
// })

// paper.addEventListener('click', function() {
//   return totalTies++;
// })

// scissors.addEventListener('click', function() {
//   return totalLosses++;

// })

// }





// const rock = document.getElementById("rock");
// const paper= document.getElementById("paper");
// const scissors = document.getElementById("scissors");