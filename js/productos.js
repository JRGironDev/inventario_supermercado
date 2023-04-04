let idUsuario = document.getElementById("idUsuario");
const productos = document.getElementById("productos");
let productos_supermercado = [];

document.addEventListener("DOMContentLoaded", function () {
  window.comunicacion.queryProductos();
});

window.comunicacion.bienvenidoUsuario(
  "bienvenido-usuario",
  function (event, args) {
    idUsuario.textContent = args[0];
  }
);

window.comunicacion.resultProductos("result-Productos", function (event, args) {
  productos_supermercado = args;
  productos_supermercado.forEach((producto) => {
    const {
      id_producto,
      nombre_producto,
      descripcion,
      categoria,
      precio,
      unidad_medida,
      imagen,
      existencia_inventario,
      total,
    } = producto;
    productos.innerHTML += `
    <div class="col mb-3" id=${id_producto}>
    <div class="card h-100">
      <img
      src=${imagen}
      class="card-img-top"
      alt="imagen card"
      height="150px"
      width="150px"
      />
      <div class="card-header bg-primary text-white text-center">
        <h5 class="card-title m-0 nombre-producto">${nombre_producto}</h5>
      </div>
      <div class="card-body bg-light text-dark">
        <p class="card-text fw-bold id-producto">
          Código:
          <span class="fw-normal">${id_producto}</span>
        </p>
        <p class="card-text fw-bold descripcion">
          Descripción:
          <span class="fw-normal"
            >${descripcion}</span
          >
        </p>
        <p class="card-text fw-bold categoria">
          Categoria:
          <span class="fw-normal">${categoria}</span>
        </p>
        <p class="card-text fw-bold existencia">
          Existencia:
          <span class="fw-normal">${existencia_inventario}</span><span class="fw-normal total">${
      total ? `(${total})` : ""
    }</span><span class="fw-normal">
        </p>
      </div>
      <div class="card-footer bg-white px-1">
        <div class="d-flex gap-1">
          <a
            href="#"
            class="btn btn-primary btn-sm text-white editar-producto"
            >Editar Producto</a
          >
          <a href="#" class="btn btn-secondary btn-sm colocar-pedido"
            >Colocar Pedido</a
          >
        </div>
      </div>
    </div>
    </div>
    `;
  });
});

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
  const idProducto = card.querySelector(".id-producto span").textContent;
  window.comunicacion.edicionProducto(idProducto);
}

function obtenerIdPedido(card) {
  const idProducto = card.querySelector(".id-producto span").textContent;
  window.comunicacion.peticionProducto(idProducto);
}
