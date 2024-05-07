'use strict'

window.addEventListener('load', () => {
  console.log('DOM cargado')

  // Temporizador
  function intervalo() {
    let tiempo = setInterval(() => {
      console.log('Set interval ejecutado')

      let encabezado = document.querySelector('h1')
      if (encabezado.style.color == 'green') {
        encabezado.style.color = 'crimson'
      } else {
        encabezado.style.color = 'green'
      }
    }, 500)

    return tiempo
  }

  let tiempo = intervalo()

  let stop = document.querySelector('#stop')

  stop.addEventListener('click', () => {
    console.log('Has parado el intervalo en bucle')
    clearInterval(tiempo)
  })

  let start = document.querySelector('#start')

  start.addEventListener('click', () => {
    console.log('Has iniciado el intervalo en bucle')
    intervalo()
  })
})
