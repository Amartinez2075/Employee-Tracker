const mysql = require('mysql');
//require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'WeedPileDriver69',
    database: 'Employee_Tracker_db'
});

module.exports = db;

