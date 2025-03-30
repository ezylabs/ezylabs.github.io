---
title: "SQL Interview Questions Every Developer Should Know"
author: Ezy Interviews
date: 2025-03-30 14:10:00 +0800
categories: [SQL, Database]
tags: [interview, tips]
render_with_liquid: false
image: ""
---

Structured Query Language (SQL) is a must-know for any software developer, data analyst, or database administrator. Whether you’re preparing for an entry-level role or a senior database engineer position, SQL interview questions often test not just theoretical knowledge but also practical problem-solving skills. In this article, we’ll cover the most commonly asked SQL interview questions, breaking down each topic with simple explanations, relatable analogies, and real-world examples.

## **1. What is SQL, and Why is it Important?**

SQL (Structured Query Language) is used to communicate with relational databases. It allows users to create, manipulate, and retrieve data efficiently. Almost every modern application—whether a banking system, e-commerce site, or social media platform—relies on SQL to manage and process data.

Think of SQL as a language similar to English that lets you "talk" to databases. If a database is like a vast library, SQL queries are like asking a librarian for a specific book using clear instructions.

## **2. What are the Different Types of SQL Commands?**

SQL commands are categorized into five main types:

* **DDL (Data Definition Language)** – Defines the structure of the database (e.g., `CREATE`, `ALTER`, `DROP`)  
* **DML (Data Manipulation Language)** – Modifies data within tables (e.g., `INSERT`, `UPDATE`, `DELETE`)  
* **DQL (Data Query Language)** – Retrieves data (e.g., `SELECT`)  
* **DCL (Data Control Language)** – Controls access permissions (e.g., `GRANT`, `REVOKE`)  
* **TCL (Transaction Control Language)** – Manages transactions (e.g., `COMMIT`, `ROLLBACK`)

Real-life analogy: If a database is a spreadsheet, **DDL** is like defining the columns, **DML** is like editing rows, and **DQL** is like searching for data.

## **3. What is the Difference Between SQL and NoSQL?**

| Feature     | SQL (Relational) Databases                              | NoSQL (Non-relational) Databases                    |
| ----------- | ------------------------------------------------------- | --------------------------------------------------- |
| Structure   | Tables with rows & columns                              | Flexible schema (documents, key-value, graph, etc.) |
| Scalability | Vertical scaling (adding more power to a single server) | Horizontal scaling (adding more servers)            |
| Use Case    | Structured data, complex queries                        | Unstructured or semi-structured data                |

Example: If SQL is like an Excel sheet with structured rows and columns, NoSQL is like a flexible JSON document where each entry can have different fields.

## **4. What is a Primary Key and Foreign Key?**

**Primary Key**: Uniquely identifies a record in a table. Example:  
CREATE TABLE Employees (  
    EmployeeID INT PRIMARY KEY,  
    Name VARCHAR(50),  
    Age INT

* );

**Foreign Key**: A field that links two tables together. Example:  
CREATE TABLE Orders (  
    OrderID INT PRIMARY KEY,  
    EmployeeID INT,  
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)

* );

Analogy: If a **Primary Key** is a passport number (unique to one person), a **Foreign Key** is like a visa stamp linking a passport to a country’s immigration database.

**5. What is Normalization? Explain its Different Forms.**

Normalization is the process of organizing data to eliminate redundancy and improve efficiency. The normal forms are:

* **1NF (First Normal Form)**: Ensures each column contains atomic (indivisible) values.  
* **2NF (Second Normal Form)**: Removes partial dependencies (no non-key column should depend on part of a composite key).  
* **3NF (Third Normal Form)**: Removes transitive dependencies (a non-key column should not depend on another non-key column).

Example: If a student database has a column storing multiple phone numbers as `"12345, 67890"`, breaking them into separate rows achieves **1NF**.

## **6. What is an Index in SQL?**

An index is used to speed up data retrieval. Think of it as a book’s index, allowing quick lookup of topics without flipping through every page.

CREATE INDEX idx_employee_name ON Employees (Name);

Types of indexes:

* **Clustered Index**: Sorts data physically in the table (only one per table).  
* **Non-Clustered Index**: Stores pointers to data (multiple allowed per table).

## **7. What are Joins in SQL? Explain Different Types with Examples.**

Joins are used to retrieve data from multiple tables based on relationships.

* **INNER JOIN**: Returns matching records from both tables.  
* **LEFT JOIN**: Returns all records from the left table and matching ones from the right.  
* **RIGHT JOIN**: Returns all records from the right table and matching ones from the left.  
* **FULL JOIN**: Returns all records when there is a match in either table.

Example:

SELECT Employees.Name, Orders.OrderID  
FROM Employees  
INNER JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID;

## **8. What is the Difference Between DELETE, TRUNCATE, and DROP?**

* `DELETE`: Removes specific rows but retains the table structure.  
* `TRUNCATE`: Removes all rows but retains the table structure.  
* `DROP`: Deletes the entire table from the database.

Example:

DELETE FROM Employees WHERE EmployeeID = 101;  -- Deletes one row  
TRUNCATE TABLE Employees;  -- Deletes all rows  
DROP TABLE Employees;  -- Deletes the entire table

## **9. What is a Stored Procedure?**

A stored procedure is a set of SQL statements saved for reuse.

CREATE PROCEDURE GetEmployeeDetails @EmpID INT  
AS  
BEGIN  
    SELECT * FROM Employees WHERE EmployeeID = @EmpID;  
END;

To execute:

EXEC GetEmployeeDetails 101;

Benefits: Improves performance, ensures reusability, and enhances security.

## **10. Common SQL Interview Mistakes to Avoid**

* Forgetting to use **WHERE** in `DELETE` statements, leading to full table deletion.  
* Using `SELECT *` instead of specifying required columns.  
* Ignoring indexing, which can slow down queries.  
* Not handling NULL values properly, leading to unexpected results.  
* Misunderstanding `GROUP BY`, causing incorrect aggregations.

## **Conclusion**

Mastering SQL isn’t just about memorizing queries—it’s about understanding how data works in real-world applications. By practicing these interview questions and concepts, you’ll not only ace your SQL interviews but also become a more efficient developer. Keep practicing SQL queries, understand how databases function, and apply best practices to write optimized, error-free queries.

Got an upcoming SQL interview? Start solving real-world problems on platforms like LeetCode and HackerRank to sharpen your skills! 

