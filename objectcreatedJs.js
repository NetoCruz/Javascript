// Podemos usar prototipos 
//para crear objetos que heredan los mismos atributos y los mismos métodos.

const Punto = {
  init: function init(x,y) {
    this.x = x
    this.y = y    
  },
  moverEnX: function moverEnX(x) {
    this.x += x
  },
  moverEnY: function moverEnY(y) {
    this.y += y
  }
}

const p1 = Object.create(Punto)
p1.init(0,4)