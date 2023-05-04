//#######################################################################################   TASK1   #######################################################################################

const menuIcon = document.getElementById('menu-icon');
const navigationList = document.querySelector('.navigation__list');
menuIcon.addEventListener('click', (event) => {
  navigationList.classList.toggle('navigation__list--active');
});

//#######################################################################################   TASK2   #######################################################################################
const HTML = document.querySelector('html');
const customCursor = document.querySelector('.root-cursor');
HTML.style.cursor = 'none';
HTML.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.x + 'px';
  customCursor.style.top = e.y + 'px';
});
//#######################################################################################   TASK3   #######################################################################################
const lettersContainer = document.querySelector('.title');
const keyboardKeys = document.querySelectorAll('[data-value]');
const matchingKeyCodeAndDataValue = {
  Escape: 'esc',
  Backspace: 'back',
  CapsLock: 'caps',
  ShiftLeft: 'left-shift',
  ShiftRight: 'right-shift',
};
const showLettersOnScreen = document.addEventListener('keydown', (e) => {
  lettersContainer.textContent += `${e.key}`;
  for (let i in matchingKeyCodeAndDataValue) {
    if (i === e.code) {
      const matchedElem = document.querySelector(
        `[data-value = ${matchingKeyCodeAndDataValue[i]}]`,
      );

      matchedElem.classList.add('hit');
      setTimeout(() => matchedElem.classList.remove('hit'), 70);
    }
  }
  keyboardKeys.forEach((elem) => {
    if (elem.dataset.value.toLowerCase() === e.key.toLowerCase()) {
      if (elem.dataset.value === 'tab') {
        e.preventDefault();
      }
      elem.classList.add('hit');
      setTimeout(() => elem.classList.remove('hit'), 70);
    }
  });
});
