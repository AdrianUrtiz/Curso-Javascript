'use strict'

//BOM: Browser Object Model

function getBom() {
  console.log(window.innerHeight)
  console.log(window.innerWidth)
  console.log(window.location)
}

getBom()

//Puedo ver la URL de la página
console.log(window.location.href)

//Puedo redireccionar a otra página
function redirect(url) {
  window.location.href = url
}

//Puedo abrir una nueva ventana
function abrirVentana(url) {
  window.open(url, '', 'width=400, height=300')
}
