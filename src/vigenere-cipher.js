const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(option) {
    this.option = option;
  }
  encrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let newWord = word.split("");
    let newKey = key.split("");
    let k = 0;
    for (let i = 0; i < newWord.length; i++) {
      let iWord = alphabet.indexOf(newWord[i].toUpperCase());
      let iKey = alphabet.indexOf(newKey[k % newKey.length].toUpperCase());
      if (iWord != -1) {
        k++;
        newWord[i] = alphabet[(iWord + iKey) % alphabet.length];
      }
    }
    if (this.option === false) {
      return newWord.reverse().join("");
    } else {
      return newWord.join("");
    }
  }
  decrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let newWord = word.split("");
    let newKey = key.split("");
    let k = 0;
    for (let i = 0; i < newWord.length; i++) {
      let iWord = alphabet.indexOf(newWord[i].toUpperCase());
      let iKey = alphabet.indexOf(newKey[k % newKey.length].toUpperCase());
      if (iWord != -1) {
        k++;
        newWord[i] =
          alphabet[(iWord - iKey + alphabet.length) % alphabet.length];
      }
    }
    if (this.option === false) {
      return newWord.reverse().join("");
    } else {
      return newWord.join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
