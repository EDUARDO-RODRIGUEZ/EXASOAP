const { Client } = require("pg");

class DB {

    constructor() {

    }

    getConnection() {
        let conexion = null;
        try {
            conexion = new Client({
                host: 'localhost',
                user: 'postgres',
                password: 'eduardo',
                database: 'practicaarqui'
            })
        } catch (error) {
            console.log("Error en la conexion DB: " + error);
        }
        return conexion;
    }
}

module.exports = DB;