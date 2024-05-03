'use strict'

//Prueba de var

var numero = 40
console.log(numero) //valor 40

if (true) {
  var numero = 50
  console.log(numero) //valor 50
}

console.log(numero) //valor 50

//Prueba de let

var texto = 'Curso JS'
console.log(texto) //valor Curso JS

if (true) {
  let texto = 'Curso Laravel'
  console.log(texto) //valor Curso Laravel
}

console.log(texto) //valor Curso JS
