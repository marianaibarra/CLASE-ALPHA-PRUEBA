const { genDb } = require("./utils/gen-db");
const { writeDb } = require("./utils/write-db");
const fetch = require("node-fetch");
const { genPecentage } = require("./utils/gen-percentage");

let names = [];
let registers = {};
let percentages = [];
let numbersArrayLenght = 100;
let totalPercentage = 100;

const generateNames = async () => {
  await fetch("https://www.randomlists.com/data/names-female.json")
    .then((response) => response.json())
    .then((json) => {
      names = json;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      generateJson();
    });
};

generateNames();

const generateJson = () => {
  percentages = genPecentage(totalPercentage, numbersArrayLenght);
  registers = genDb(names.data, percentages, numbersArrayLenght);
  console.log(registers);

  writeDb(registers);
};
