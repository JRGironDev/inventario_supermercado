(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let idProducto = document.getElementById("inputIdProducto");
let nombreProducto = document.getElementById("inputNombreProducto");
let nombreProveedor = document.getElementById("inputProveedor");
let existenciaProducto = document.getElementById("inputExistenciaProducto");

let fechaPedido;
let idProveedor;

window.comunicacion.peticion("peticion", function (event, args) {
  idProducto.value = args;
  window.comunicacion.queryPedidoProducto([idProducto.value]);
});

window.comunicacion.resultProducto(
  "result-Pedido-Producto",
  function (event, args) {
    nombreProducto.value = args[0];
    existenciaProducto.value = args[1];
  }
);

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("form-login");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    fechaPedido = obtenerFecha();
    idProveedor = nombreProveedor.value;
    window.comunicacion.queryPedidoIgual([idProducto.value, idProveedor]);
  });
});

window.comunicacion.pedidoInvalido(function (event, args) {
  alert(args);
});

window.comunicacion.pedido_ok("pedido-ok", function (event, args) {
  window.comunicacion.queryPedidoIgualProducto([idProducto.value]);
});

window.comunicacion.pedidoAlerta(function (event, args) {
  alert(args);
});

window.comunicacion.pedido_ok("pedido-ok", function (event, args) {
  window.comunicacion.generacionPedido([
    idProducto.value,
    idProveedor,
    existenciaProducto.value,
    fechaPedido,
  ]);
});

function obtenerFecha() {
  let fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();
  let separador = "-";
  let fechaBD = dia + separador + mes + separador + anio;
  return fechaBD;
}
