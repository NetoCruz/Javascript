let base=5
let altura=8

//area de un triangulo


const triangleArea=(base,altura)=> base*altura/2

//area de un cuadrado

const squareArea=(lado)=> console.log(`El area del cuadrado de lado  ${lado} es: ${Math.pow(lado,2)}`)

//area de un circulo

const circleArea=(radio)=> console.log(`El area del circulo de radio ${radio} es: ${3.1416*(radio*radio)}`)

//area de un trapecio


const trapezeArea=(base,base2,altura)=> console.log(`El area del trapecio de base mayor ${base}, base menor ${base2} y 
	altura ${altura} es: ${base*base2*altura/2 }`)

//potencia de un numero

const potNumber=(number,pot)=> console.log(`La potencia del numero ${number} elevado a la ${pot} es ${Math.pow(number,pot)}`)


//cuadrado de un numero
const sqrtNumber=(number)=> console.log(`El cuadrado del numero ${number} es: ${Math.sqrt(number)}`)