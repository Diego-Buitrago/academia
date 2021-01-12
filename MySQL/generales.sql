-- mysql -h localhost -u root -p
show databases; -- nos permite visualizar las bases de datos en MySQL
SHOW tables;
USE academia;
CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'tu_contrasena’;
select user, password from user;
GRANT ALL privileges ON `academia`.* TO '19901989'@localhost;