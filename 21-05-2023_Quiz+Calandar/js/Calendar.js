import API from "./CalendarAPI.js";
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

API.createEvent({
  id: Date.now(),
  title: "sobaka dyka",
  date: "25-06-2023",
});

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const classes = {
  calendarGlobal: "calendar",
  calendarForm: "calendar__form",
  calendarItemWrapper: "calendar__itemsWrapper",
  calendarCellBox: "calendar__itemsWrapper__item",
  calendarDay: "calendar__itemsWrapper__day",
  calendarEvent: "calendar__itemsWrapper__event",
};
// import collection from './itemsCollection.js';

function Calendar(classes, items = [], days) {
  const currentDate = new Date();
  this.parent = document.querySelector("main");
  this.days = days;
  this.classes = {
    calendarGlobal: classes.calendarGlobal,
    calendarForm: classes.calendarForm,
    calendarItemWrapper: classes.calendarItemWrapper,
    calendarCell: classes.calendarCellBox,
    calendarDay: classes.calendarDay,
    calendarEvent: classes.calendarEvent,
  };
  this.elements = {
    calendar: document.createElement("section"),
    wrapper: document.createElement("div"),
    itemCell: document.createElement("div"),
    itemDay: document.createElement("p"),
    itemEvent: document.createElement("p"),
    form: document.createElement("form"),
    dateInput: document.createElement("input"),
    eventInput: document.createElement("input"),
    addEventBtn: document.createElement("button"),
  };
  this.getIndexOfDayFromDate = () => {
    const date = new Date();
    const firstDayOfCurrentMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    return firstDayOfCurrentMonth;
  };
  this.renderOnlyForm = () => {
    // this.elements.dateInput.placeholder = "Type date in";

    this.elements.form.className = this.classes.calendarForm;
    this.elements.dateInput.type = "date";
    this.elements.eventInput.placeholder = "Type event in";
    this.elements.eventInput.addEventListener("keyup", this.enableBtn);
    this.elements.addEventBtn.textContent = "Add Event";
    this.elements.addEventBtn.disabled = true;
    this.elements.addEventBtn.addEventListener("click", this.addEvent);
    this.elements.form.append(
      this.elements.dateInput,
      this.elements.eventInput,
      this.elements.addEventBtn
    );
    this.elements.calendar.append(this.elements.form);
  };
  this.enableBtn = (e) => {
    if (
      this.elements.eventInput.value.length >= 2 &&
      this.elements.dateInput.value !== ""
    ) {
      this.elements.addEventBtn.disabled = false;
    } else {
      this.elements.addEventBtn.disabled = true;
    }
  };
  this.addEvent = (e) => {
    e.preventDefault();
    const timeStamp = new Date(this.elements.dateInput.value);
    timeStamp.setHours(0);
    timeStamp.setMinutes(0);
    timeStamp.setSeconds(0);
    const timeStampToMs = timeStamp.getTime();
    const targetDay = document.querySelector(`[data-date='${timeStampToMs}']`);

    const eventElem = document.createElement("p");
    eventElem.textContent = this.elements.eventInput.value;
    eventElem.className = this.classes.calendarEvent;
    targetDay.append(eventElem);
    if (localStorage.getItem(`${this.elements.dateInput.value}`)) {
    }
    localStorage.setItem(
      this.elements.dateInput.value,
      JSON.stringify([this.elements.eventInput.value])
    );

    this.elements.dateInput.value = "";
    this.elements.eventInput.value = "";
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
  this.getTimeStamp = (day) => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ).getTime();
  };
  this.renderOnlyDates = () => {
    const indexOfFirstDay = this.getIndexOfDayFromDate();
    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i < indexOfFirstDay; i++) {
      const cell = document.createElement("div");
      this.elements.wrapper.append(cell);
    }
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const cell = document.createElement("div");
      const day = document.createElement("p");
      cell.className = this.classes.calendarCell;
      cell.dataset.date = this.getTimeStamp(i);
      day.className = this.classes.calendarDay;

      day.innerText = `${i}`;
      cell.append(day);
      this.elements.wrapper.append(cell);
    }
  };
  this.render = () => {
    this.elements.calendar.className = this.classes.calendarGlobal;
    console.log(this.classes.calendarGlobal);

    this.elements.wrapper.className = this.classes.calendarItemWrapper;
    this.elements.calendar.append(this.elements.wrapper);

    this.renderOnlyDaysOfWeek();
    this.renderOnlyDates();

    this.parent.append(this.elements.calendar);
    this.renderOnlyForm();
  };
}

const newCal = new Calendar(classes, [], days);
newCal.render();
