//#####################################################   EXAMPLES   ####################################################

// let counter = 0;

// document.addEventListener("click", () => {
//   console.log(++counter);
// });

// const btns = document.getElementById('btnsList');

// btns.addEventListener('click', (event) => {
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
// });

//#####################################################   TASK1   ####################################################

// const tabsList = document.querySelector(".tabs");

// tabsList.onclick = (event) => {
//   const clickedBtn = event.target;

//   if (clickedBtn.tagName === "LI") {
//     const lastActiveBtn = event.currentTarget.querySelector(
//       ".tabs__item--active"
//     );

//     if (lastActiveBtn !== event.target) {
//       lastActiveBtn?.classList.remove("tabs__item--active");
//     }

//     clickedBtn.classList.add("tabs__item--active");
//   }
// };

//#####################################################   TASK2   ####################################################

const tabsList = document.querySelector('.tabs');

tabsList.onclick = (event) => {
  const clickedBtn = event.target;

  if (clickedBtn.tagName === 'LI') {
    const lastActiveBtn = event.currentTarget.querySelector('.tabs__item--active');
    const tabName = clickedBtn.dataset.tab;
    const tabContentItem = document.querySelector(`.tabs-content__item[data-tab="${tabName}"]`);
    const lastActiveTabContent = document.querySelector('.tabs-content__item--active');

    if (lastActiveBtn !== clickedBtn) {
      lastActiveBtn?.classList.remove('tabs__item--active');
    }

    if (lastActiveTabContent !== tabContentItem) {
      lastActiveTabContent?.classList.remove('tabs-content__item--active');
    }

    tabContentItem.classList.add('tabs-content__item--active');
    clickedBtn.classList.add('tabs__item--active');
  }
};

//#####################################################   TASK3   ####################################################
