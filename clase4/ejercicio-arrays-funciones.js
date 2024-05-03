/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos en el cuerpo 
de la pagina y en la consola)
3.Ordenar y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, 
que nos diga si lo encuentra y su indice
(Se valorara el uso de funciones)
*/

'use strict'

let numeros = []

for (let i = 0; i < 6; i++) {
  let num = parseInt(prompt('Introduce un número'))
  numeros.push(num)
}

const mostrarArray = (array) => {
  document.write('<h1>Contenido del array</h1>')
  document.write('<ul>')
  array.forEach((element) => {
    document.write(`<li>${element}</li>`)
  })
  document.write('</ul>')
}

const ordenarArray = (array) => {
  array.sort((a, b) => a - b)
  document.write('<h1>Array ordenado</h1>')
  document.write('<ul>')
  array.forEach((element) => {
    document.write(`<li>${element}</li>`)
  })
  document.write('</ul>')
}

const invertirArray = (array) => {
  array.reverse()
  document.write('<h1>Array invertido</h1>')
  document.write('<ul>')
  array.forEach((element) => {
    document.write(`<li>${element}</li>`)
  })
  document.write('</ul>')
}

const contarElementos = (array) => {
  document.write(`<h1>El array tiene ${array.length} elementos</h1>`)
}

const buscarElemento = (array, elemento) => {
  let busqueda = array.findIndex((element) => element === elemento)
  if (busqueda !== -1) {
    document.write(
      `<h1>El elemento ${elemento} ha sido encontrado en el índice ${busqueda}</h1>`,
    )
  } else {
    document.write(`<h1>El elemento ${elemento} no ha sido encontrado</h1>`)
  }
}

mostrarArray(numeros)
ordenarArray(numeros)
invertirArray(numeros)
contarElementos(numeros)
let elemento = parseInt(prompt('Introduce el número a buscar'))
buscarElemento(numeros, elemento)
