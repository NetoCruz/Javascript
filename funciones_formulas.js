let base=5
let altura=8

function triangleArea(base,altura){
  
 return base*altura/2
}

function squareArea(base, base2){
	return base*base2
}

function circleArea(radio){
	return console.log(`El area del circulo de radio ${radio} es: ${3.1416*(radio*radio)}`)
}

console.log(`El area de un triangulo de base ${base}  y altura ${altura}  es: ${triangleArea(base, altura)}`)