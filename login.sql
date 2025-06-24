CREATE DATABASE tienda;
USE tienda;
CREATE TABLE compras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100), direccion VARCHAR(200),
  telefono VARCHAR(20), email VARCHAR(100),
  tarjeta VARCHAR(20), total DECIMAL(10,2),
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);
