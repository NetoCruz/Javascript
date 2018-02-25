let vidaGoku=100
let vidaSuperman=100

const MIN_POWER=5
const MAX_POWER=12

const ambosVivos=()=>vidaSuperman>0 && vidaGoku >0
function clacularGolpe(){
	return Math.round(Math.random()*(MAX_POWER-MIN_POWER)+MIN_POWER)
}
const gokuSigueVivo=()=>vidaGoku>0	 

let round=1

while(ambosVivos()){

	console.log(`Round ${round}`)
    const golpeGoku = clacularGolpe()
    const golpeSuperman = clacularGolpe()

    if (golpeGoku>golpeSuperman) {
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
    vidaSuperman-=golpeGoku
    console.log(`Superman queda con ${vidaSuperman} de vida`)
    }else{
     console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
     vidaGoku-=golpeSuperman
     console.log(`Goku queda con ${vidaGoku} de vida`)
    }
    round++
}
if(gokuSigueVivo()){
	console.log(`Goku gana la pelea.Su vida es de ${vidaGoku}`)
}else{
	console.log(`Superman gana la pelea.Su vida es de ${vidaSuperman}`)
}