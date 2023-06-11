// const ololo = {
//   "22-08-2022": [
//     {
//       id: 22928273733,
//       title: "Gogi died",
//       date: "22-08-2022",
//     },
//   ],
// };

/**
 * @title CalendarAPI
 */
const CalendarAPI = {
  key: "calendar",
  value: JSON.parse(localStorage.getItem("calendar")) || {},

  createEvent(obj) {
    if (!obj?.id || !obj?.title || !obj?.date) {
      throw new TypeError("Wrong argument type");
    }

    if (this.value[obj.date]) {
      this.value[obj.date].push(obj);
    } else {
      this.value[obj.date] = [obj];
    }

    this.updateStorage(this.value);
  },

  read() {
    return JSON.parse(localStorage.getItem(this.key)) || {};
  },

  readDay(date) {
    return this.value[date] || [];
  },

  updateStorage(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  },

  updateEvent(obj) {
    if (!obj?.id || !obj?.title || !obj?.date) {
      throw new TypeError("Wrong argument type");
    }
    if (this.value[obj.date]) {
      const events = this.value[obj.date];
      const index = events.findIndex((event) => {
        event.id === obj.id;
      });
      if (index !== -1) {
        events[index] = obj;
      }
    }
    this.updateStorage(this.value);
  },

  removeEvent(id) {
    Object.keys(this.value).forEach((date) => {
      const events = this.value[date];
      const index = events.findIndex((event) => event.id === id);
      if (index !== -1) {
        events.splice(index, 1);
      }
    });
    this.updateStorage(this.value);
  },

  removeStorage() {
    localStorage.removeItem(this.key);
  },
};

export default CalendarAPI;
