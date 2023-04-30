// Package Requirements
const inquirer = require('inquirer');
const db = require('./Database/connection');

// Start server after the DB connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database is Connected');
  Employee_Tracker();
});

// Function to handle the Employee Tracker application
function Employee_Tracker() {
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
          'Update an Existing Department',
          'Log Out',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
        case 'View All Departments':
          viewDepartments();
          break;
        case 'View All Roles':
          viewRoles();
          break;
        case 'View All Employees':
          viewEmployees();
          break;
        case 'Add a New Department':
          addDepartment();
          break;
        case 'Add a New Role':
          addRole();
          break;
        case 'Add a New Employee':
          addEmployee();
          break;
        case 'Update an Existing Employee Role':
          updateEmployeeRole();
          break;
        case 'Update an Existing Department':
          updateDepartment();
          break;
        case 'Log Out':
          console.log('Logging Out');
          break;
        default:
          console.log('Invalid choice');
          Employee_Tracker();
          break;
      }
    });
}

// Function to view all departments
function viewDepartments() {
  db.query('SELECT * FROM department', (err, result) => {
    if (err) throw err;
    console.log('Viewing All Departments: ');
    console.table(result);
    Employee_Tracker();
  });
}

// Function to view all roles
function viewRoles() {
  db.query('SELECT * FROM role', (err, result) => {
    if (err) throw err;
    console.log('Viewing All Roles: ');
    console.table(result);
    Employee_Tracker();
  });
}

// Function to view all employees
function viewEmployees() {
  db.query('SELECT * FROM employee', (err, result) => {
    if (err) throw err;
    console.log('Viewing All Employees: ');
    console.table(result);
    Employee_Tracker();
  });
}

// Function to add a new department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?',
        validate: (departmentInput) => {
          return departmentInput.trim() !== '';
        },
      },
    ])
    .then((answers) => {
      db.query(
        'INSERT INTO department (name) VALUES (?)',
        [answers.department],
        (err, result) => {
          if (err) throw err;
          console.log(`Added ${answers.department} to the database.`);
          Employee_Tracker();
        }
      );
    });
}

// Function to add a new role
function addRole() {
  db.query('SELECT * FROM department', (err, result) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'role',
          message: 'What is the name of the role?',
          validate: (roleInput) => {
            return role

            employee = result.find((employee) => employee.last_name === answers.employee);
            const role = result.find((employee) => employee.title === answers.role);
            db.query(
              'UPDATE employee SET ? WHERE ?',
              [{ role_id: role.id }, { last_name: employee.last_name }],
              (err, result) => {
                if (err) throw err;
                console.log(`Updated ${answers.employee}'s role in the database.`);
                Employee_Tracker();
              }
            );
          }}]);
        });
      }
      
      // Function to update an existing department
      function updateDepartment() {
      db.query('SELECT * FROM department', (err, result) => {
      if (err) throw err;
      console.log('Update an Existing Department');
      console.table(result);
      Employee_Tracker();
      });
      }
      
      // Function to handle the main menu options
      function handleMainMenuChoice(choice) {
      switch (choice) {
      case 'View All Departments':
      viewAllDepartments();
      break;
      case 'View All Roles':
      viewAllRoles();
      break;
      case 'View All Employees':
      viewAllEmployees();
      break;
      case 'Add a New Department':
      addDepartment();
      break;
      case 'Add a New Role':
      addRole();
      break;
      case 'Add a New Employee':
      addEmployee();
      break;
      case 'Update an Existing Employee Role':
      updateEmployeeRole();
      break;
      case 'Update an Existing Department':
      updateDepartment();
      break;
      case 'Log Out':
      console.log('Logging Out');
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
      'Update an Existing Department',
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