const form = document.querySelector('#form');
const inputProducto = document.getElementById('producto');
const tabla = document.querySelector('table');
let contadorId = 1;


form.addEventListener('submit', (event) => {
  event.preventDefault();})

  const nombreProducto = inputProducto.value.trim();
if (nombreProducto === '') return;


// const aniadir = document.querySelector('#aniadir')
// const escribir = document.querySelector('#escibir')
// const campoSesion = document.querySelector('#sesion')
// const campoLocal = document.querySelector('#local')



// aniadir.addEventListener('click', () => {
//   aniadirCosas()
// })

// escibir.addEventListener('click', () => {
//   leerCosas()
// })

// const aniadirCosas = () => {
//   localStorage.setItem("nombre", "Ana");
//   sessionStorage.setItem("sesionData", "Información de...");
// }

// const leerCosas = () => {
//   localStorage.getItem("nombre", "Ana");
//   sessionStorage.getItem("sesionData", "Información de...");
// }

