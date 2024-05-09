let peliculas = [
  {
    titulo: 'Origen',
    director: 'Christopher Nolan',
    genero: 'Ciencia ficción',
    anio: 2010,
  },
  {
    titulo: 'Sueño de Fuga',
    director: 'Frank Darabont',
    genero: 'Drama',
    anio: 1994,
  },
  {
    titulo: 'El Caballero de la Noche',
    director: 'Christopher Nolan',
    genero: 'Acción',
    anio: 2008,
  },
  {
    titulo: 'Forrest Gump',
    director: 'Robert Zemeckis',
    genero: 'Drama',
    anio: 1994,
  },
  {
    titulo: 'Tiempos Violentos',
    director: 'Quentin Tarantino',
    genero: 'Crimen',
    anio: 1994,
  },
  {
    titulo: 'Interstellar',
    director: 'Christopher Nolan',
    genero: 'Ciencia ficción',
    anio: 2014,
  },
  {
    titulo: 'El Padrino',
    director: 'Francis Ford Coppola',
    genero: 'Drama',
    anio: 1972,
  },
  {
    titulo: 'La Lista de Schindler',
    director: 'Steven Spielberg',
    genero: 'Drama',
    anio: 1993,
  },
  {
    titulo: 'Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    genero: 'Ciencia ficción',
    anio: 1999,
  },
  {
    titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
    director: 'Peter Jackson',
    genero: 'Fantasía',
    anio: 2001,
  },
  {
    titulo: 'El Silencio de los Inocentes',
    director: 'Jonathan Demme',
    genero: 'Crimen',
    anio: 1991,
  },
  {
    titulo: 'El Club de la Pelea',
    director: 'David Fincher',
    genero: 'Drama',
    anio: 1999,
  },
  {
    titulo: 'Infiltrados',
    director: 'Martin Scorsese',
    genero: 'Crimen',
    anio: 2006,
  },
  {
    titulo: 'Gladiador',
    director: 'Ridley Scott',
    genero: 'Acción',
    anio: 2000,
  },
  {
    titulo: 'Milagros Inesperados',
    director: 'Frank Darabont',
    genero: 'Drama',
    anio: 1999,
  },
  {
    titulo: 'El Gran Truco',
    director: 'Christopher Nolan',
    genero: 'Drama',
    anio: 2006,
  },
  {
    titulo: 'Sospechosos Habituales',
    director: 'Bryan Singer',
    genero: 'Crimen',
    anio: 1995,
  },
  {
    titulo: 'El Resplandor',
    director: 'Stanley Kubrick',
    genero: 'Terror',
    anio: 1980,
  },
  {
    titulo: 'Bastardos Sin Gloria',
    director: 'Quentin Tarantino',
    genero: 'Bélico',
    anio: 2009,
  },
  {
    titulo: 'El Padrino: Parte II',
    director: 'Francis Ford Coppola',
    genero: 'Drama',
    anio: 1974,
  },
]

localStorage.setItem('peliculas', JSON.stringify(peliculas))

function mostrarPeliculas() {
  let peliculaDiv = document.getElementById('pelicula')
  peliculaDiv.innerHTML = ''
  peliculas.map(({ titulo, director, genero, anio }) => {
    peliculaDiv.innerHTML += `
      <div class="bg-white rounded overflow-hidden shadow-lg p-6 mx-auto max-w-md mb-4">
        <h2 class="text-2xl font-bold mb-2">${titulo}</h2>
        <p><strong>Director:</strong> ${director}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Año:</strong> ${anio}</p>
      </div>
    `
  })
}

document.getElementById('btn').addEventListener('click', function () {
  let searchValue = document.getElementById('search').value
  let peliculaIndex = peliculas.findIndex(
    (p) => p.titulo.toLowerCase() === searchValue.toLowerCase(),
  )

  if (peliculaIndex !== -1) {
    let { titulo, director, genero, anio } = peliculas[peliculaIndex]
    document.getElementById('pelicula').innerHTML = `
      <div class="bg-white rounded overflow-hidden shadow-lg p-6 mx-auto max-w-md">
        <h2 class="text-2xl font-bold mb-2">${titulo}</h2>
        <p><strong>Director:</strong> ${director}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Año:</strong> ${anio}</p>
        <button id="eliminar" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Eliminar</button>
      </div>
    `

    document.getElementById('eliminar').addEventListener('click', function () {
      peliculas.splice(peliculaIndex, 1)
      localStorage.setItem('peliculas', JSON.stringify(peliculas))
      mostrarPeliculas()
    })
  } else {
    document.getElementById('pelicula').innerHTML =
      '<p class="text-red-500">Película no encontrada.</p>'
  }
})

document
  .getElementById('formPelicula')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    let titulo = document.getElementById('titulo').value
    let director = document.getElementById('director').value
    let genero = document.getElementById('genero').value
    let anio = document.getElementById('anio').value

    let nuevaPelicula = {
      titulo: titulo,
      director: director,
      genero: genero,
      anio: parseInt(anio),
    }

    peliculas.unshift(nuevaPelicula)
    localStorage.setItem('peliculas', JSON.stringify(peliculas))

    document.getElementById('titulo').value = ''
    document.getElementById('director').value = ''
    document.getElementById('genero').value = ''
    document.getElementById('anio').value = ''

    mostrarPeliculas()
  })

mostrarPeliculas()
