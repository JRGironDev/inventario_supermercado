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

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("form-login");

  const formularioUsuario = {
    idUsuario: "",
    password: "",
  };

  // Elementos de la interfaz del formulario
  var usuarioInput = document.getElementById("floatingInputId");
  var passwordInput = document.getElementById("floatingPassword");
  var btnSubmit = document.getElementById("btn-login");

  // Eventos asignados
  usuarioInput.addEventListener("input", validarFormulario);
  passwordInput.addEventListener("input", validarFormulario);

  // Validación del formulario
  function validarFormulario(evento) {
    if (evento.target.value.trim() === "") {
      formularioUsuario[evento.target.name] = "";
      comprobarFormularioUsuario();
      return;
    }

    // Asignando valores
    formularioUsuario[evento.target.name] = evento.target.value
      .trim()
      .toLowerCase();

    comprobarFormularioUsuario();
  }

  function comprobarFormularioUsuario() {
    if (Object.values(formularioUsuario).includes("")) {
      btnSubmit.classList.add("opacidad");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacidad");
    btnSubmit.disabled = false;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    window.comunicacion.inicioUsuario([
      usuarioInput.value,
      passwordInput.value,
    ]);
  });

  window.comunicacion.usuarioInvalido(function (event, args) {
    alert(args);
  });

  window.comunicacion.contraseñaInvalida(function (event, args) {
    alert(args);
  });
});
