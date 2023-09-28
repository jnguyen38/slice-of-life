drop table student;

create table student (
	id INT PRIMARY KEY auto_increment,
    relation_id INT NOT NULL,
	name VARCHAR(50) NOT NULL,
    birthday date NOT NULL,
    joined date NOT NULL,
    emergency INT NOT NULL,
    grade VARCHAR(20) NOT NULL,
    school VARCHAR(50) NOT NULL,
    allergies VARCHAR(100) NOT NULL
);