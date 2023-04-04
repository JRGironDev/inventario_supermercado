const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("comunicacion", {
  inicioUsuario: (datos) => ipcRenderer.send("inicio-sesion", datos),
  bienvenidoUsuario: (canal, callback) =>
    ipcRenderer.on("bienvenido-usuario", callback),
  usuarioInvalido: (callback) => ipcRenderer.on("usuario-invalido", callback),
  contraseñaInvalida: (callback) =>
    ipcRenderer.on("contraseña-invalida", callback),
  queryProductos: () => ipcRenderer.send("queryProductos"),
  cargaProductos: (productos) => ipcRenderer.send("carga-productos", productos),
  resultProductos: (canal, callback) =>
    ipcRenderer.on("result-Productos", callback),
  edicionProducto: (idProducto) =>
    ipcRenderer.send("edicion-producto", idProducto),
  edicion: (canal, callback) => ipcRenderer.on("edicion", callback),
  reload: () => ipcRenderer.send("reload"),
  queryProducto: (query) => ipcRenderer.send("queryProducto", query),
  resultProducto: (canal, callback) =>
    ipcRenderer.on("result-Producto", callback),
  actualizacionProducto: (datos) =>
    ipcRenderer.send("actualizacion-producto", datos),
  peticionProducto: (idProducto) =>
    ipcRenderer.send("peticion-producto", idProducto),
  peticion: (canal, callback) => ipcRenderer.on("peticion", callback),
  queryPedidoProducto: (query) =>
    ipcRenderer.send("queryPedidoProducto", query),
  resultPedidoProducto: (canal, callback) =>
    ipcRenderer.on("result-Pedido-Producto", callback),
  generacionPedido: (datos) => ipcRenderer.send("generacion-pedido", datos),
  queryPedidoIgual: (datos) => ipcRenderer.send("queryPedidoIgual", datos),
  pedido_ok: (canal, callback) => ipcRenderer.on("pedido-ok", callback),
  queryPedidoIgualProducto: (query) =>
    ipcRenderer.send("queryPedidoIgualProducto", query),
  pedido_ok_ok: (canal, callback) => ipcRenderer.on("pedido-ok-ok", callback),
  pedidoInvalido: (callback) => ipcRenderer.on("pedido-invalido", callback),
  pedidoAlerta: (callback) => ipcRenderer.on("pedido-alerta", callback),
});
