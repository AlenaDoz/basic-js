const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArr = [];
  let indArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  arr.forEach(function (element, index) {
    if (element === "--discard-next") {
      indArr.push(element);
      indArr.push(index);
      if (arr.length - 1 >= index + 1) {
        arr.splice(index, 2);
      } else {
        arr.splice(index, 1);
      }
    }
    if (element === "--discard-prev") {
      indArr.push(element);
      indArr.push(index);
      if (0 < index - 1) {
        arr.splice(index - 1, 2);
      } else {
        arr.splice(index, 1);
      }
    }
    if (element === "--double-next") {
      indArr.push(element);
      indArr.push(index);
      if (arr.length - 1 >= index + 1) {
        arr[index] = arr[index + 1];
      } else {
        arr.splice(index, 1);
      }
    }
    if (element === "--double-prev") {
      indArr.push(element);
      indArr.push(index);
      if (0 < index - 1) {
        arr[index] = arr[index - 1];
      } else {
        arr.splice(index, 1);
      }
    }
    newArr.push(element);
  });
  return arr;
}

module.exports = {
  transform,
};
