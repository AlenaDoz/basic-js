const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/* date */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};
/*
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error("Invalid date!");
    }

    if (date.getMonth() < 2 || date.getMonth() === 11) return "winter";
    if (date.getMonth() < 5) return "spring";
    if (date.getMonth() < 8) return "summer";
    if (date.getMonth() < 11) return "autumn";
  }
  throw new Error("Invalid date!");
}
*/
