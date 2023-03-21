let idProducto = document.getElementById("inputIdProducto");
let nombreProducto = document.getElementById("inputNombreProducto");
let existenciaProducto = document.getElementById("inputExistenciaProducto");

window.comunicacion3.peticion("peticion", function (event, args) {
  console.log(args);
  idProducto.value = args.idProducto;
  nombreProducto.value = args.nombre;
  existenciaProducto.value = args.existencia;
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
