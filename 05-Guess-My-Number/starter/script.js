'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const body = document.querySelector('body');
let highScore = 0;
let messageLost = 'You lost the game!';
let messageStart = 'Start guessing...';
let messageCorrect = 'Correct Number!';
let messageTooHigh = 'Too high!';
let messageTooLow = 'Too low!';

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score <= 0) return;

  if (guess === number) {
    document.querySelector('.message').textContent = messageCorrect;
    body.style.backgroundColor = '#144804';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? messageTooHigh : messageTooLow;
      score--;
    } else {
      document.querySelector('.message').textContent = messageLost;
      body.style.backgroundColor = '#da0808';
    }
    document.querySelector('.score').textContent = score;
  }

  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = number;
  document.querySelector('.message').textContent = messageStart;
  document.querySelector('.score').textContent = score;
  body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
