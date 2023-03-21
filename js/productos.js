//const { info } = require("sass");

let idUsuario = document.getElementById("idUsuario");
const productos = document.getElementById("productos");

cargarEventListeners();

function cargarEventListeners() {
  productos.addEventListener("click", obtenerCard);
}

function obtenerCard(e) {
  e.preventDefault();
  if (e.target.classList.contains("editar-producto")) {
    const cardSeleccionado = e.target.parentElement.parentElement.parentElement;
    obtenerIdEdicion(cardSeleccionado);
  }

  if (e.target.classList.contains("colocar-pedido")) {
    const cardSeleccionado = e.target.parentElement.parentElement.parentElement;
    obtenerIdPedido(cardSeleccionado);
  }
}

function obtenerIdEdicion(card) {
  //const idProducto = card.querySelector(".id-producto span").textContent;
  const infoProducto = {
    idProducto: card.querySelector(".id-producto span").textContent,
    nombre: card.parentElement.querySelector(".nombre-producto").textContent,
    categoria: card.querySelector(".categoria span").textContent,
    existencia: card.querySelector(".existencia span").textContent,
    descripcion: card.querySelector(".descripcion span").textContent,
  };
  console.log(infoProducto);
  //window.comunicacion2.edicionProducto(idProducto);
  window.comunicacion2.edicionProducto(infoProducto);
}

function obtenerIdPedido(card) {
  //const idProducto = card.querySelector(".id-producto span").textContent;
  const infoProducto = {
    idProducto: card.querySelector(".id-producto span").textContent,
    nombre: card.parentElement.querySelector(".nombre-producto").textContent,
    existencia: card.querySelector(".existencia span").textContent,
  };
  console.log(infoProducto);
  //window.comunicacion2.edicionProducto(idProducto);
  window.comunicacion3.peticionProducto(infoProducto);
}

window.comunicacion.bienvenidoUsuario(
  "bienvenido-usuario",
  function (event, args) {
    console.log(args);
    idUsuario.textContent = args;
  }
);
