// gen random
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

function createArrayOfNumbers(start, end) {
  let myArray = [];

  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }

  return myArray;
}

const genRandomNumber = (array) => {
  let randomIndex = getRandomNumber(0, array.length - 1);

  return randomIndex;
};

module.exports = {
  createArrayOfNumbers,
  genRandomNumber,
};
