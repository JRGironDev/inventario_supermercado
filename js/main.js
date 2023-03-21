const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("path");

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
  createWindow2();

  productos.webContents.on("did-finish-load", () => {
    productos.webContents.send("bienvenido-usuario", args);
  });
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

ipcMain.on("peticion-producto", (event, args) => {
  createWindow4();

  pedido.webContents.on("did-finish-load", () => {
    pedido.webContents.send("peticion", args);
  });
});
