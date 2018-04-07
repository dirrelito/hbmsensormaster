const sqlite3 = require('sqlite3').verbose();
const fs = require('fs')

const DB_NAME = "hbmSensors.db"
const TABLE_NAME = "temperaturelogs"
const FIELD_SENSOR_MESSAGE = "sensorMessage"

const createDB = (callback) => {
    if(fs.existsSync(DB_NAME)) {
        throw `DB file ${DB_NAME} already exists. Please delete it and try again.`
    } else {
        const db = new sqlite3.Database(DB_NAME);
        db.run(`CREATE TABLE ${TABLE_NAME}(${FIELD_SENSOR_MESSAGE} JSON)`)
          .close(callback);
    }
}

const postOneRow = (jsonObj, callback) => {
    const db = new sqlite3.Database(DB_NAME);
    db.run(`INSERT INTO ${TABLE_NAME} VALUES (?)`,JSON.stringify(jsonObj))
        .close(callback);
}

const readAllRows = (callback) => {
    const db = new sqlite3.Database(DB_NAME);
    const data = []
    db.each(`SELECT * FROM ${TABLE_NAME}`, function(err, row) {
        data.push(JSON.parse(row[FIELD_SENSOR_MESSAGE]))
    }).close(() => callback(data));
}   

module.exports = {
    createDB,
    postOneRow,
    readAllRows,
    DB_NAME
}