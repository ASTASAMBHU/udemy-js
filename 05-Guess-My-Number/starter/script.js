'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 15;

let secreatNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreatNumber);
let score = 20;
let highScore = 0;

const displyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // Because here if guess value is 0 or empty value

    // document.querySelector('.message').textContent = 'No Number';
    // Insted of the upper statement repeat we use function call
    displyMessage('No Number');
  } else if (guess === secreatNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displyMessage('Correct Number');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreatNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== secreatNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secreatNumber ? "Too High" : "Too Low";
      displyMessage(guess > secreatNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost game';
      displyMessage('You Lost game');
    }
  }

  // else if(guess > secreatNumber){

  //     if(score > 1){
  //         document.querySelector('.message').textContent = "Too High";
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent ="You Lost game";
  //     }

  // }
  // else if(guess < secreatNumber){
  //     if(score > 1){
  //         document.querySelector('.message').textContent = "Too Low";
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent ="You Lost game";
  //     }

  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = "Start guessing...";
  // document.querySelector('.number').textContent = "?";
  // document.querySelector('.score').textContent = 20;
  // document.body.style.backgroundColor = "#222";
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displyMessage('Start guessing...');
  

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
