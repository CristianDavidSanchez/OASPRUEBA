CREATE DATABASE ng_equipos_db;

USE ng_equipos_db;

CREATE TABLE equipos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Posicion INT (10),
    Equipo   VARCHAR(32),
    Puntos   INT(20)
);

DESCRIBE equipos;

