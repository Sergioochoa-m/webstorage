const aniadir = document.querySelector('#aniadir')
const escribir = document.querySelector('#escibir')
const campoSesion = document.querySelector('#sesion')
const campoLocal = document.querySelector('#local')



aniadir.addEventListener('click', () => {
  aniadirCosas()
})

escibir.addEventListener('click', () => {
  leerCosas()
})

const aniadirCosas = () => {
  localStorage.setItem("nombre", "Ana");
  sessionStorage.setItem("sesionData", "Información de...");
}

const leerCosas = () => {
  localStorage.getItem("nombre", "Ana");
  sessionStorage.getItem("sesionData", "Información de...");
}

