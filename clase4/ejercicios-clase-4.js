/* 
Ejercicios Fáciles
Sumar dos números:
Escribe una función llamada sumar que tome dos parámetros y devuelva la suma de esos dos números.
Restar dos números:
Crea una función llamada restar que acepte dos parámetros y devuelva la resta del primero menos el segundo.
Multiplicar dos números:
Define una función llamada multiplicar que reciba dos números como parámetros y devuelva su producto.
Dividir dos números:
Implementa una función llamada dividir que tome dos números y devuelva el resultado de la división del primero por el segundo.
Calcular el área de un rectángulo:
Crea una función llamada areaRectangulo que tome la base y la altura de un rectángulo como parámetros y devuelva su área.
Calcular el área de un círculo:
Define una función llamada areaCirculo que reciba el radio de un círculo como parámetro y devuelva su área.


Ejercicios intermedios
Calcular el factorial de un número:
Escribe una función llamada factorial que tome un número como parámetro y devuelva su factorial.
Comprobar si un número es primo:
Define una función llamada esPrimo que verifique si un número dado es primo o no.
Revertir una cadena de texto:
Define una función llamada revertirCadena que tome una cadena de texto como parámetro y devuelva la cadena revertida.
 */

// Ejercicios Fáciles
// Sumar dos números:

console.log('Ejercicios Fáciles')
console.log('                             ')

function sumar(n1, n2) {
  return n1 + n2
}
console.log('Suma:', sumar(2, 3))

// Restar dos números:
function restar(n1, n2) {
  return n1 - n2
}
console.log('Resta:', restar(2, 3))

// Multiplicar dos números:
function multiplicar(n1, n2) {
  return n1 * n2
}
console.log('Multiplicación:', multiplicar(2, 3))

// Dividir dos números:
function dividir(n1, n2) {
  return n1 / n2
}
console.log('División:', dividir(2, 3))

// Calcular el área de un rectángulo:
function areaRectangulo(base, altura) {
  return base * altura
}
console.log('Área de un rectángulo:', areaRectangulo(2, 3))

// Calcular el área de un círculo:
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2)
}
console.log('Área de un círculo:', areaCirculo(2))

// Ejercicios intermedios

console.log('                             ')
console.log('Ejercicios intermedios')
console.log('                             ')

// Calcular el factorial de un número:
function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}
console.log('Factorial:', factorial(5))

// Comprobar si un número es primo:
function esPrimo(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}
console.log('¿Es primo?', esPrimo(23))

// Revertir una cadena de texto:
function revertirCadena(cadena) {
  return cadena.split('').reverse().join('')
}
console.log('Cadena revertida:', revertirCadena('Hola mundo!'))
