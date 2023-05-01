<<<<<<< HEAD
const array = [
  { title: 'item-1', description: 'some description...', price: 10 },
  { title: 'item-2', description: 'some description...', price: 120 },
  { title: 'item-3', description: 'some description...', price: 34 },
  { title: 'item-4', description: 'some description...', price: 222 },
  { title: 'item-5', description: 'some description...', price: 67 },
  { title: 'item-6', description: 'some description...', price: 9 },
];

const removeFromCart = (arr, titleName) => {
  const refreshedArr = arr.filter((item) => {
    return item.title !== titleName;
  });
  console.log('removeFromCart has been called');
  return refreshedArr;
};
removeFromCart(array, 'item-1');
=======
// const burger = document.getElementById('burger');
// const menu = document.getElementById('menu');

// burger.addEventListener('click', () => {
//     menu.style.display = 'block'
// })
>>>>>>> 888b19d6b3d82caeee07c00e87c94329ecdb21ef
