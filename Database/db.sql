// Code to create and use the database
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

// Function to handle the main menu options
function handleMainMenuChoice(choice) {
  switch (choice) {
    case 'View All Departments':
      // View the Department Table in the Database
      db.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.log('Viewing All Departments: ');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'View All Roles':
      // View all roles
      db.query('SELECT * FROM role', (err, result) => {
        if (err) throw err;
        console.log('Viewing All Roles: ');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'View All Employees':
      // View all employees
      db.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.log('Viewing All Employees: ');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'Add a New Department':
      // Add a new department
      db.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.log('Add a New Department');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'Add a New Role':
      // Add a new role
      db.query('SELECT * FROM role', (err, result) => {
        if (err) throw err;
        console.log('Add a New Role');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'Add a New Employee':
      // Add a new employee
      db.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.log('Add a New Employee');
        console.table(result);
        Employee_Tracker();
      });
      break;
    case 'Update an Existing Employee Role':
      // Update an existing employee role
      db.query('SELECT * FROM update an existing employee role', (err, result) => {
        if (err) throw err;
        console.log('Update an Existing Employee Role');
        console.table(result);
        Employee_Tracker();
      });
      break;
    default:
      console.log('Invalid choice. Please try again.');
      Employee_Tracker();
      break;
  }
}

// Function to start the Employee Tracker application
function startEmployeeTracker() {
  console.log('Hello user! What would you like to do?');
  inquirer
    .prompt([
      {
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
          'Log Out',
        ],
      },
    ])
    .then((answers) => {
      handleMainMenuChoice(answers.prompt);
    });
}

// Start server after the DB connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database is Connected');
  startEmployeeTracker();
});
