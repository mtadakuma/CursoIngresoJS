function Mostrar()
{
var num = parseInt(prompt("Ingrese numero"));
console.log(num);
var contDivisores = 0;

for(var i=0; i<=parseInt(num/2)+1; i++){ //mas eficiente el programa
	if(num%i==0){
		contDivisores++;
	}
}

if(contDivisores > 2){
	console.log("El numero ingresado no es primo");
} else {
	console.log("El numero ingresado es Primo");
}

}//FIN DE LA FUNCIÓN