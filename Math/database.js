class Database {
    constructor() {
      this.data = [];
    }
  
    addData(value) {
      this.data.push(value);
    }
  
    getData() {
      return this.data;
    }
  }
  
  module.exports = Database;
  