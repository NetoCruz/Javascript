const auto="Vocho"
let distancia=1200
const dias=[
"lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado",
"domingo"
]

function recorrido(){
	const min=50
	const max=280
	return Math.round(Math.random()*(max-min))+min
}

for (var i = 0; i < distancia; i++) {
	const re=recorrido()
	distancia-=re
	if(distancia>=0){
		console.log(`El ${auto} recorrió ${re} kms el ${dias[i]} y le quedan ${distancia} kms por recorrer`)
	}
		
}