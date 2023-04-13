//####################################################################   TASK1   #############################################################################
const findChar = (word, index, char) => word[index] === char;

//####################################################################   TASK2   #############################################################################
const argLength = (str, expectedLength) => str.length === expectedLength;

//####################################################################   TASK3   #############################################################################

const words = ['house', 'color', 'game', 'car', 'museum'];

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function validateInput(input) {
  return /^[a-zA-Z]+$/.test(input);
}

function init() {
  let attemptsLeft = 4;
  const word = getRandomWord(words);
  let guessedWord = '_'.repeat(word.length);

  while (attemptsLeft > 0 && guessedWord !== word) {
    const guess = prompt(`Guess a letter (${attemptsLeft} attempts left):\n\n${guessedWord}`);

    if (guess === null) {
      return;
    }

    if (!validateInput(guess)) {
      alert('Please enter a letter in english!');
      continue;
    }

    let correctGuess = false;

    let newGuessedWord = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === guess.toLowerCase()) {
        newGuessedWord += word[i];
        correctGuess = true;
      } else {
        newGuessedWord += guessedWord[i];
      }
    }

    if (correctGuess) {
      guessedWord = newGuessedWord;
      alert('Correct guess!');
    } else {
      attemptsLeft--;
      alert(`Incorrect guess! ${attemptsLeft} attempts left.`);
    }
  }

  if (guessedWord === word) {
    alert(`Congratulations! You won!\nThe word was "${word}".`);
  } else {
    alert(`Game over!\nThe word was "${word}".`);
  }
}

const playGame = () => {
  const play = confirm('Do you want to play a game?');
  if (play) {
    init();
  } else {
    alert('Ok, see you next time!');
  }
};

playGame();
