// #################################   TASK #1   ###################################
// const isCharInWord = (word, index, char) => {
//   return word[(index -= 1)] === char;
// };

// #################################   TASK #2   ###################################
// const checkLength = (str, expectedLength) => {
//   return str.length === expectedLength;
// };

// #################################   TASK #3   ###################################
// let arr = ['house', 'color', 'game', 'car', 'museum'];

// function createRandElement(arr) {
//   let rand = Math.floor(Math.random() * arr.length);
//   return arr[rand];
// }

// let randWord = createRandElement(arr);
// console.log(randWord);
// const guessedLetter = (randWord, letterFromUser) => {
//   let string = '_'.repeat(randWord.length);
//   let updatedString = '';

//   for (let i = 0; i < randWord.length - 1; i++) {
//     if (randWord[i] === letterFromUser) {
//       updatedString += randWord[i];
//     }
//     updatedString += `${string[i]} `;
//   }
//   return updatedString;
// };

// function isCompatible(letterFromUser, randWord) {
//   let lowCaseLetter = letterFromUser.toLowerCase();
//   let lowCaseWord = randWord.toLowerCase();
//   console.log(lowCaseWord.indexOf(lowCaseLetter));
//   let mistakesCounter = 0;

//   while (lowCaseWord.indexOf(lowCaseLetter) === -1 && mistakesCounter < 3) {
//     mistakesCounter++;
//     letterFromUser = prompt(`Nope, try again! You have ${4 - mistakesCounter} attempts`);
//     console.log(`Counter:${mistakesCounter}`);
//   }
//   if (letterFromUser === randWord) {
//     return alert('Good game! You won!');
//   }

//   if (lowCaseWord.indexOf(lowCaseLetter) >= 0) {
//     letterFromUser = prompt(`Nice! You have guessed`, guessedLetter(randWord, letterFromUser));
//   }
// }

// function validateUserInput(letterFromUser) {
//   while (letterFromUser.toLowerCase() === letterFromUser.toUpperCase()) {
//     letterFromUser = prompt('Invalid input!Only letters!');
//   }
//   isCompatible(letterFromUser, randWord);
// }

// const game = () => {
//   let offerToGame = confirm('Do you want to play a game?');
//   if (offerToGame === true) {
//     let letterFromUser = prompt('Type letter in');
//     validateUserInput(letterFromUser);
//   }
// };

// game();


