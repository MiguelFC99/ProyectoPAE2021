const Database = require("./database");



class Flights extends Database {
    constructor(){
        super();
        this.useCollection('flights');
    }
}

module.exports = new Flights();