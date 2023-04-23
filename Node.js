// Package Requirements for project and also definitions and dependencies
const inquirer = require('inquirer');
const db = require('Database\connections.js')

// Start server after the DB connection 
db.connect(err => {
    if (err) throw err;
    console.log('Database is Connected');
    Employee_Tracker();
});