
//-................Objetos Javascript......................

// const nombreObjeto = { // inicia la construcción del objeto
// 	// Los objetos tienen atributos que apuntan a un valor
// 	atributoA: 10,	// Para denotar un atributo, se escribe el nombre del atributo, dos puntos ":" y el valor 
// 	atributoB: 20,  // Para escribir varios atributos, se separan por coma ","
// 	atributoC: 30// El último atributo no lleva coma ni punto y coma

// } // cierra la construcción de un objeto



const p1 ={
	x:0,
	y:4,
	moverEnx(x){
		this.x=this.x+x
	},                   //---->mejor manera de presentas metodos
	moverEny(y){
		this.y=this.y+y
	}
}

const p2={
	x:3,
	y:0,
	moverEnx: function(x){this.x=this.x+x},
	moverEny: function(y){this.y=this.y+y}
}

function distancia(p1,p2){
	const x=p1.x -p2.x
	const y=p1.y -p2.y

	return Math.sqrt(x*x+y*y)
}

console.log(distancia(p1,p2))

console.log(distancia(p1,{x:2,y:5}))