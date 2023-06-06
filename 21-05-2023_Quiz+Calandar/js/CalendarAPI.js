const ololo = {
  "22-08-2022": [
    {
      id: 22928273733,
      title: "Gogi died",
      date: "22-08-2022",
    },
  ],
};

/**
 * @title CalendarAPI
 */
const CalendarAPI = {
  key: "calendar",
  value: JSON.parse(localStorage.getItem(this.key)) || {},

  createEvent(obj) {
    if (!obj?.id || !obj?.title || !obj?.date) {
      throw new TypeError("Wrong argument type");
    }

    if (this.value[obj.date]) {
      currentStorageValue[obj.date].push(obj);
    } else {
      this.value[obj.date] = [obj];
    }

    this.updateStorage(this.value);
  },

  read() {
    return JSON.parse(localStorage.getItem(this.key)) || {};
  },

  readDay(date) {},

  updateStorage(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  },

  updateEvent(obj) {},

  removeEvent(id) {},

  removeStorage() {
    localStorage.removeItem(this.key);
  },
};

export default CalendarAPI;
