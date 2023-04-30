# Employee-Tracker

## Required Programs
### GitHub, MySQL12, Inquirer, NPM

## Description: This application is a command-line based application that allows the user to track departments, roles, and employees. It also allows the user to add new Employees, new Roles, and a new Department. You have to run the applicaiton by going into the command line and type the following.

```
node index.js
```

## Installation
***Requirments***

[MySQL](https://www.npmjs.com/package/mysql2) | [Inquirer](https://www.npmjs.com/package/inquirer) | [NPM](https://docs.npmjs.com/cli/v8/commands/npm-install)

***Once Installed:***
1. Clone the Repository on to your machine.
2. Open the terminal and ensure you are in the right file path.
3. Run the command ```npm install``` to download the packages.
4. Then run the command ```node index.js``` to run the software.
5. The command prompt will begin on your terminal

## User Story 
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
