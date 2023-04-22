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