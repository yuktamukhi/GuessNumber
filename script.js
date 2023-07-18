'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉🎉🎉 correct Number  ';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.image').textContent = 13;
// console.log(document.querySelector('.image').textContent);
// document.querySelector('.score').textContent = 19;

// document.querySelector('.inputtextClass').value = 9;
// console.log(document.querySelector('.inputtextClass').value);

let Secretnumber = Math.trunc(Math.random() * 20) + 1;

// console.log('The Random Number is ', Secretnumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.image').textContent = '?';
  document.querySelector('.inputtextClass').value = '';
  document.querySelector('body').style.backgroundColor = '#e7f1a7';
  document.querySelector('.image').style.width = '40px';
  document.querySelector('.image').style.backgroundColor = '#22d53d';
});
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.inputtextClass').value);
  console.log('The Guessed Number is ', guessNumber);
  console.log(typeof guessNumber);

  //When there is no guess Number or No input value
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔️⛔️⛔️ Nooo Number';
    displayMessage('⛔️⛔️⛔️ Nooo Number');
    // } else if (guessNumber === 10) {
    //     document.querySelector(
    //       '.message'
    //     ).textContent = `⛔️⛔️⛔️${guessNumber} is even number`;
  }
  //when Player Wins the Game
  else if (guessNumber === Secretnumber) {
    // document.querySelector('.message').textContent =
    //   '🎉🎉🎉 This is correct Guess ';
    displayMessage('🎉🎉🎉 This is correct Guess');
    document.querySelector('.image').textContent = Secretnumber;
    document.querySelector('body').style.backgroundColor = '#47b39c';
    document.querySelector('.image').style.width = '100px';
    document.querySelector('.image').style.backgroundColor = '#e51111';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== Secretnumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guessNumber > Secretnumber
      //       ? '📈 📈 📈  This  Guess is too high,Try another'
      //       : '📉📉📉 This  Guess is too Low,Try another';
      displayMessage(
        guessNumber > Secretnumber
          ? '📈 📈 📈  This  Guess is too high,Try another'
          : '📉📉📉 This  Guess is too Low,Try another'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     '💥💥💥You Lost the Game💥💥💥';
      displayMessage('💥💥💥You Lost the Game💥💥💥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#e91444';
    }
  }
  //   //When the Guess is  Too High
  //   else if (guessNumber > Secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         '📈 📈 📈  This  Guess is too high,Try another';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '💥💥💥You Lost the Game💥💥💥';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#e91444';
  //     }
  //   }

  //When the Guee is  Too Low
  //   else if (guessNumber < Secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         '📉📉📉 This  Guess is too Low,Try another';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '💥💥💥You Lost the Game💥💥💥';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#e91444';
  //     }
  //   }
});
