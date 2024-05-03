'use strict'

/*

Calculadora:
-Pida dos numeros por pantalla
-Si metemos uno mal que lo vuelva a pedir
-Que muestre en el cuerpo de la pagina, en una alerta y por consola el 
 resultado de sumar, restar, multiplicar y dividir esas dos cifras

*/

let numero1 = parseInt(prompt('Ingrese el primer número: '))
let numero2 = parseInt(prompt('Ingrese el segundo número: '))

while (isNaN(numero1) || isNaN(numero2)) {
  alert('Ingrese números válidos')
  numero1 = parseInt(prompt('Ingrese el primer número: '))
  numero2 = parseInt(prompt('Ingrese el segundo número: '))
}

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2

console.log(`La suma de los números es: ${suma}`)
console.log(`La resta de los números es: ${resta}`)
console.log(`La multiplicación de los números es: ${multiplicacion}`)
console.log(`La división de los números es: ${division}`)

alert(
  `La suma de los números es: ${suma}, La resta de los números es: ${resta}, La multiplicación de los números es: ${multiplicacion}, La división de los números es: ${division}`,
)

const resultado = document.getElementById('resultado')
resultado.innerHTML = `
Los números ingresados son: ${numero1} y ${numero2} <br>
La suma de los números es: ${suma} <br> La resta de los números es: ${resta} <br> La multiplicación de los números es: ${multiplicacion} <br> La división de los números es: ${division}`
