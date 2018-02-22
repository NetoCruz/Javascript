const nombre='Ernesto'
const edad=17

const moviename='El padrino'
const pg1=18

const acceso=(name,edad,withadult )=>{

	if (edad>=pg1) {
		console.log(`${name} tiene el acceso Autorizado para ver ${moviename}`)
	}else if(withadult==true){
          
     console.log(`${name} tiene el acceso Autorizado para ver ${moviename} aunque tiene
     	${edad}años, va en compañia de un adulto`)
	}
	else{
		console.log(`${name} tiene el acceso Denegado para ver ${moviename}`)
	}

 


}





acceso(nombre,edad,true)
acceso('juan',25)
