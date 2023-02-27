"use strict";

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.trunc(Math.random() * 3)];
  return choice;
};

const playRound = function (playerSelection, computerSelection) {
  let winning = false;

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection)
    return `${playerSelection.replace(
      playerSelection[0],
      playerSelection[0].toUpperCase()
    )} vs ${computerSelection.replace(
      computerSelection[0],
      computerSelection[0].toUpperCase()
    )}. You Draw!`;
  else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "paper") winning = false;
        else if (computerSelection === "scissors") winning = true;
        break;

      case "paper":
        if (computerSelection === "scissors") winning = false;
        else if (computerSelection === "rock") winning = true;
        break;

      case "scissors":
        if (computerSelection === "rock") winning = false;
        else if (computerSelection === "paper") winning = true;
        break;

      default:
        return 'Please select among "Rock, Paper, Scissors".';
    }
  }
  n;
  return `You ${winning ? "Win" : "Lose"}! ${
    winning
      ? playerSelection.replace(
          playerSelection[0],
          playerSelection[0].toUpperCase()
        )
      : computerSelection.replace(
          computerSelection[0],
          computerSelection[0].toUpperCase()
        )
  } beats ${
    !winning
      ? playerSelection.replace(
          playerSelection[0],
          playerSelection[0].toUpperCase()
        )
      : computerSelection.replace(
          computerSelection[0],
          computerSelection[0].toUpperCase()
        )
  }`;
};

let playerPt = 0;
let computerPt = 0;
let result = ``;
let roundCount = 5;

for (let i = 0; i < roundCount; i++) {
  const playerSelection = prompt('Pick: "Rock, Paper, Scissors"');
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
  let roundResult = playRound(playerSelection, computerSelection);
  if (roundResult.includes("Lose")) computerPt++;
  else if (roundResult.includes("Win")) playerPt++;
  else if (roundResult.includes("Please select among")) roundCount++;
}

const finalScores = `Your score: ${playerPt}\nComputer's score: ${computerPt}`;
if (playerPt === computerPt) result = `You Draw!`;
else result = `You ${playerPt > computerPt ? "Won" : "Lost"}!`;
console.log(finalScores + "\n" + result);
