// ######################################################################  TASK1  #########################################################################
// function without(object, propertyName) {

//      object[propertyName] = null;

// }

// const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' };
// console.log(without(data, 'address')); // { login: 'gogi', password: 'GloryOfUkraine', address: null}

// ######################################################################  TASK2  #########################################################################

// /**
//  *
//  * @param {string} title
//  * @param {number} price
//  * @param {number} amount
//  */
function ItemCreator(title, price, amount) {
  this.title = title;
  this.price = price;
  this.amount = amount;
}
function StorageItemCreator(title, price, amount) {
  this.title = title;
  this.price = price;
  this.amount = amount;
}

const listItem = [
  new ItemCreator('Bread', 20, 70),
  new ItemCreator('Milk', 25, 35),
  new ItemCreator('Meat', 40, 40),
  new ItemCreator('Water', 10, 76),
  new ItemCreator('Chips', 15, 12),
];

const storageListItem = [
  new ItemCreator('Water', 10, 56),
  new ItemCreator('Bread', 20, 70),
  new ItemCreator('Milk', 25, 55),
  new ItemCreator('Meat', 40, 70),
  new ItemCreator('Chips', 15, 12),
];

function ProfileStore(label, schedule, products) {
  this.label = label;
  this.schedule = schedule;
  this.products = products;
  this.ellipsisText = function (text, maxLength) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  };
  this.censorshipCheck = function (advertisement, forbiddenWord) {
    return advertisement.replace(`${forbiddenWord} `, '');
  };
  this.makeBlackFriday = function (discount) {
    if (discount <= 0 || discount >= 1) {
      throw new Error('Wrong argument type. Should be > 0 and < 1');
    }
    for (let i of this.products) {
      i.price = i.price * discount;
    }
  };
  this.verifyStore = function (storage) {
    let mismatchedItems = '';
    this.products.map((productItem) => {
      let matchedItem = storage.find((storageItem) => storageItem.title == productItem.title);
      if (matchedItem.amount !== productItem.amount) {
        mismatchedItems += `${matchedItem.title}, `;
        productItem.amount = matchedItem.amount;
      }
    });
    if (mismatchedItems) {
      mismatchedItems = mismatchedItems.slice(0, -2);
    } else 'All items are matched';
    return mismatchedItems;
  };
}
const newStore = new ProfileStore('Market', '07:00 - 18:00', listItem);

console.log(newStore.censorshipCheck('I would like to advertise my own made brick', 'like'));
