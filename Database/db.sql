DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;





        }]).then((answers) => {
        // Should View the Department Table in the Database
            if (answers.prompt === 'View All Departments') {
             db.query(`SELECT * FROM department`, (err, result) => {
            if (err) throw err;
            console.log("Viewing All Departments: ");
            console.table(result);
            Employee_Tracker();
             });
            };
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
                Employee_Tracker();
            });
        } else if (answers.prompt === 'Add a New Department') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                console.log("Add a New Department")
                console.table(result);
                Employee_Tracker();
            });
        } else if (answers.prompt === 'Add a New Role') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) throw err;
                console.log("Add a New Role")
                console.table(result);
                Employee_Tracker();
            });
        } else if (answers.prompt === 'Add a New Employee') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) throw err;
                console.log("Add a New Employee")
                console.table(result);
                Employee_Tracker();
            });
        } else if (answers.prompt === 'Update an Existing Employee Role') {
            db.query(`SELECT * FROM update an existing employee role`, (err, result) => {
                if (err) throw err;
                console.log("update an existing employee role")
                console.table(result);
                Employee_Tracker();
            });
        })};