// Package Requirements for project and also definitions and dependencies
const inquirer = require('inquirer');
const db = require('Database\connections.js')

// Start server after the DB connection 
db.connect(err => {
    if (err) throw err;
    console.log('Database is Connected');
    Employee_Tracker();
});

var Employee_Tracker = function () {
    inquirer.prompt([{
        //Beginning of Command Line
        type: 'list',
        name: 'prompt',
        message: 'Hello user! What would you like to do?',
        choices:['View all Departments', 'View All Roles', 'View All Employees', 
        'Add a new Department', 'Add a new Role','Add an new Employee', 'Update an existing Employee Role', 'Log Out'] //Might add Other elements later

    }])
}