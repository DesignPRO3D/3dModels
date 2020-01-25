// Game values
let min = 1;
let max = 100;
let winningNum = getRandomNum(max);
let guessesNum = 0;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const guessNumText = document.querySelector('#guess-num');
const resetBtn = document.querySelector('#reset-btn');
const scoreTable = document.querySelector('#score-table');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  if ( isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  guessesNum += 1;
  guessNumText.textContent = guessesNum;
  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    document.querySelector('.native-input').style.color = 'green';
    guessBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    // Set message
    //setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    scoreTable.textContent = `${winningNum} is correct, YOU WIN!`;
  } else {
    // Wrong number
    if (guess > winningNum) {
      // setMessage(`${guess} is higher than winning number`, 'red');
      scoreTable.textContent = guess + ' > Winning Number';
    } else {
      scoreTable.textContent = guess + ' < Winning Number'
      // setMessage(`${guess} is lower than winning number`, 'blue');
    }
  }
  guessInput.value = null;
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

resetBtn.addEventListener('click', function() {
  guessBtn.style.display = 'inline-block';
  resetBtn.style.display = 'none';
  message.textContent = '';
  guessNumText.textContent = 0;
  guessInput.disabled = false;
  guessInput.value = null;
  scoreTable.textContent = '';
  winningNum = getRandomNum(max);
});

//Get winning number
function getRandomNum(max) {
  const randomNum = Math.floor(Math.random() * max + 1);
  return randomNum;
}