/**
 *
 * @param {String} title
 * @param {Array} schedule
 * @param {Number} ticketPrice
 * @returns
 */
function createMovie(title, schedule, ticketPrice, seets = 32) {
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
    seets,
  };
}

function cinema(name, address, defaultFilmsStock = []) {
  const sumAllTickets = function () {
    let sum = 0;
    for (let film of this.filmsStock) {
      sum += film.ticketPrice * film.seets;
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
  };
}

const imaxFilmStore = [
  createMovie('Matrix', [], 30, 100),
  createMovie('Iron man', [], 40, 200),
  createMovie('Wild west', [], 25, 150),
];
const imax = cinema('IMAX', 'in the middle of nowhere', imaxFilmStore);
const allCosts = imax.sumAllTickets();
console.log(allCosts);
