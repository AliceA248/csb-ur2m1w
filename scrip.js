// ask cards

let numberofCards = 0;
while (
  numberofCards % 2 !== 0 ||
  numberofCards < 4 ||
  numberofCards > 14 ||
  typeof numberofCards === String // function = 0 não funcionando
) {
  numberofCards = parseInt(
    prompt(
      "Escolha com quantas cartas deseja jogar, o número tem que ser par e entre 4 e 14"
    )
  );
}
//define image
let image = [
  "unicornparrot.gif",
  "unicornparrot.gif",
  "revertitparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "tripletsparrot.gif",
  "metalparrot.gif",
  "metalparrot.gif",
  "explodyparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "fiestaparrot.gif",
  "bobrossparrot.gif",
  "bobrossparrot.gif"
];

// star sort cards

function sort(array) {
  for (let i = numberofCards - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1)); // function comparador() {return Math.random() - 0.5;}
    [array[i], array[k]] = [array[k], array[i]];
  }
}
// add cards do the game
function placeCard(a) {
  for (let i = 0; i < a; i++) {
    const elemento = document.querySelector("ul");
    elemento.innerHTML =
      elemento.innerHTML +
      `
    <li>
    <img class = "upCard" src="./img/${image[i]}" alt="upCard" />
    <img class="downCard" src="./img/back.png" alt="downCard" />
    </li>`; // <img class = "" src="./img/${[?]}" alt="" />
  }
}
sort(image);
placeCard(numberofCards);

const gameCards = document.querySelectorAll("li");
let firstCard, secondCard;
let pares = numberofCards / 2;
let plays = 0;
let flipcard = false;

function changePosition() {
  if (this.classList.contains("flip")) {
    return;
  }
  this.classList.add("flip");
  plays++;
  if (flipcard === false) {
    flipcard = true;
    firstCard = this;
  } else {
    secondCard = this;
    flipcard = false;
    check();
  }
}
// check cards and finish game
function check() {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    removeClick();
  } else {
    setTimeout(removeFlip, 1000);
  }
}
function removeClick() {
  firstCard.removeEventListener("click", changePosition);
  secondCard.removeEventListener("click", changePosition);
  pares--;
  if (pares === 0) {
    alert("Você terminou o jogo em " + plays + " plays!");
  }
}

function removeFlip() {
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
}
gameCards.forEach((gameCards) =>
  gameCards.addEventListener("click", changePosition)
);

// projetc finish, start bonus

/* "use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}   */
