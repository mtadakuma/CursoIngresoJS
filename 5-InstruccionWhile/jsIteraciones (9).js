function Mostrar()
{

	var contador=0;
	// declarar variables
	var max = 0;
	var min = 0;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		var numero = parseInt(prompt("Ingrese numero"));
		if (numero > max){
			max = numero;
		} else if (numero < min) { // no me reconoce el else if porque solo toma IF ver
			min = numero;
		} else {
			console.log(numero);
		}
		respuesta = prompt("¿Desea seguir?");
		console.log(respuesta);
	}

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN