let idProducto = document.getElementById("inputIdProducto");
let nombreProducto = document.getElementById("inputNombreProducto");
let categoriaProducto = document.getElementById("inputCategoriaProducto");
let existenciaProducto = document.getElementById("inputExistenciaProducto");
let descripcionProducto = document.getElementById("inputDescripcionProducto");

window.comunicacion2.edicion("edicion", function (event, args) {
  console.log(args);
  idProducto.value = args.idProducto;
  nombreProducto.value = args.nombre;
  categoriaProducto.value = args.categoria;
  existenciaProducto.value = args.existencia;
  descripcionProducto.value = args.descripcion;
});

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
