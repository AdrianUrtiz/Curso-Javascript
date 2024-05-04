'use strict'

//DOM: Document Object Model

//Con JS podemos modificar el contenido de una página web
//Manipular los elementos de la página

//Conseguir elementos con un ID concreto

//let caja = document.getElementById('micaja')

let body = document.getElementsByTagName('body')
body[0].style.background = 'aliceblue'
body[0].style.padding = '20px'
body[0].style.width = '70%'
body[0].style.margin = 'auto'

let caja = document.querySelector('#micaja')
console.log(caja)
caja.innerHTML = 'Texto en la caja desde JS'

//Cambiar estilos de un elemento

caja.style.background = 'crimson'
caja.style.padding = '20px'
caja.style.color = 'white'
caja.style.textAlign = 'center'
caja.style.cursor = 'pointer'
caja.className = 'clase1'
caja.onclick = function () {
  caja.style.background = 'blue'
}

//Conseguir elementos por su etiqueta
let todosLosDivs = document.getElementsByTagName('div')
console.log(todosLosDivs)

let contenidoEnTexto = todosLosDivs[2]

contenidoEnTexto.style.background = 'green'
contenidoEnTexto.innerHTML = 'Otro texto para el segundo div'
console.log(contenidoEnTexto)

let divs = document.querySelectorAll('#contenedor div')

divs.forEach((element, index) => {
  console.log(`Div ${index + 1}: ${element.textContent}`)

  element.style.background = 'green'
  element.style.color = 'white'
  element.innerHTML = `Div número ${index + 1}`
  element.style.padding = '10px'
  element.style.margin = '4px'
  element.style.textAlign = 'center'
  element.style.cursor = 'pointer'
  element.onclick = function () {
    element.style.background = 'blue'
  }
})

//Conseguir elementos por su clase
let divsRojos = document.getElementsByClassName('rojo')
let divsAmarillos = document.getElementsByClassName('amarillo')

for (let div in divsAmarillos) {
  if (divsAmarillos[div].className == 'amarillo') {
    divsAmarillos[div].style.background = 'yellow'
  }
}

console.log(divsRojos)
console.log(divsAmarillos)
