DROP DATABASE academia; -- iliminar base de datos
CREATE DATABASE academia; -- crear base de datos
SHOW DATABASES;
CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'tu_contrasena’;
select user, password from user;
GRANT ALL privileges ON `academia`.* TO '19901989'@localhost;