const form = document.querySelector('#form');
const inputProducto = document.querySelector('#producto');
const tabla = document.querySelector('#productos');
const botonBorrarTodo = document.querySelector('#borrar-todo');

let productos = JSON.parse(localStorage.getItem('productos') || '[]');
let siguienteId = 1;

for (let i = 0; i < productos.length; i++) {
  if (productos[i].id >= siguienteId) {
    siguienteId = productos[i].id + 1;
  }
}

function guardarProductos() {
  localStorage.setItem('productos', JSON.stringify(productos));
}

function mostrarProductos() {

  for (let i = 0; i < productos.length; i++) {
    const fila = document.createElement('tr')
    const celdaId = document.createElement('td')
    const celdaNombre = document.createElement('td')
    const celdaCantidad = document.createElement('td')
    const celdaAccion = document.createElement('td')
    const botonEliminar = document.createElement('button')

    celdaId.textContent = productos[i].id;
    celdaNombre.textContent = productos[i].nombre
    celdaCantidad.textContent = productos[i].cantidad;

    botonEliminar.textContent = 'Eliminar'
    botonEliminar.type = 'button';

    botonEliminar.addEventListener('click', function () {
      eliminarProducto(i);
    });

    celdaAccion.appendChild(botonEliminar);
    fila.appendChild(celdaId)
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaCantidad)
    fila.appendChild(celdaAccion)
    tabla.appendChild(fila)
  }
}

function agregarProducto(event) {
  event.preventDefault()

  const nombre = inputProducto.value.trim()
  if (nombre === '') {
    return;
  }

  let productoEncontrado = false;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      productos[i].cantidad = productos[i].cantidad + 1
      productoEncontrado = true;
      break;
    }
  }

  if (productoEncontrado === false) {
    const nuevoProducto = {
      id: siguienteId,
      nombre: nombre,
      cantidad: 1
    };

    productos.push(nuevoProducto)
    siguienteId = siguienteId + 1
  }

  guardarProductos();
  mostrarProductos();
  form.reset()
}
console.log(agregarProducto)

function eliminarProducto(indice) {
  productos[indice].cantidad = productos[indice].cantidad - 1

  if (productos[indice].cantidad === 0) {
    productos.splice(indice, 1);
  }
  mostrarProductos()
}

form.addEventListener('submit', agregarProducto)

botonBorrarTodo.addEventListener('click', function () {
productos = [];
  siguienteId = 1;
guardarProductos();
  mostrarProductos()
});

mostrarProductos()
