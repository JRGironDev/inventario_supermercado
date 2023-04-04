-- Ingreso de datos en tabla empleados
INSERT INTO `supermercado_tds`.`empleados` (`id_empleado`, `nombre`, `contraseña`, `fecha_nacimiento`, `identificacion`) VALUES ('52356363', 'José Angel', '$2b$10$/vJ.Pn6jIkN6h0o/alR33up.jTPra5ZE4ZORP3gKsdo4HiIW9oSKO', '1988-05-24', '1682261980101');
INSERT INTO `supermercado_tds`.`empleados` (`id_empleado`, `nombre`, `contraseña`, `fecha_nacimiento`, `identificacion`) VALUES ('84075446', 'Ariana Isabella', '$2b$10$lq7RjX64JX1pelvLNDyBHul6jMMtPk6je1hLO.8gFog238MuBfqgu', '2019-11-16', '1692171950101');

-- Ingreso de datos en tabla productos
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('C001', 'Pollo fresco', 'Carne de pollo fresca sin hueso de 1 libra', 'Carnes y Pescado', '28.00', 'lb', 'img/Pollo-fresco.jpg', '0', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('F001', 'Manzana Fuji', 'Fruta fresca, de sabor dulce y crujiente', 'Frutas y verduras', '5.20', 'unidad', 'img/manzana-fuji.webp', '100', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('F002', 'Lechuga Romana', 'Lechuga fresca y verde', 'Frutas y verduras', '5.20', 'unidad', 'img/lechuga-romana.jpg', '50', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('L001', 'Yogur natural', 'Yogur natural sin azúcar añadida', 'Lacteos y huevos', '25.00', 'unidad', 'img/yogur-natural.webp', '50', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('L002', 'Huevos blancos', 'Docena de huevos blancos frescos', 'Lacteos y huevos', '42.00', 'docena', 'img/huevos-blancos.jpg', '60', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('C002', 'Puyazo primium', 'Libra de puyazo', 'Carnes y Pescado', '52.10', 'lb', 'img/puyazo.jpg', '20', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('B001', 'Coca Cola 2L', 'Coca Cola en presentación de dos litros', 'Bebidas', '18.10', 'unidad', 'img/coca-cola.jpg', '0', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('B002', 'Cerveza Gallo 350 ml', 'Cerveza Gallo en presentación de 350 ml', 'Bebidas', '6.10', 'unidad', 'img/cerveza-gallo.jpg', '150', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('CE001', 'Cereal Choco Krispy', 'Cereal Choco Krispy extra dulce', 'Cereales', '31.50', 'unidad', 'img/cereal-choco.jpg', '40', 0);
INSERT INTO `supermercado_tds`.`productos` (`id_producto`, `nombre_producto`, `descripcion`, `categoria`, `precio`, `unidad_medida`, `imagen`, `existencia_inventario`, `total`) VALUES ('CE002', 'Cereal Special K de fresa', 'Cereal Special K con trozos de fresas', 'Cereales', '42.20', 'unidad', 'img/cereal-special.jpg', '0', 0);

-- Ingreso de datos en tabla proveedores
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Terminal', 'José Perez', 'Carnes y Pescado', '47 av. 4-52 Zona 1', '36854745', 'laterminal@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('La Barata', 'Miriam Chali', 'Frutas y verduras', 'Lote 59 Zona 4', '34554745', 'labarata@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Los Chinos', 'Luis Miguel', 'Cereales', '5 av Zona 11', '36858545', 'loschinos@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Nestlé S.A', 'Juan Manuel', 'Lacteos y huevos', '4 av Zona 1', '39654745', 'nestle@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Cervecería S.A', 'Luis Francisco', 'Bebidas', '10 av Zona 3', '34555485', 'cerveceria@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Yoplait', 'Ariana Isabella', 'Lacteos y huevos', '5 av 4 calle zona 1', '31815697', 'yoplait@gmail.com');
INSERT INTO `supermercado_tds`.`proveedores` (`nombre_empresa`, `nombre_contacto`, `categoria`, `direccion`, `telefono`, `email`) VALUES ('Capistrano', 'Cristel Castro', 'Carnes y Pescado', '2 av zona 8', '36812075', 'capistrano@gmail.com');

-- Ingreso de datos en tabla total_pedidos
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('C001');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('C002');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('F001');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('F002');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('L001');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('L002');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('B001');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('B002');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('CE001');
INSERT INTO `supermercado_tds`.`total_pedidos` (`id_producto`) VALUES ('CE002');

