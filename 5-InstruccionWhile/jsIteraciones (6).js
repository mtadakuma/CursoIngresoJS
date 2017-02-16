function Mostrar()
{

	var contador=0;
	var acumulador=0;
	while(contador < 5){
		contador++;
		/*console.log(contador + " Contador");*/
		var numeros = parseInt(prompt("Ingrese numero."));
		console.log(numeros + " Numero Ingresado");
		acumulador += numeros;
		/*console.log(acumulador + " Acumulador");*/
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN