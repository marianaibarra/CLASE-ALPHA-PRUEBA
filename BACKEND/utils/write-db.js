const fs = require("fs");

const writeDb = (registers) => {
  let data = `{ "users": `;

  data += JSON.stringify(registers, null, 2);

  data += "}";

  fs.writeFile("db.json", data, (err) => {
    if (err) throw err;
    console.log("Database initialized");
  });
};

module.exports = { writeDb };
