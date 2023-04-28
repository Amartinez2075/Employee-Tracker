// Package Requirements for project and also definitions and dependencies
const inquirer = require('inquirer');
const db = require('./Database/connection');
const mysql = require('mysql');

// Start server after the DB connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database is Connected');
  Employee_Tracker();
});

function Employee_Tracker() {
  inquirer
    .prompt([
      {
        // Beginning of Command Line
        type: 'list',
        name: 'prompt',
        message: 'Hello user! What would you like to do?',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a New Department',
          'Add a New Role',
          'Add a New Employee',
          'Update an Existing Employee Role',
          'Update an Existing Department',
          'Log Out',
        ], // Might add other elements later
      },
    ])
    .then((answers) => {
      // Should View the Department Table in the Database
      if (answers.prompt === 'View All Departments') {
        db.query(`SELECT * FROM department`, (err, result) => {
          if (err) throw err;
          console.log('Viewing All Departments: ');
          console.table(result);
          Employee_Tracker();
        });
      }
      // Should view all roles Table in the Database
      else if (answers.prompt === 'View All Roles') {
        db.query(`SELECT * FROM role`, (err, result) => {
          if (err) throw err;
          console.log('Viewing All Roles: ');
          console.table(result);
          Employee_Tracker();
        });
      }
      // Should view all employees in the Database
      else if (answers.prompt === 'View All Employees') {
        db.query(`SELECT * FROM employee`, (err, result) => {
          if (err) throw err;
          console.log('Viewing All Employees: ');
          console.table(result);
          Employee_Tracker();
        });
      }
      // Should View Add a New Department in the DataBase
      else if (answers.prompt === 'Add a New Department') {
        db.query(`SELECT * FROM department`, (err, result) => {
          if (err) throw err;
          console.log('Add a New Department');
          console.table(result);
          Employee_Tracker();
        });
      }
// WILL NEED TO ADD CODE FOR ADDING A DEPARTMENT NAME

      // Should View Add a New Role in the DataBase
      else if (answers.prompt === 'Add a New Role') {
        db.query(`SELECT * FROM role`, (err, result) => {
          if (err) throw err;
          console.log('Add a New Role');
          console.table(result);
          Employee_Tracker();
        });
      }

// WILL NEED TO ADD CODE FOR ADDING A NEW ROLE
      // Should View Add a New Employee in the DataBase
      else if (answers.prompt === 'Add a New Employee') {
        db.query(`SELECT * FROM employee`, (err, result) => {
          if (err) throw err;
          console.log('Add a New Employee');
          console.table(result);
          Employee_Tracker();
        });
      }
// WILL NEED TO ADD CODE FOR ADDING A EMPLOYEE
      // Should View Update an Existing Employee Role in the DataBase
      else if (answers.prompt === 'Update an Existing Employee Role') {
        db.query(`SELECT * FROM update an existing employee role`, (err, result) => {
          if (err) throw err;
          console.log('Update an Existing Employee Role');
          console.table(result);
          Employee_Tracker();
        });
      }
      // Should View Update an Existing Department in the DataBase
      else if (answers.prompt === 'Update an Existing Department') {
        db.query(`SELECT * FROM update an existing department`, (err, result) => {
          if (err) throw err;
          console.log('Update an Existing Department');
          console.table(result);
          Employee_Tracker();
        });
      }
      // Should let the User be able to log out.
      else if (answers.prompt === 'Log Out') {
        console.log('Logging Out');
       }})}; // Add code to handle logging out
