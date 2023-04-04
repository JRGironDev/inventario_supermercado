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
let categoriaProducto = document.getElementById("inputCategoriaProducto");
let existenciaProducto = document.getElementById("inputExistenciaProducto");
let descripcionProducto = document.getElementById("inputDescripcionProducto");
let btnEliminarCambios = document.getElementById("eliminarCambios");

window.comunicacion.edicion("edicion", function (event, args) {
  idProducto.value = args;
  window.comunicacion.queryProducto([idProducto.value]);
});

window.comunicacion.resultProducto("result-Producto", function (event, args) {
  nombreProducto.value = args[0];
  descripcionProducto.value = args[1];
  categoriaProducto.value = args[2];
  existenciaProducto.value = args[3];
});

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("form-login");
  let btnEliminarCambios = document.getElementById("eliminarCambios");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    window.comunicacion.actualizacionProducto([
      nombreProducto.value,
      descripcionProducto.value,
      categoriaProducto.value,
      existenciaProducto.value,
      idProducto.value,
    ]);
  });

  btnEliminarCambios.addEventListener("click", function (e) {
    e.preventDefault();
    window.comunicacion.reload();
  });
});
