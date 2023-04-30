let counter = 0;
// document.addEventListener('click', () => {
//     console.log(++counter)
// })

const btns = document.getElementById("btnsList");

btns.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
  console.log(event.target);
  // console.log(++counter)
});

//##########################################################   TASK1   #################################################

// const tabsList = document.querySelector(".tabs");
// // tabsList.addEventListener('click', (e) => {
// //     console.log(e)
// // })
// tabsList.onclick = function (e) {
//   // console.log(e.target)
//   const clickedBtn = e.target;
//   if (clickedBtn.tagName === "LI") {
//     const lastActiveBtn = e.currentTarget.querySelector(".tabs__item--active");
//     if (lastActiveBtn !== e.target) {
//       lastActiveBtn?.classList.remove("tabs__item--active");
//     }
//     clickedBtn.classList.add("tabs__item--active");
//   }
// };
//##########################################################   TASK2   #################################################

const tabsList = document.querySelector(".tabs");

tabsList.onclick = function (e) {
  const clickedBtn = e.target;
  if (clickedBtn.tagName === "LI") {
    const lastActiveBtn = e.currentTarget.querySelector(".tabs__item--active");
    const lastActiveTabContent = document.querySelector(
      ".tabs-content__item--active"
    );
    const tabName = clickedBtn.dataset.tab;
    const tabContentItem = document.querySelector(
      `.tabs-content__item[data-tab='${tabName}']`
    );
    console.log(tabContentItem.textContent);
    if (lastActiveBtn !== clickedBtn) {
      lastActiveBtn?.classList.remove("tabs__item--active");
    }
    if (lastActiveTabContent !== tabContentItem) {
      lastActiveTabContent?.classList.remove("tabs-content__item--active");
    }
    tabContentItem.classList.add("tabs-content__item--active");
    clickedBtn.classList.add("tabs__item--active");
  }
};
