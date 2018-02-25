const nombre="Neto"
const dias=[
"lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado",
"domingo"


]
function correr(){
	const min = 5
	const max =10
	return Math.round(Math.random()*(max-min))+min
}
let totalKms=0
const length=dias.length
for (let i = 0; i < length; i++) {
	const kms=correr()
	totalKms+=kms
	console.log(`El dia ${dias[i]} ${nombre} corrió ${kms}kms`)
}
const promedium=totalKms/length
console.log(`El total de kms corridos en esta semana es ${totalKms}`)
console.log(`En promedio ${nombre} corrió  ${promedium.toFixed(2) kms}`)

