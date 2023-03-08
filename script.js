"use strict";

let playerChoice = "";
let computerChoice = "";
let roundResult = "";

let playerScore = 0;
let computerScore = 0;
let result = ``;
let roundCount = 5;

// DOM variables
const choiceBtn = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("choice--player");
const computerChoiceDisplay = document.getElementById("choice--cpu");
const playerScoreDisplay = document.getElementById("score--player");
const computerScoreDisplay = document.getElementById("score--cpu");

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.trunc(Math.random() * 3)];
  return choice;
};

const playRound = function (playerSelection, computerSelection) {
  let winning = false;

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection)
    /* return `${playerSelection.replace(
      playerSelection[0],
      playerSelection[0].toUpperCase()
    )} vs ${computerSelection.replace(
      computerSelection[0],
      computerSelection[0].toUpperCase()
    )}. You Draw!`; */
    return "draw";
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
  /* return `You ${winning ? "Win" : "Lose"}! ${
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
  }`; */
  return winning ? "win" : "lose";
};

for (let i = 0; i < choiceBtn.length; i++) {
  choiceBtn[i].addEventListener("click", function () {
    playerChoice = choiceBtn[i].getAttribute("data-choice");
    playerChoiceDisplay.innerText = playerChoice.replace(
      playerChoice[0],
      playerChoice[0].toUpperCase()
    );

    computerChoice = getComputerChoice();
    computerChoiceDisplay.innerText = computerChoice.replace(
      computerChoice[0],
      computerChoice[0].toUpperCase()
    );

    roundResult = playRound(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice);
    console.log(roundResult);

    // Work on changing color background of something based on result
    for (let i = 0; i < choiceBtn.length; i++) {
      choiceBtn[i].style.color = "black";
    }

    switch (roundResult) {
      case "win":
        choiceBtn[i].style.color = "#60b347";
        ++playerScore;
        break;
      case "lose":
        choiceBtn[i].style.color = "#FA0415";
        ++computerScore;
        break;
    }
    playerScoreDisplay.innerText = String(playerScore);
    computerScoreDisplay.innerText = String(computerScore);

    if (playerScore === 5)
      document.querySelector("body").style.background = "#60b347";
    else if (computerScore === 5)
      document.querySelector("body").style.background = "pink";
  });
}

/* for (let i = 0; i < roundCount; i++) {
  const playerSelection = prompt('Pick: "Rock, Paper, Scissors"');
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
  let roundResult = playRound(playerSelection, computerSelection);
  if (roundResult.includes("Lose")) computerPt++;
  else if (roundResult.includes("Win")) playerPt++;
  else if (roundResult.includes("Please select among")) roundCount++;
} */
