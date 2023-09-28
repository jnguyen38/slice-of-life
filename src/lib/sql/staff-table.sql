drop table staff;

create table staff (
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(50) NOT NULL,
    year VARCHAR(15) NOT NULL,
    bio TINYTEXT,
    verified BOOL NOT NULL,
    pic_path VARCHAR(100) NOT NULL,
    city VARCHAR(30),
    state VARCHAR(20) NOT NULL,
    joined date NOT NULL,
    retired date
);