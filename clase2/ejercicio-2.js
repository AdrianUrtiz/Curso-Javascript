'use strict'

/*
    Usando switch

    Escribe un programa que tome un numero como entrada representando el dia de la semana(1 para lunes, 2 para martes, etc) y muestre el nombre del dia de la semana correspondiente.

    Si el numero es menor que 1 o mayor que 7, el programa debe mostrar un mensaje de error.
    
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Ingrese el número del día de la semana: ', (dia) => {
  let mensaje = ''

  switch (dia) {
    case '1':
      mensaje = 'Lunes'
      break
    case '2':
      mensaje = 'Martes'
      break
    case '3':
      mensaje = 'Miércoles'
      break
    case '4':
      mensaje = 'Jueves'
      break
    case '5':
      mensaje = 'Viernes'
      break
    case '6':
      mensaje = 'Sábado'
      break
    case '7':
      mensaje = 'Domingo'
      break
    default:
      mensaje = 'Error: el número debe estar entre 1 y 7'
      break
  }

  console.log(`El día de la semana es: ${mensaje}`)
  rl.close()
})
