//#################################################################################   TASK1   #########################################################################
const eventDateInput = document.querySelector('.setTimer__field');
const startTimerBtn = document.querySelector('.setTimer__submit');
const timer = document.querySelector('.timer');
timer.style.display = 'none';

startTimerBtn.onclick = (e) => {
  e.preventDefault();
  const localDateFormat = new Date(eventDateInput.value).toLocaleDateString('uk-UA');
  startTimer(localDateFormat);
};

const startTimer = (eventDate) => {
  const convertedEventDate = new Date(eventDate).getTime();

  setInterval(() => {
    timer.style.display = 'flex';
    const currentDate = Date.now();
    const differenceInMilliseconds = convertedEventDate - currentDate;

    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
    const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);

    const daysDOM = document.querySelector('[data-timer="day"]');
    daysDOM.textContent = `${days}`;

    const hoursDOM = document.querySelector('[data-timer="hours"]');
    hoursDOM.textContent = `${hours.toString().padStart(2, '0')}`;

    const minutesDOM = document.querySelector('[data-timer="minute"]');
    minutesDOM.textContent = `${minutes.toString().padStart(2, '0')}`;

    const secondsDOM = document.querySelector('[data-timer="second"]');
    secondsDOM.textContent = `${seconds.toString().padStart(2, '0')} `;
  }, 1000);
};

//#################################################################################   TASK2   #########################################################################
import STORAGE from './storage.js';

const defaultStorage = [
  {
    id: 1,
    imgUrl:
      'https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg',
    title: 'ficus',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ',
  },
  {
    id: 2,
    imgUrl:
      'https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg',
    title: 'qui esse',
    description: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ',
  },
];

const storageBox = document.querySelector('#root_storage');
storageBox.style.columnGap = '3em';

if (!localStorage.basket) {
  localStorage.setItem('basket', JSON.stringify(defaultStorage));
}
const renderStorage = (storage) => {
  storage.forEach((item) => {
    const itemCard = document.createElement('div');
    const itemUrl = document.createElement('img');
    const itemTitle = document.createElement('h3');
    const itemDescription = document.createElement('p');
    const itemBtn = document.createElement('button');

    itemCard.id = item.id;
    itemBtn.textContent = 'Add';
    itemUrl.style.width = '250px';
    itemUrl.style.height = '250px';
    itemUrl.src = item.imgUrl;
    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;
    itemCard.append(itemUrl, itemTitle, itemDescription, itemBtn);
    storageBox.appendChild(itemCard);

    itemBtn.onclick = () => {
      let basket = JSON.parse(localStorage.getItem('basket')) || [];
      console.log(basket);

      const isObjectInArray = basket.some((elem) => elem.id === item.id);
      if (isObjectInArray) {
        throw new Error('This product has been already added');
      }
      basket.push(item);
      localStorage.setItem('basket', JSON.stringify(basket));
      console.log(localStorage.basket);
    };
  });
};

renderStorage(STORAGE);
