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

// API.createEvent({
//   id: Date.now(),
//   title: "sobaka dyka",
//   date: "25-06-2023",
// });

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
    this.elements.form.className = this.classes.calendarForm;
    this.elements.dateInput.type = "date";
    this.elements.dateInput.addEventListener("change", this.enableBtn);
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

    const closeBtnDOM = document.createElement("div");
    const eventDOM = document.createElement("div");
    closeBtnDOM.classList.add("closeBtn");
    eventDOM.textContent = this.elements.eventInput.value;
    eventDOM.className = this.classes.calendarEvent;
    eventDOM.addEventListener("click", (e) => {
      if (e.target.matches(".calendar__itemsWrapper__event:hover .closeBtn")) {
        API.removeEvent(elem.id);
        e.currentTarget.style.display = "none";
      }
    });
    eventDOM.append(closeBtnDOM);
    targetDay.append(eventDOM);
    API.createEvent({
      id: Date.now(),
      title: this.elements.eventInput.value,
      date: this.elements.dateInput.value,
    });

    this.elements.dateInput.value = "";
    this.elements.eventInput.value = "";
  };
  this.renderOnlyDaysOfWeek = () => {
    for (let i of this.days) {
      const cell = document.createElement("div");
      const day = document.createElement("p");
      cell.className = this.classes.calendarCell;
      cell.classList.add("hoverOff");
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
      const currentTimeStamp = this.getTimeStamp(i);
      const formatedCurrentDate = this.formatDate(currentTimeStamp);

      day.innerText = `${i}`;
      cell.append(day);
      if (this.findEventFromLS(formatedCurrentDate)) {
        API.readDay(formatedCurrentDate).forEach((elem) => {
          const eventDOM = document.createElement("div");
          const closeBtnDOM = document.createElement("div");
          eventDOM.className = this.classes.calendarEvent;
          closeBtnDOM.classList.add("closeBtn");

          eventDOM.textContent = elem.title;
          eventDOM.append(closeBtnDOM);

          closeBtnDOM.addEventListener("click", (e) => {
            API.removeEvent(elem.id);
            eventDOM.style.display = "none";
          });
          cell.append(eventDOM);
        });
      }
      this.elements.wrapper.append(cell);
    }
  };

  this.findEventFromLS = (event) => {
    const dateFromLS = Object.keys(API.read()).find((ev) => {
      return ev === event;
    });
    return dateFromLS;
  };

  this.formatDate = (timestamp) => {
    let time = new Date(timestamp);
    return `${time.getFullYear()}-${(time.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${time.getDate().toString().padStart(2, "0")}`;
  };
  this.render = () => {
    this.elements.calendar.className = this.classes.calendarGlobal;

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
