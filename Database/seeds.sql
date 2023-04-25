-- Inserts names of departments into a department table

INSERT INTO department
    (name)
VALUES
    ('Accounting'), --1 
    ('Utility'), --2
    ('Sales'), --3
    ('Information Technology'); --4

-- Inserts roles of employee into role table 

INSERT INTO role
    (Title, Salary, department_id)
VALUES
    --Accounting Department Roles -1
    ('Data Entry', 65000, 1),
    ('Accountant', 85000, 1),
    ('Bookkeeper', 50000, 1),
    ('Auditor', 60232, 1),
    ('Senior Accountant', 100000, 1),

    --Utility Department Roles -2
    ('Janitor', 32000, 2),
    ('RepairPerson', 45000, 2),
    ('Electrician', 50000, 2),
    ('Plumber', 48000, 2),

    --Sales Department Roles -3
    ('Sales Associate', 35000, 3),
    ('Junior Sales Associate', 40000, 3),
    ('Senior Sales Associate', 55000, 3),
    ('Assistant Manager', 45000, 3),
    ('Location Manager', 60000, 3),

    -- Information Technology Department Roles - 4
    ('Junior IT Associate', 50000, 4),
    ('Senior IT Associate', 70000, 4),
    ('CyberSecurity Expert', 95000, 4),
    ('FullStack Website Developer', 57000, 4);
