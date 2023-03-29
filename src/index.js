import "normalize.css";
import "./styles/main.scss";

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const colors = [
  "#FFFFFF",
  "#B0C4DE",
  "#AFEEEE",
  "#DDA0DD",
  "#20B2AA",
  "#E6E6FA",
];

const changeColor = () => {
  let hexColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.background = colors[hexColor];
};

let intervalId;
const startChange = () => {
  startBtn.disabled = true;
  intervalId = setInterval(changeColor, 2000);
};

const stopChange = () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", startChange);
stopBtn.addEventListener("click", stopChange);
