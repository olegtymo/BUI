//#################################################   TASK 1   #####################################################

// const dataIcecream = [
//   { name: 'хрещатик', price: '7,99 uah' },
//   { name: '100% пломбір', price: '2,50 uah' },
//   { name: 'maximus', price: '12,99 uah' },
//   { name: 'пташине молоко', price: '20,99 uah' },
// ];

// const renderList = (list) => {
//   const listItems = document.createElement('ul');
//   document.body.appendChild(listItems);

//   list.forEach((el) => {
//     const item = document.createElement('li');
//     const itemTitle = document.createElement('h2');
//     const itemPrice = document.createElement('p');
//     listItems.appendChild(item);
//     item.style.listStyleType = 'none';
//     item.append(itemTitle, itemPrice);
//     itemTitle.textContent = el.name;
//     itemPrice.textContent = el.price;
//   });
// };

// renderList(dataIcecream);

//#################################################   TASK 2   #####################################################

// const clearLinksPage = () => {
//   const links = document.querySelectorAll('a');

//   links.forEach((el, index) => {
//     el.getAttribute('href') === '' ? el.remove() : el;
//   });
// };

// clearLinksPage();

//#################################################   TASK 3   #####################################################

// const filterСlothes = (color) => {
//   const list = document.querySelectorAll('.list__item');
//   const message = document.createElement('p');
//   message.textContent = 'Такого кольору немає в асортименті';
//   document.querySelector('.field').insertAdjacentElement('afterend', message);

//   list.forEach((el) => {
//     if (!el.textContent.includes(color)) {
//       el.style.display = 'none';
//     } else {
//       message.style.display = 'none';
//     }
//   });
// };

// document.getElementById('filterBtn').addEventListener('click', (e) => {
//   e.preventDefault();
//   const valueField = document.querySelector('.field').value;

//   filterСlothes(valueField);
// });
