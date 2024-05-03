'use strict'
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/*
    Escriba un programa que pida la calificación numerica de un estudiantes como entrada y muestre un mensaje indicando su calificación en formato de letras( A, B, C, D, F) segun la siguiente escala de calificaciones:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

*/

rl.question('Ingrese la calificación del estudiante: ', (calificacion) => {
  let mensaje = ''

  if (calificacion >= 90 && calificacion <= 100) {
    mensaje = 'A'
  } else if (calificacion >= 80 && calificacion <= 89) {
    mensaje = 'B'
  } else if (calificacion >= 70 && calificacion <= 79) {
    mensaje = 'C'
  } else if (calificacion >= 60 && calificacion <= 69) {
    mensaje = 'D'
  } else {
    mensaje = 'F'
  }

  console.log(`La calificación es: ${mensaje}`)
  rl.close()
})
