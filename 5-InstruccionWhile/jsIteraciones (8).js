function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta == "si"){
		contador++;
		var numeros = parseInt(prompt("Ingrese numeros"));
		console.log(numeros);
		if(numeros >= 0){
			positivo += numeros;
		} else {
			negativo *= numeros;
		}
		respuesta = prompt ("¿Desea continuar?");
		console.log("¿Desea continuar? " + respuesta);
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN