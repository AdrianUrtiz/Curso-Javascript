'use strict'

/*

         1. Formulario campos: Nombre, Apellidos y edad
         2. Boton de enviar el formulario: eventos submit
         3.Mostrar datos por pantalla
         4.Tener un boton  que al darle click nos muestra los datos actuales del formulario

*/

window.addEventListener('load', () => {
  console.log('DOM cargado')

  let formulario = document.querySelector('#formulario')
  let nombre = document.querySelector('#nombre')
  let apellidos = document.querySelector('#apellidos')
  let edad = document.querySelector('#edad')
  let datos = document.querySelector('#datos')

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Evento submit capturado')

    datos.innerHTML = `
        <h2 style="color: blue;">${nombre.value}</h2>
        <h2 style="color: green;">${apellidos.value}</h2>
        <h2 style="color: red;">${edad.value}</h2>
        `
  })

  let mostrarDatos = document.querySelector('#mostrar-datos')

  mostrarDatos.addEventListener('click', () => {
    console.log('Mostrando datos actuales')

    datos.innerHTML = `
        <h2 style="color: blue;">${nombre.value}</h2>
        <h2 style="color: green;">${apellidos.value}</h2>
        <h2 style="color: red;">${edad.value}</h2>
        `
  })
})
