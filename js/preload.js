const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("comunicacion", {
  inicioUsuario: (usuario) => ipcRenderer.send("inicio-sesion", usuario),
  bienvenidoUsuario: (canal, callback) =>
    ipcRenderer.on("bienvenido-usuario", callback),
});

contextBridge.exposeInMainWorld("comunicacion2", {
  edicionProducto: (infoProducto) =>
    ipcRenderer.send("edicion-producto", infoProducto),
  edicion: (canal, callback) => ipcRenderer.on("edicion", callback),
});

contextBridge.exposeInMainWorld("comunicacion3", {
  peticionProducto: (infoProducto) =>
    ipcRenderer.send("peticion-producto", infoProducto),
  peticion: (canal, callback) => ipcRenderer.on("peticion", callback),
});
