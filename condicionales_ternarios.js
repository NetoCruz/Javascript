const nombre='Ernesto'
const edad=17

const moviename='El padrino'



const acceso=(name,edad )=>console.log(`${name} tiene el acceso ${edad>=18? "Autorizado" :"Denegado"} para ver ${moviename}`)//ternarios

acceso(nombre,edad)
acceso('juan',25)
acceso('pedro',15)