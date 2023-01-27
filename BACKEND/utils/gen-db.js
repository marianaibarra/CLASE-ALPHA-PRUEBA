const {
  createArrayOfNumbers,
  genRandomNumber,
} = require("./gen-random-number");

let registers = [];
let numbersArray = [];
let numbersArrayLenght = 100;

const genDb = (names, percentages) => {
  // gen numbers array

  numbersArray = createArrayOfNumbers(1, numbersArrayLenght + 1);

  for (let i = 0; i < numbersArrayLenght; i++) {
    let randomIndex = genRandomNumber(numbersArray);
    let randomNumber = 0;
    randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);

    registers.push({
      id: i + 1,
      n_department: randomNumber,
      name: names[randomIndex],
      percentage: percentages[randomIndex],
      password: genRandomSequence(),
    });
  }

  return registers;
};

const genRandomSequence = () => {
  var val = Math.floor(1000 + Math.random() * 9000);
  return val;
};

module.exports = { genDb };
