const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let i = 1;
  let array = str.split("");
  array.forEach(function (element, index) {
    if (element === array[index + 1]) {
      i++;
      return;
    }
    if (i === 1) {
      result += element;
    } else {
      result += i;
      result += element;
      i = 1;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
