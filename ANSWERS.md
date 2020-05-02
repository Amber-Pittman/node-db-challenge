## Self-Study/Essay Questions


#### [X] Explain the difference between `Relational Databases` and `SQL`.

Relational Databases are spreadsheets on steroids. 
* Give names and data types to columns

* Each row has a unique identifier (or primary key)

* Columns can "link" to other columns in separate tables (foreign keys)

SQL is just a statement that allows us to query data from our database. SQL acts like a search function.



#### [X] Why do tables need a `primary key`?

It's acts as a beacon on the table for foreign keys to point to when communicating between the tables.


#### [X] What is the name given to a table column that references the primary key on another table.

Foreign key


#### [X] What do we need in order to have a _many to many_ relationship between two tables.

 Table A can link to many rows in Table B AND Table B can link to many rows in Table C. The third table is usually called an intermediary table, a join table, or a go-between table whose only purpose is to hold the foreign key references for other tables. 
