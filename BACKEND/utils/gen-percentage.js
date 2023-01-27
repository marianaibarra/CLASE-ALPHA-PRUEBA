const genPecentage = (total, size) => {
  let array = [];
  let sum = 0;

  for (let i = 0; i < size; i++) {
    let number = 0;
    if (i != 0) {
      number = Math.random() * (total - sum);
    } else {
      number = Math.random() * total;
    }

    array.push(number);
    sum += number;
  }
  return array;
};

module.exports = { genPecentage };
