function Mostrar()
{
	var num = parseInt(prompt("Ingrese numero"));
	var contDivisores=0;

	for(var i=1; i <=num; i++){
		if(num%i== 0){
			console.log(i);
			contDivisores++;
		}
	}

	console.log("Hay " + contDivisores + " divisores de " + num);



}//FIN DE LA FUNCIÓN