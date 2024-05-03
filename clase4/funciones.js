'use strict'

function calculadora(n1, n2) {
  console.log('Suma: ' + (n1 + n2))
  console.log('Resta: ' + (n1 - n2))
  console.log('Multiplicación: ' + n1 * n2)
  console.log('División: ' + n1 / n2)
}

let n1 = parseInt(prompt('Ingrese el primer número'))
let n2 = parseInt(prompt('Ingrese el segundo número'))

calculadora(n1, n2)
