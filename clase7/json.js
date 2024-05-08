'use strict'

//Objeto JSON -> JavaScript Object Notation
//Es un formato de intercambio de datos

let pelicula = {
  titulo: 'Batman',
  genero: 'Accion',
  duracion: 120,
  director: 'Christopher Nolan',
  estreno: 2008,
  actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
}

console.log(pelicula.titulo)

let peliculas = [
  { ...pelicula },
  {
    titulo: 'Batman Begins',
    genero: 'Accion',
    duracion: 140,
    director: 'Christopher Nolan',
    estreno: 2005,
    actores: ['Christian Bale', 'Liam Neeson', 'Katie Holmes'],
  },
  {
    titulo: 'Batman Returns',
    genero: 'Accion',
    duracion: 130,
    director: 'Tim Burton',
    estreno: 1992,
    actores: ['Michael Keaton', 'Michelle Pfeiffer', 'Danny DeVito'],
  },

  {
    titulo: 'Batman Forever',
    genero: 'Accion',
    duracion: 120,
    director: 'Joel Schumacher',
    estreno: 1995,
    actores: ['Val Kilmer', 'Tommy Lee Jones', 'Jim Carrey'],
  },

  {
    titulo: 'Batman & Robin',
    genero: 'Accion',
    duracion: 125,
    director: 'Joel Schumacher',
    estreno: 1997,
    actores: ['George Clooney', 'Arnold Schwarzenegger', 'Chris ODonnell'],
  },

  {
    titulo: 'The Dark Knight Rises',
    genero: 'Accion',
    duracion: 165,
    director: 'Christopher Nolan',
    estreno: 2012,
    actores: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
  },

  {
    titulo: 'The Dark Knight',
    genero: 'Accion',
    duracion: 152,
    director: 'Christopher Nolan',
    estreno: 2008,
    actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },

  {
    titulo: 'Batman v Superman: Dawn of Justice',
    genero: 'Accion',
    duracion: 151,
    director: 'Zack Snyder',
    estreno: 2016,
    actores: ['Ben Affleck', 'Henry Cavill', 'Amy Adams'],
  },

  {
    titulo: 'Justice League',
    genero: 'Accion',
    duracion: 120,
    director: 'Zack Snyder',
    estreno: 2017,
    actores: ['Ben Affleck', 'Henry Cavill', 'Gal Gadot'],
  },

  {
    titulo: 'The Batman',
    genero: 'Accion',
    duracion: 120,
    director: 'Matt Reeves',
    estreno: 2022,
    actores: ['Robert Pattinson', 'Zoe Kravitz', 'Paul Dano'],
  },
]

document.addEventListener('DOMContentLoaded', (event) => {
  let peliculaFrondEnd = document.querySelector('#pelicula')

  peliculaFrondEnd.innerHTML = peliculas
    .map(({ titulo, genero, duracion, director, estreno, actores }) => {
      return `
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div class="md:flex">            
            <div class="p-8">
              <h2 class="uppercase tracking-wide text-base text-blue-500 font-semibold">${titulo}</h2>
              <p class="mt-2 text-gray-500">Genero: ${genero}</p>
              <p class="mt-2 text-gray-500">Duracion: ${duracion}</p>
              <p class="mt-2 text-gray-500">Director: ${director}</p>
              <p class="mt-2 text-gray-500">Estreno: ${estreno}</p>
              <p class="mt-2 text-gray-500">Actores: ${actores}</p>
            </div>
          </div>
        </div>
        `
    })
    .join('')
})
