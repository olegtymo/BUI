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

const classes = {
  calendarGlobal: "calendar",
  calendarItem: "calendar__item",
  calendarDay: "calendar__day",
  calendarEvent: "calendar__event",
}

function Calendar(classes) {
  this.classes = {
    calendarGlobal: classes.calendarGlobal,
    calendarItem: classes.calendarItem,
    calendarDay: classes.calendarDay,
    calendarEvent: classes.calendarEvent,
  }

  this.parent = document.querySelector("main")
  this.wrapper = document.createElement("section")
  this.wrapper.className = this.classes.calendarGlobal
  this.parent.append(this.wrapper)

  this.wrapper.addEventListener("click", (e) => {
    this.handleEvent(e)
  })

  this.handleEvent = (e) => {
    if (e.target.tagName !== "DIV" && e.target.tagName !== "P") return null
    console.dir(e.target)
  }

  this.createCalendarItem = (parent, index) => {
    const calItemContainer = document.createElement("div")
    const calItemDay = document.createElement("p")
    const calItemEvent = document.createElement("p")

    calItemContainer.classList.add(this.classes.calendarItem)
    calItemDay.classList.add(this.classes.calendarDay)
    // calItemEvent.classList.add(this.classes.calendarEvent);

    calItemDay.innerText = index

    calItemContainer.append(calItemDay, calItemEvent)
    parent.append(calItemContainer)
  }

  /**
   *
   * @returns qty of days in current month
   */
  this.getMonthRange = () => {
    const today = new Date()
    // const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDate();
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate()
    return daysInMonth
  }

  this.render = () => {
    const qtyOfDays = this.getMonthRange()
    for (let i = 1; i < qtyOfDays + 1; i++) {
      this.createCalendarItem(this.wrapper, i)
    }
  }
}

const newCal = new Calendar(classes)

newCal.render()
