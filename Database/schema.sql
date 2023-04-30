-- Table to store departments
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for the department
    name VARCHAR(30) -- Name of the department
);

-- Table to store roles
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for the role
    title VARCHAR(30), -- Title of the role
    salary DECIMAL, -- Salary associated with the role
    department_id INTEGER -- Foreign key referencing the department the role belongs to
);

-- Table to store employees
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for the employee
    first_name VARCHAR(30) NOT NULL, -- First name of the employee
    last_name VARCHAR(30) NOT NULL, -- Last name of the employee
    role_id INTEGER, -- Foreign key referencing the role of the employee
    manager_id INTEGER -- Foreign key referencing the manager of the employee
);
