'use strict'

/* Ejercicio de preparar un café mediante funciones */
let azúcar = confirm('¿Desea azúcar?')
let leche = confirm('¿Desea leche?')

// Definir función para moler el café
const molerGranos = () => {
  console.log('Moliendo granos...')
  setTimeout(() => {
    console.log('Granos molidos!')
  }, 2000)
}

// Definir función para calentar el agua
const calentarAgua = () => {
  console.log('Calentando agua...')
  setTimeout(() => {
    console.log('Agua caliente!')
  }, 1000)
}

// Definir función para preparar el café
const prepararCafe = (azúcar, leche) => {
  molerGranos()
  calentarAgua()
  if (azúcar) {
    console.log('Agregando azúcar...')
    setTimeout(() => {
      console.log('Azúcar agregada!')
    }, 1000)
  }
  if (leche) {
    console.log('Agregando leche...')
    setTimeout(() => {
      console.log('Leche agregada!')
    }, 1000)
  }
  console.log('Preparando café...')
  setTimeout(() => {
    console.log('Café listo!')
  }, 2000)
}

prepararCafe(azúcar, leche)
