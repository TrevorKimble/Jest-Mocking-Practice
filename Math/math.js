const Database = require('./database');
const db = new Database();

const add = (a, b) => {
  const result = a + b;
  db.addData(result);
  return result;
};

module.exports = { add, db }; // Exporting the db instance along with the add function