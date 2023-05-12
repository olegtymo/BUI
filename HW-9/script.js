const trelloSection = document.querySelector('.trello-section');
const formWrapper = document.querySelector('.form');
const cardTitleInput = document.querySelector('.form__field');
const cardColorSelect = document.querySelector('.form__select');
const cardCreatingBtn = document.querySelector('.form__submit');
const trelloColumn = document.querySelector('.trello-column');
const addTrelloBtn = document.querySelector('.create-trello-btn');

cardCreatingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const trelloCell = document.createElement('div');
  trelloCell.classList.add('trello-column__cell');
  trelloCell.textContent = cardTitleInput.value;
  switch (cardColorSelect.value) {
    case 'жовтий':
      trelloCell.style.backgroundColor = 'yellow';
      break;
    case 'червоний':
      trelloCell.style.backgroundColor = 'red';
      break;
    default:
      trelloCell.style.backgroundColor = 'green';
  }

  trelloColumn.append(trelloCell);
});

addTrelloBtn.addEventListener('click', (e) => {
  const trelloColumn = document.createElement('div');
  trelloColumn.classList.add('trello-column');
  console.log(trelloColumn);
  addTrelloBtn.insertAdjacentElement('beforebegin', trelloColumn);
});
