drop table account;

create table account (
	username VARCHAR(100) PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password CHAR(64),
    salt CHAR(30),
    joined DATE,
    active BOOLEAN
);