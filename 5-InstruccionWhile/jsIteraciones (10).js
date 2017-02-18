function Mostrar()
{
	var numero;
	var contador=0; // Todos los numeros
	console.log(contador);
	//declarar contadores y variables 
	var positivos = 0;
	var negativos = 0;
	var contPositivos = 0;
	var contNegativos = 0;
	var contCeros = 0;
	var contNumPar = 0;


	while(confirm("¿Desea continuar?"))
	{
		contador++;
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero > 0) {
			contPositivos++;
			positivos += numero;
		} else if (numero < 0){
			contNegativos++;
			negativos += numero;
		} else{
			contCeros++;
		} 
		if (numero%2==0) {
			contNumPar++;
		}
	}
//FIN DE LA FUNCIÓN

console.log( " Positivos: " + positivos, 
	" Negativos: " + negativos,
	" Contador de Positivos: " + contPositivos,
	" Contador de Negativos: " + contNegativos,
	" Contador de Ceros: " + contCeros,
	" Contador de Numeros Pares: " +contNumPar,
	" Promedio de Negativos: " + (negativos / contNegativos),
	"Diferencia entre Negativos y Positivos: " + (positivos - negativos)
	);

}

/*
function Mostrar()
{
	var num;
	var contador=0; // Todos los numeros
	//declarar contadores y variables 
	var acumPositivos = 0;
	var acumNegativos = 0;
	var contPositivos = 0;
	var contNegativos = 0;
	var contCeros = 0;
	var contNumPar = 0;

	while(confirm("¿Desea continuar?")){
		num = parseInt(prompt("Ingrese numero"));
		if(num < 0){
			contNegativos++;
			acumNegativos+=num;
		} else if (num > 0) {
			contPositivos ++;
			acumPositivos += num;
		} else {
			contCeros++;
		}
		if(num%2 ==0){
			contNumPar++;
		}

	}
}
*/