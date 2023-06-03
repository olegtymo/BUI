/**
 * TASK-05
 *
 * Написати функціонал календаря на поточний місяць.
 * Окрім календаря на стрінці має бути форма для створення нової події.
 * Подія створюється двома полями - назва та дата.
 *
 * Після того, як подія створена, вона має відображатися в календарі у відповідний день.
 * Якщо назва події не введена, зробити неможливим натиснути на кнопку "Додати".
 *
 * Назви класів для елементів можна підгледіти в файлі зі стилями.
 *
 * Спосіб виконання довільний.
 *
 * ЗАВДАННЯ З ЗІРОЧКОЮ:
 * - зробити так шоб події зберігалися в localStorage
 * - зробити так, щоб дні відображались на своїх місцях відносно днів тижня
 * - додати можливість "гортати" місяці
 */
const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const classes = {
  calendarGlobal: "calendar",
  calendarCellBox: "calendar__item",
  calendarDay: "calendar__day",
  calendarEvent: "calendar__event",
};
// import collection from './itemsCollection.js';

function Calendar(classes, items = [], days) {
  this.parent = document.querySelector("main");
  this.days = days;
  this.classes = {
    calendarGlobal: classes.calendarGlobal,
    calendarCell: classes.calendarCellBox,
    calendarDay: classes.calendarDay,
    calendarEvent: classes.calendarEvent,
  };
  this.elements = {
    wrapper: document.createElement("section"),
    itemCell: document.createElement("div"),
    itemDay: document.createElement("p"),
    itemEvent: document.createElement("p"),
  };
  this.getIndexOfDateFromDate = () => {
    const date = new Date();
    const firstDayOfCurrentMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    return firstDayOfCurrentMonth;
  };
  this.renderOnlyDaysOfWeek = () => {
    for (let i of this.days) {
      const cell = document.createElement("div");
      const day = document.createElement("p");
      cell.className = this.classes.calendarCell;
      day.className = this.classes.calendarDay;
      day.innerText = `${i}`;
      cell.append(day);
      this.elements.wrapper.append(cell);
    }
  };
  this.renderOnlyDates = () => {
    const indexOfFirstDay = this.getIndexOfDateFromDate();

    const currentDate = new Date();
    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i < indexOfFirstDay; i++) {
      const cell = document.createElement("div");
      const day = document.createElement("p");
      cell.className = this.classes.calendarCell;
      day.className = this.classes.calendarDay;
      cell.append(day);
      this.elements.wrapper.append(cell);
    }
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const cell = document.createElement("div");
      const day = document.createElement("p");
      cell.className = this.classes.calendarCell;
      day.className = this.classes.calendarDay;
      day.innerText = `${i}`;
      cell.append(day);
      this.elements.wrapper.append(cell);
    }
  };
  this.render = () => {
    this.elements.wrapper.className = this.classes.calendarGlobal;
    this.renderOnlyDaysOfWeek();
    this.renderOnlyDates();
    this.parent.append(this.elements.wrapper);
  };
}

const newCal = new Calendar(classes, [], days);
newCal.render();
// console.log(newCal.getIndexOfDateFromDate());
