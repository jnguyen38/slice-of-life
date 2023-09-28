drop table parent;

create table parent (
	id INT PRIMARY KEY auto_increment,
    relation_id INT NOT NULL,
    title VARCHAR(5) NOT NULL,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(15) NOT NULL,
    zipcode INT NOT NULL
);