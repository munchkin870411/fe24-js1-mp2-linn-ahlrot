let numberOfRounds = 0;
let roundPoints = 0;
let totalPoints = 0;

// Form
const nameForm = document.querySelector("form");
const nameBtn = document.querySelector("#nameBtn");
nameForm.addEventListener("submit", handleSubmit);

// Game buttons
const diceBtn = document.querySelector("#kastaBtn");
diceBtn.addEventListener("click", handleDiceClick);
const freezeBtn = document.querySelector("#frysBtn");
freezeBtn.addEventListener("click", handleFreezeClick);
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGame);

// Text elements
const diceElement = document.querySelector("#dice");
const pointsElement = document.querySelector("#roundPoints");
const roundsElement = document.querySelector("#nmbrOfRounds");
const totalPointsElement = document.querySelector("#totalPoints");
const h3 = document.querySelector("h3");
const textInput = document.querySelector("input");

// Function that handles submit name
function handleSubmit(event) {
  event.preventDefault();

  setInnerText(h3, textInput.value);
}

// Function that handles dice rolls
function handleDiceClick(event) {
  event.preventDefault();

  const roll = rollDice();

  if (roll === 1) {
    setInnerText(diceElement, "1! FAKKED!");
    endRound();
  } else {
    setInnerText(diceElement, roll);
    roundPoints += roll;
    setInnerText(pointsElement, roundPoints);
  }
}
// Function that handles freezing points
function handleFreezeClick(event) {
  event.preventDefault();

  totalPoints += roundPoints;
  setInnerText(totalPointsElement, totalPoints);
  setInnerText(diceElement, "FRYS");

  endRound();
}

// Function that handles text
const setInnerText = (element, text) => {
  element.innerText = text || 0;
};

// Function that rolls dice
const rollDice = () => {
  return 1 + Math.floor(Math.random() * 6);
};

// Function that handles rounds
const endRound = () => {
  roundPoints = 0;
  setInnerText(pointsElement, roundPoints);

  numberOfRounds += 1;
  setInnerText(roundsElement, numberOfRounds);

  if (totalPoints >= 100) {
    setInnerText(diceElement, "DU VANN FÖR FAN!");
    diceBtn.disabled = true;
    freezeBtn.disabled = true;
  }
};

// Function that handles reset of the game
function resetGame() {
  dice = 0;
  numberOfRounds = 0;
  roundPoints = 0;
  totalPoints = 0;
  setInnerText(diceElement, "Tärning");
  setInnerText(pointsElement);
  setInnerText(roundsElement);
  setInnerText(totalPointsElement);
  setInnerText(h3, " ");
  diceBtn.disabled = false;
  freezeBtn.disabled = false;
  nameForm.reset();
}

nameForm.reset();
