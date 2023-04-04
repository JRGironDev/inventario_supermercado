const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

/**
 * Crear la conexión
 */
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "supermercado_TDS",
});

let ventana;

function createWindow() {
  ventana = new BrowserWindow({
    width: 1000,
    height: 1300,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(app.getAppPath(), "js/preload.js"),
    },
  });
  ventana.loadFile("index.html");
}

app.whenReady().then(createWindow);

let productos;

function createWindow2() {
  productos = new BrowserWindow({
    width: 1400,
    height: 1300,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(app.getAppPath(), "js/preload.js"),
    },
  });

  productos.loadFile("productos.html");
}

ipcMain.on("inicio-sesion", (event, args) => {
  conexion
    .promise()
    .execute("SELECT * FROM empleados WHERE id_empleado = ?", [args[0]])
    .then(([results, fields]) => {
      if (results.length > 0) {
        /*  Método para obtener el hash de una contraseña
        bcrypt.hash(args[1], 10).then(function (hash) {
          console.log(args[1] + " " + hash);
        });*/
        bcrypt.compare(args[1], results[0].contraseña, function (err, result) {
          if (result) {
            createWindow2();
            productos.webContents.on("did-finish-load", () => {
              productos.webContents.send("bienvenido-usuario", args);
            });
            ventana.close();
          } else {
            ventana.webContents.send(
              "contraseña-invalida",
              "Contraseña no es válida"
            );
          }
        });
      } else {
        ventana.webContents.send("usuario-invalido", "Usuario no es válido");
      }
    })
    .catch((err) => console.log(err));
});

ipcMain.on("queryProductos", function (event, args) {
  conexion
    .promise()
    .execute("SELECT * FROM productos")
    .then(([results, fields]) => {
      if (results.length > 0) {
        productos.webContents.send("result-Productos", results);
      }
    })
    .catch((err) => console.log(err));
});

let producto;

function createWindow3() {
  producto = new BrowserWindow({
    width: 1000,
    height: 1300,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(app.getAppPath(), "js/preload.js"),
    },
  });
  producto.loadFile("edicion.html");
}

ipcMain.on("edicion-producto", (event, args) => {
  createWindow3();
  producto.webContents.on("did-finish-load", () => {
    producto.webContents.send("edicion", args);
  });
});

ipcMain.on("queryProducto", function (event, args) {
  conexion
    .promise()
    .execute("SELECT * FROM productos WHERE id_producto = ?", args)
    .then(([results, fields]) => {
      if (results.length > 0) {
        producto.webContents.send("result-Producto", [
          results[0].nombre_producto,
          results[0].descripcion,
          results[0].categoria,
          results[0].existencia_inventario,
        ]);
      }
    })
    .catch((err) => console.log(err));
});

ipcMain.on("actualizacion-producto", (event, args) => {
  conexion
    .promise()
    .execute(
      "UPDATE productos SET nombre_producto = ?, descripcion = ?, categoria = ?, existencia_inventario = ? WHERE id_producto = ?",
      [args[0], args[1], args[2], args[3], args[4]]
    )
    .then(() => {
      productos.reload();
      producto.close();
    })
    .catch((err) => console.log(err));
});

let pedido;

function createWindow4() {
  pedido = new BrowserWindow({
    width: 1000,
    height: 1300,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(app.getAppPath(), "js/preload.js"),
    },
  });

  pedido.loadFile("pedidos.html");
}

ipcMain.on("reload", function (event, args) {
  producto.reload();
});

ipcMain.on("peticion-producto", (event, args) => {
  createWindow4();
  pedido.webContents.on("did-finish-load", () => {
    pedido.webContents.send("peticion", args);
  });
});

ipcMain.on("queryPedidoProducto", function (event, args) {
  conexion
    .promise()
    .execute("SELECT * FROM productos WHERE id_producto = ?", args)
    .then(([results, fields]) => {
      if (results.length > 0) {
        pedido.webContents.send("result-Producto", [
          results[0].nombre_producto,
          results[0].existencia_inventario,
        ]);
      }
    })
    .catch((err) => console.log(err));
});

ipcMain.on("generacion-pedido", (event, args) => {
  conexion
    .promise()
    .execute(
      "INSERT INTO pedidos(id_producto, id_proveedor, cantidad, fecha_pedido) values(?, ?, ?, ?)",
      args
    )
    .then(() => {
      productos.reload();
    })
    .catch((err) => console.log(err));
});

ipcMain.on("queryPedidoIgual", function (event, args) {
  conexion
    .promise()
    .execute(
      "SELECT * FROM pedidos WHERE id_producto = ? AND id_proveedor = ?",
      args
    )
    .then(([results, fields]) => {
      if (results.length > 0) {
        pedido.webContents.send(
          "pedido-invalido",
          "Ya existe un pedido realizado por el producto y proveedor seleccionados"
        );
      } else {
        pedido.webContents.send("pedido-ok", args);
      }
    })
    .catch((err) => console.log(err));
});

ipcMain.on("queryPedidoIgualProducto", function (event, args) {
  conexion
    .promise()
    .execute("SELECT * FROM pedidos WHERE id_producto = ?", args)
    .then(([results, fields]) => {
      if (results.length > 0) {
        pedido.webContents.send(
          "pedido-alerta",
          "Ya existe un pedido realizado por este producto, igualmente éste fue generado al nuevo proveedor"
        );
        pedido.webContents.send("pedido-ok-ok", args);
      } else {
        pedido.webContents.send("pedido-ok-ok", args);
      }
    })
    .catch((err) => console.log(err));
});
