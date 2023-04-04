create database IF NOT EXISTS supermercado_TDS;

use supermercado_TDS;

CREATE TABLE IF NOT EXISTS empleados (
  id_empleado INT NOT NULL UNIQUE,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  identificacion BIGINT NOT NULL UNIQUE,  
  PRIMARY KEY (id_empleado)
);

CREATE TABLE IF NOT EXISTS proveedores(
  id_proveedor INT NOT NULL AUTO_INCREMENT,
  nombre_empresa VARCHAR(100) NOT NULL,
  nombre_contacto VARCHAR(100) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_proveedor)
);

CREATE TABLE IF NOT EXISTS productos (
 id_producto VARCHAR(20) NOT NULL,
 nombre_producto VARCHAR(100) NOT NULL,
 descripcion VARCHAR(255),
 categoria VARCHAR(50) NOT NULL,
 precio DECIMAL (7,2) NOT NULL,
 unidad_medida VARCHAR(20) NOT NULL,
 imagen VARCHAR(255),
 existencia_inventario INT NOT NULL,
 total INT,
 PRIMARY KEY (id_producto)
);

CREATE TABLE IF NOT EXISTS pedidos (
  id_pedido INT NOT NULL AUTO_INCREMENT,
  id_producto VARCHAR(20) NOT NULL,
  id_proveedor INT NOT NULL,
  cantidad INT NOT NULL,
  fecha_pedido VARCHAR(15) NOT NULL,
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
  FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor)
);

CREATE TABLE IF NOT EXISTS total_pedidos (
 id_total INT NOT NULL AUTO_INCREMENT,
 id_producto VARCHAR(20) NOT NULL,
 total INT,
 PRIMARY KEY (id_total),
 FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

SET GLOBAL event_scheduler = ON;

DROP EVENT IF exists actualiza_total_por_producto;
CREATE EVENT actualiza_total_por_producto
ON SCHEDULE
EVERY 1 SECOND
STARTS CURRENT_TIMESTAMP
ON COMPLETION PRESERVE
DO
UPDATE total_pedidos
SET total = (SELECT SUM(cantidad) FROM pedidos WHERE pedidos.id_producto = total_pedidos.id_producto)
WHERE EXISTS (SELECT * FROM pedidos WHERE pedidos.id_producto = total_pedidos.id_producto);

DROP EVENT IF exists actualiza_total_producto;
CREATE EVENT actualiza_total_producto
ON SCHEDULE
EVERY 1 SECOND
STARTS CURRENT_TIMESTAMP
ON COMPLETION PRESERVE
DO
UPDATE productos
SET total = (SELECT total FROM total_pedidos WHERE total_pedidos.id_producto = productos.id_producto)
WHERE EXISTS (SELECT * FROM total_pedidos WHERE total_pedidos.id_producto = productos.id_producto);



