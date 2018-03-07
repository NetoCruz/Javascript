
// const nacimiento = new Date(año mes-1 dia)
// -----------------------Date(0000 00 00)

// const hoy = new Date()
//------------------------nos da la fecha actual----------

//cuantos milisegundos han transcurrido desde mi nacimiento
const tiempoTranscurrido = hoy-nacimiento

//convertir a segundos
const tiempoSegundos= tiempoTranscurrido/1000

//convertir a minutos
const tiempoMinutos= tiempoSegundos/60

//convertir a horas
const tiempoHoras= tiempoMinutos/60

//obtener el proximo dia de mi cumpeaños
const proximo= new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

////////////////////////////////////////
const dias =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"

]

const nacimiento = newDate(0000, 00, 0);
const hoy = newDate();
const tiempomil = hoy - nacimiento
const tiemposeg = tiempomil /1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365
const proximo = newDate(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(dias[proximo.getDay()])