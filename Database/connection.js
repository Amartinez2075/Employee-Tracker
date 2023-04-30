const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD, // Access the password from the environment variable
    database: 'Employee_Tracker_db'
});

module.exports = db;
