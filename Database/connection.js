const mysql = require('mysql'); // Importing the 'mysql' module

// Creating a database connection configuration
const db = mysql.createConnection({
    host: 'localhost', // MySQL host
    user: 'root', // MySQL username
    password: 'Xx_cccnj456', // MySQL password
    database: 'Employee_Tracker_db' // Name of the database
});

module.exports = db; // Exporting the database connection configuration for external use
