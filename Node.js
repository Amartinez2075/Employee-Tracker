// Package Requirements for project and also definitions and dependencies
const inquirer = require('inquirer');
const db = require('.\Database\connections.js');

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
        'Add a New Department', 'Add a New Role','Add an New Employee', 'Update an Existing Employee Role', 'Log Out'] //Might add Other elements later
    }]).then((answers) => {
        //Should View the Department Table in the Database
        if (answers.prompt ==='View All Department') {
            db.query(`Select * FROM department`,(err,result) => {
                if (err) throw err;
                console.log ("Viewing All Department: ");
                console.table(result);
                Employee_Tracker();
            });
        // Should view all roles 
        } else if (answers.prompt === 'View All Roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Roles: ");
                console.table(result);
                Employee_Tracker();
            });
        // Should view all employees
        } else if (answers.prompt === 'View All Employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Employees: ");
                console.table(result);
                Employee_Tracker()();
            });
        }
    });
};
