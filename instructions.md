## User Story 

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

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

## Better Description of what to do 

This is a description of what a command-line application does. It allows a user to interact with a database by selecting options from a menu. The options include viewing information about departments, roles, and employees, adding new departments, roles, and employees to the database, and updating employee roles.

When a user chooses to view information about a department, a table is displayed showing the department names and their unique ids. When a user chooses to view information about roles, a table is displayed showing the job title, role id, department, and salary. When a user chooses to view information about employees, a table is displayed showing their id, first name, last name, job title, department, salary, and manager.

When a user chooses to add a department, they are prompted to enter the department's name, and it is added to the database. When a user chooses to add a role, they are prompted to enter the role's name, salary, and department, and it is added to the database. When a user chooses to add an employee, they are prompted to enter the employee's first name, last name, role, and manager, and the employee is added to the database.

Finally, when a user chooses to update an employee's role, they are prompted to select the employee to update and the new role, and this information is updated in the database.


## Running Node.js with MYSQL

make sure the your in the following directory

PS C:\Users\Ashar\bootcamp\Module Challenges\Employee Tracker>

You can do this by right clicking on Node.js and clicking 

Open in intergrated terminal
