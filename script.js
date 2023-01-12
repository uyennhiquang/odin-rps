const getComputerChoice = function () {
  const choices = ["r", "p", "s"];
  const choice = choices[Math.trunc(Math.random() * 3)];
  return choice;
};
// console.log(getComputerChoice());
