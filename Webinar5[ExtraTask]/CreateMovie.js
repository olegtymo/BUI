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

imax.schedule(filmMatrix, ['25.04 .2023 18: 30', '27.04.2023 19:00', '29.04.2023 14:00', '30.04.2023 17:30'], 3);
imax.schedule(filmMatrix, '25.04.2023 18:30', 3);
imax.schedule(filmMatrix, '27.04.2023 19:00', 3);
imax.schedule(filmMatrix, '29.04.2023 14:00', 3);
imax.schedule(filmMatrix, '30.04.2023 17:30', 3);
imax.schedule(filmRunningMen, 'Monday 18:40', 2);
imax.schedule(filmRunningMen, 'Saturday 21:00', 2);
imax.schedule(filmRunningMen, 'Friday 14:40', 2);
imax.schedule(filmAvengers, 'Saturday 20:00', 2);
imax.schedule(filmAvengers, 'Thursday 17:30', 2);
console.log(imax.weekSchedule);

function showingCounter() {}