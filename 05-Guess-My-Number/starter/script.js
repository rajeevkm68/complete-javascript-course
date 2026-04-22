'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const body = document.querySelector('body');
let highScore = 0;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score <= 0) return;

  if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    body.style.backgroundColor = '#144804';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
      body.style.backgroundColor = '#da0808';
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
