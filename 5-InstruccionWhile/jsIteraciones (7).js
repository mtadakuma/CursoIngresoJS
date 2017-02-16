function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta == "si"){
		contador++;
		var numeros = parseInt(prompt("Ingrese numeros"));
		console.log(numeros);
		acumulador+=numeros;
		respuesta = prompt ("¿Desea continuar?");
		console.log(respuesta);
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN