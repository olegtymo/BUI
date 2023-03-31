// #################################   TASK #1   ###################################
const findCharInWord = (word, index, char) => {
  if (word[(index -= 1)] !== char) {
    return false;
  } else return true;
};

findCharInWord('hello', 0, 'h');

// #################################   TASK #2   ###################################
const checkoutLength = (str, expectedLength) => {
  if (str.length !== expectedLength) {
    return false;
  } else return true;
};

// #################################   TASK #3   ###################################
let arr = ['house', 'color', 'game', 'car', 'museum'];

function createRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

let randWord = createRandElement(arr);
console.log(randWord);

function isCompatible(letterFromUser, randWord) {
  let lowCaseLetter = letterFromUser.toLowerCase();
  let lowCaseWord = randWord.toLowerCase();
  console.log(lowCaseWord.indexOf(lowCaseLetter));

  let mistakesCounter = 0;
  while (mistakesCounter < 4) {
    // if (lowCaseLetter === lowCaseWord) {
    //   return alert('Fantastic! You won!');
    // }
    for (let i = 0; i <= mistakesCounter; i++) {
      if (lowCaseWord.indexOf(lowCaseLetter) === -1) {
        let refuse = alert(`Nope, try again!`);
        letterFromUser = prompt('Type letter in again!');
        mistakesCounter++;
        console.log(mistakesCounter);
        if (mistakesCounter === 4) {
          return alert('Game over');
        }
        // letterFromUser = prompt('Type letter in again!');
      }
    }
  }
}

function validateUserInput(letterFromUser) {
  while (letterFromUser.toLowerCase() === letterFromUser.toUpperCase()) {
    letterFromUser = prompt('Invalid input!Only letters!');
  }
  isCompatible(letterFromUser, randWord);
}

const game = () => {
  let offerToGame = confirm('Do you want to play a game?');
  if (offerToGame === true) {
    let letterFromUser = prompt('Type letter in');
    validateUserInput(letterFromUser);
  }
};

game();
