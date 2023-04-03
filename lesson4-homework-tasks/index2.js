inputFromFirstUser = prompt('Player_1: Guess the word', 'for example, apple');
inputFromSecondUser = prompt(
  'Player_2:Type one letter or whole word in',
  `for example, cherry or 'c'`,
);
let counterMistakes = 0;
function validation(str) {
  if (/^[a-zA-Z]+$/.test(str)) {
    return true;
  }
}
const guessedLetter = (word, letter) => {
  let string = '_'.repeat(word.length);
  let updatedString = '';

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === letter) {
      updatedString += word[i];
    }
    updatedString += `${string[i]} `;
  }
  return updatedString;
};

// function findCharacter(wholeWord, partWord) {
//   //   debugger;
//   while (partWord == String()) {
//     inputFromSecondUser = prompt(
//       'You are lucky',
//       guessedLetter(inputFromFirstUser, inputFromSecondUser),
//     );
//   }

//   inputFromSecondUser = prompt('Nope,try again');
// }

function game() {
  while (confirm('Do you want to play a game?')) {
    inputFromFirstUser;
    if (!validation(inputFromFirstUser)) {
      alert('Invalid input! Only letters A-Z and a-z are allowed.');
    }
    inputFromSecondUser;
  }
}

game();
