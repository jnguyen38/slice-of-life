drop table relation;

create table relation (
    student_id INT,
    parent_id INT,
    account_username VARCHAR(100),
    foreign key(parent_id) references parent(id),
    foreign key(account_username) references account(username),
    primary key(student_id, parent_id)
);