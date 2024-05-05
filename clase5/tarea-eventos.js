'use strict'

/*
¿Qué es y para qué sirve un evento?
Investigar cada uno de los siguientes eventos 
y hacer un ejemplo para explicarlo:

EVENTO CLICK: Este evento se dispara cuando el usuario hace clic en un elemento, como un botón o un enlace.
Ejemplo: Supongamos que tienes un botón en una página web con el id "boton1". Puedes hacer que aparezca un mensaje cuando el usuario haga clic en él.

MOUSE OVER: Se activa cuando el cursor del mouse se mueve sobre un elemento.
Ejemplo: Imagina que tienes una imagen en tu página web y quieres mostrar un mensaje cuando el usuario coloque el cursor sobre ella.

MOUSEOUT: Este evento se produce cuando el cursor del mouse sale de un elemento.
Ejemplo: Continuando con el ejemplo anterior, puedes hacer que aparezca un mensaje cuando el cursor del mouse salga de la imagen.

Focus: Se activa cuando un elemento recibe el foco, es decir, cuando se selecciona.
Ejemplo: Si tienes un campo de entrada de texto y deseas realizar una acción cuando el usuario lo seleccione, puedes usar este evento.

Blur: Este evento ocurre cuando un elemento pierde el foco, es decir, cuando deja de estar seleccionado.
Ejemplo: Supongamos que tienes un campo de entrada de texto y quieres realizar una acción cuando el usuario deje de seleccionarlo.

Keydown: Se activa cuando se presiona una tecla del teclado.
Ejemplo: Puedes usar este evento para capturar cuando el usuario presiona una tecla en un campo de entrada de texto.

Keypress: Similar a keydown, se dispara cuando una tecla es presionada. Sin embargo, este evento se centra en las teclas que producen un carácter (es decir, las teclas alfanuméricas).
Ejemplo: Puedes usar esto para capturar la entrada del usuario en un campo de entrada de texto.

Keyup: Se activa cuando se suelta una tecla del teclado.
Ejemplo: Este evento puede ser útil para detectar cuando el usuario ha terminado de escribir en un campo de entrada de texto.

*/

document.getElementById('boton1').addEventListener('click', function () {
  console.log('¡Has hecho clic en el botón!')
})

document.getElementById('miInput').addEventListener('focus', function () {
  console.log('El campo de entrada ha sido seleccionado.')
})

document.getElementById('miInput').addEventListener('blur', function () {
  console.log('El campo de entrada ha perdido el foco.')
})

document
  .getElementById('miInput')
  .addEventListener('keydown', function (event) {
    console.log('Tecla presionada:', event.key)
  })

document
  .getElementById('miInput')
  .addEventListener('keypress', function (event) {
    console.log('Carácter presionado:', event.key)
  })

document.getElementById('miInput').addEventListener('keyup', function (event) {
  console.log('Tecla liberada:', event.key)
})

document.getElementById('miImagen').addEventListener('mouseover', function () {
  console.log('¡El ratón está sobre la imagen!')
})

document.getElementById('miImagen').addEventListener('mouseout', function () {
  console.log('¡El ratón ha salido de la imagen!')
})
