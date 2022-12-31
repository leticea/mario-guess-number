const gameNumberElement = document.querySelector(".game-number");
const gameFeedbackElement = document.querySelector(".game-feedback");
const gameGuessElement = document.querySelector(".game-guess");
const gameHealthNumberElement = document.querySelector(".game-health-number");
const gameHealthElement = document.querySelector(".game-health-bar");
const gamePlayBtn = document.querySelector(".game-button-play");
const gameResetBtn = document.querySelector(".game-button-reset");

let gameHealth;
let gameOver;
let randomGuessNumber;

const updateData = (element, message) => {
  element.textContent = message;
};

const init = () => {
  gameHealth = 100;
  gameOver = false;
  randomGuessNumber = Math.trunc(Math.random() * 10) + 1;
  updateData(gameHealthNumberElement, "100%");
  updateData(gameFeedbackElement, "What is your guess?");
  updateData(gameNumberElement, "?");
  gameGuessElement.value = "";
  gameHealthElement.style.background = "green";
  gameHealthElement.style.width =


};

