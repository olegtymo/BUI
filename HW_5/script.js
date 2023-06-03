//#################################################   TASK   #####################################################

//#########################    DON'T FORGET ABOUT RANGE 50-90% BECAUSE IT RETURN NOTHING    #######################

const listItem = document.querySelectorAll('.list__item');

const calculatePercentage = (whole, part) => {
  return ((part / whole) * 100).toFixed(1);
};

const getColor = (percentage) => {
  if (percentage >= 90) {
    return 'green';
  } else if (percentage < 20) {
    return 'red';
  } else if (percentage < 50) {
    return 'yellow';
  }
};
/**
 *
 * @param {string}  value - title of tag with class 'list__title' without colon!
 */
const colorChanger = (value) => {
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].querySelector('.list__title').textContent.slice(0, -1) === value) {
      const calcPercentage = calculatePercentage(
        +listItem[i].querySelector('.list__goal-value').textContent,
        +listItem[i].querySelector('.list__value').textContent,
      );
      listItem[i].querySelector('.list__text').style.color = getColor(calcPercentage);
    }
  }
};
