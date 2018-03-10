//scope es el conjunto de variables y funciones que podemos llamar en una parte del código
//ocupemos let solo para acceder a la variable en un bloque de codigo
//Si definimos una variable en el scope global (window en el navegador) 
//podemos acceder a ella dentro de cualquier lugar del código

var nombre = "Ernesto"

function saludar10() {
  var nombre
  if (true) {
     nombre = "Eric"
  }
  
  console.log(`Hola ${nombre}`)
}

saludar("Ernesto")
console.log(`La variable nombre tiene el valor ${nombre}`)


function saludarAErnesto10() {
  const nombre = "Ernesto"

  for (let i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`)
  }
}

saludarAErnesto10()