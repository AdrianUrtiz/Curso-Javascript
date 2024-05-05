'use strict'

/*
Escribe un programa en el que la computadora "piense" en un número 
aleatorio entre 1 y 100, y luego le pida al usuario que adivine ese número.
Después de cada intento, la computadora debe indicar si el número 
ingresado por el usuario es demasiado alto, demasiado bajo o correcto. 
El juego debe continuar hasta que el usuario adivine correctamente el número.
*/

const numeroAleatorio = Math.floor(Math.random() * 100) + 1
let numeroUsuario = parseInt(prompt('Adivina el número: '))

while (numeroUsuario !== numeroAleatorio) {
  if (numeroUsuario < numeroAleatorio) {
    alert('El número es muy bajo')
  } else {
    alert('El número es muy alto')
  }

  numeroUsuario = parseInt(prompt('Adivina el número: '))
}

alert('¡Felicidades! Adivinaste el número')
