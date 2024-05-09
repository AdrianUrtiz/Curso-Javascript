'use strict'

/*
    Local Storage es una API de HTML5 que permite almacenar datos en el navegador
    de manera persistente. Es decir, los datos almacenados en Local Storage no se
    pierden al cerrar el navegador.
*/

// Para saber si el navegador soporta Local Storage, podemos utilizar el siguiente

if (typeof Storage !== 'undefined') {
  console.log('Local Storage disponible')
} else {
  console.log('Local Storage no disponible')
}

// Guardar datos en Local Storage

localStorage.setItem('titulo', 'Curso de Symfony')
localStorage.setItem('duracion', '40 horas')
localStorage.setItem('profesor', 'Carlos Ferreira')

// Obtener datos de Local Storage

let titulo = localStorage.getItem('titulo')
let duracion = localStorage.getItem('duracion')
let profesor = localStorage.getItem('profesor')

console.log(titulo)
console.log(duracion)
console.log(profesor)

document.querySelector('#pelicula').innerHTML = titulo

// Guardar un objeto en Local Storage

let pelicula = {
  titulo: 'Batman',
  genero: 'Accion',
  duracion: 120,
  director: 'Christopher Nolan',
  estreno: 2008,
  actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
}

localStorage.setItem('pelicula', JSON.stringify(pelicula))

// Obtener un objeto de Local Storage

let peliculaLS = JSON.parse(localStorage.getItem('pelicula'))

console.log(peliculaLS)

document
  .querySelector('#pelicula')
  .append(' - ' + peliculaLS.titulo + ' - ' + peliculaLS.director)

// Eliminar un elemento de Local Storage

//localStorage.removeItem('titulo')
localStorage.clear()
