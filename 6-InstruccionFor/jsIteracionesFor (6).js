function Mostrar()
{
	var numero = parseInt(prompt("Ingrese numero"));
	console.log(numero);
	var contPares=0;

	for(var i=1;i<=numero; i++){
		if(i%2==0){
			console.log(i);
			contPares++;
		}
	}

	console.log("Hay " + contPares + " numeros pares.");



}//FIN DE LA FUNCIÓN