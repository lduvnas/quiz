const playerName = document.getElementById("playerName");
const scoreText = document.getElementById("scoreText");
const currentScore = localStorage.getItem("currentScore");
const endMessage = document.getElementById("endMessage");

const score = document.getElementById("score");
score.value = currentScore;

if (currentScore < 20) {
  endMessage.innerHTML = `You can do better, Try again!`;
} else if (currentScore <= 50) {
  endMessage.innerHTML = `Nice try, can you beat your score?`;
} else if (currentScore <= 100) {
  endMessage.innerHTML = `Amazing your really good at this!`;
} else if (currentScore == 150) {
  endMessage.innerHTML = `Wow, is there anything you don't know?`;
}

scoreText.innerText = currentScore + " points";

playerName.addEventListener("keyup", () => {
  validateForm();
});

function setValue() {
  document.getElementById("score").value = localStorage.getItem("currentScore");
}

function validateForm() {
  const errorMessage = document.getElementById("errorMessage");
  var userInput = document.forms["saveHighscore"]["player"].value;

  if (userInput.length < 2) {
    playerName.classList.add("error");
    errorMessage.innerHTML = "Name can't be less than 2 signs";
    return false;
  } else if (userInput.length >= 25) {
    playerName.classList.add("error");
    errorMessage.innerHTML = "Name can't be more than 25 signs";
    return false;
  } else if (
    userInput.length <= 25 ||
    userInput.length > 2 ||
    userInput == ""
  ) {
    playerName.classList.remove("error");
    errorMessage.innerHTML = "";
    return true;
  }
}
