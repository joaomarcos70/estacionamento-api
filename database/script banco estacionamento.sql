CREATE DATABASE IF NOT EXISTS parking;

USE parking;

-- DROP TABLE IF EXISTS establishment;

CREATE TABLE IF NOT EXISTS address (
id int auto_increment not null,
street varchar(50) not null,
state varchar(20) not null,

primary key(id)
);

CREATE TABLE IF NOT EXISTS establishment (
id int auto_increment not null,
firstName varchar(30) not null,
cnpj varchar(20) not null,
addressesID int, 
numberPhone varchar(12) not null,
motorcycleVacancy int not null,
carVacancy int not null,

primary key(id),
foreign key(addressesID) references address(id)
);

SELECT * FROM establishment

