/**
 *
 * @param {String} title
 * @param {Array} schedule
 * @param {Number} ticketPrice
 * @returns
 */
function createMovie(title, schedule, ticketPrice, seats = 32) {
  /**
   *
   * @param {number} discount - number bigger than 0 and less than 1 for calculating new prices
   * @returns
   */
  function makeSale(discount) {
    if (discount < 0 || discount >= 1) {
      console.error('Введено не коректне значення, має бути не мешне 0 та не більше 1');
      return null;
    }
    this.ticketPrice = this.ticketPrice * discount;
  }

  return {
    title,
    schedule,
    ticketPrice,
    makeSale,
    seats,
  };
}

function cinema(name, address, defaultFilmsStock = []) {
  /**
   *
   * @param {object} movie
   * @param {string} showTime - format "m.d.y, h:m"
   * @param {number} weekDuring
   * @returns
   */
  const weekSchedule = new Array();

  function schedule(movie, showTime, weekDuring) {
    const dateConvertor = new Date(showTime);
    weekSchedule.push([movie.title, showTime]);
    this.weekSchedule = weekSchedule;
  }

  const sumAllTickets = function () {
    let sum = 0;
    for (let film of this.filmsStock) {
      sum += film.ticketPrice * film.seats;
    }
    return sum;
  };
  const releaseFilm = function (filmToRelease) {
    this.releaseFilm = filmToRelease;
  };
  return {
    name,
    address,
    filmsStock: defaultFilmsStock,
    filmsRelease: null,
    sumAllTickets,
    releaseFilm,
    schedule,
  };
}

const imaxFilmStore = [
  createMovie('Matrix', [], 30, 100),
  createMovie('Iron man', [], 40, 200),
  createMovie('Wild west', [], 25, 150),
];
const imax = cinema('IMAX', 'in the middle of nowhere', imaxFilmStore);
const allCosts = imax.sumAllTickets();

const filmRunningMen = createMovie('RunningMen', [], 20, 400);
const filmMatrix = createMovie('Matrix', [], 30, 100);
const filmAvengers = createMovie('Avengers', [], 40, 100);

imax.schedule(filmMatrix, 'Wednesday 18:30', 3);
imax.schedule(filmMatrix, 'Friday 19:00', 3);
imax.schedule(filmRunningMen, 'Monday 18:40', 2);
imax.schedule(filmRunningMen, 'Saturday 21:00', 2);
imax.schedule(filmRunningMen, 'Friday 14:40', 2);
imax.schedule(filmAvengers, 'Saturday 20:00', 2);
imax.schedule(filmAvengers, 'Thursday 17:30', 2);
console.log(imax.weekSchedule);

function showingCounter() {}
