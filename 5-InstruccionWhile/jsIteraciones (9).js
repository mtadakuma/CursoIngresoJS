function Mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var respuesta='si';
	var primera = true;

	while(confirm("¿Desea continuar?"))
	{
		contador++;
		var numero = parseInt(prompt("Ingrese numero"));
		if (primera){
			primera = false;
			max = numero;
			min = numero; // Creamos una bandera para poder poner el primer valor
		} else if (numero > max) {
			max = numero;
		} else {
			min = numero;			
		}

	}

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN