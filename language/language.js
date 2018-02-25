function myFunction() {
    var x = document.getElementById("myText").value.toString();
      
    dividir(x)

    
 


}
var odd_numbers = []


function dividir(j){
 var array= j
 const res=array.split(" ")
 res.forEach(translate)
 document.getElementById("demo").innerHTML =odd_numbers;
console.log(`${odd_numbers}`)

}

function translate(str){
	const word= str
	
	odd_numbers.push(word.slice(0,-1)+"i")

}



  
    // bucle del 1 al 5
    // for(var i=0;i<=res.length;i++)
    // {
    	
    //


 //    document.getElementById("demo").innerHTML = element.toString()
 // res.forEach(function(element){
      
 //       element.slice(0,-1)+"i"
 //       })




    // //console.log(`${res[i]}`)

    
    // }

   
//res[i].slice(0,-1)+"i"
 
 //console.log(`${miArray[1]}`)
 
 //translate(res)
 


// function translate(str){
// 	var trans = str
// 	const tr= trans.slice(0,-1)+"i"
//    console.log(`${tr}`)
// }
// .slice(0,-1)+"i"