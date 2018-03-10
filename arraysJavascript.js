function suma(...numeros){
let acum=0
for (let i = 0; i < numeros.length; i++) {
	acum+=numeros[i]
}
return acum
}

suma(5,5)

//........................................................

function suma(...numeros){

return numeros.reduce(function(acum,numero){
	acum+=numero
	return acum
},0)

}

suma(5,5)

//.......................................................
//.map ejecutará una función por cada uno de los elementos del array

function dobles(...numeros){

return numeros.map(function(numero){
	return numero*2
})
}
/////////////////arrow-function
const dobles=(...numeros)=> numeros.map(numero => numero*2)

//************************************************************************

//.filter seleccionara  elementos del array de acuerdo con lo estipulado en una funcion

function pares(...numeros){
	return numeros.filter(function(numero){
		return numero % 2==0

	})
}

//arrow-function

const pares=(...numeros)=> numeros.filter(numero=> numero % 2==0)
