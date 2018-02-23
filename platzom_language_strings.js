 function platzom(str){
  let translate = str

  //Si la palabra termina en "ar" se le quitan esos dos caracterew

  if(str.toLowerCase().endsWith("ar")){
  	translate=str.slice(0,-2)
  	
  }
  // si la palabra inicia con Z se añade las letras "pe" al final
  if(str.toLowerCase().startsWith('z')){
     //translate = translate + "pe"
     translate+="pe"
     
  }
  //Si la palabra traducida tiene 10 o màs letras, colocar - en medio
   const length = translate.length
  if(length>=10){
   const firstHalf = translate.slice(0, Math.round(length/2))
   const secondHalf = translate.slice( Math.round(length/2))

   translate=`${firstHalf}-${secondHalf}`

  }
   const reverse=(str)=> str.split('').reverse().join('')

   function minMay(str){
   	const length=str.length
   	let translate=''
   	let capitalize=true 

   	for (let i = 0; i<length;i++){
   		const char = str.charAt(i)
   		translate += capitalize ? char.toUpperCase() :char.toLowerCase()
   		capitalize = !capitalize
   	}  
      return translate
   }


  if (str == reverse(str)) {
  	return minMay(str)
  }

  //si es un palindromo, se devuelve la misma palabra intercalando Mayus y minus

  return translate
 }

 platzom("sometemos")
 platzom("ferrocarril")
 platzom("zorrope")
 platzom("atacar")
