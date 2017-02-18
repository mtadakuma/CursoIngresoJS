function Mostrar()
{
/*	alert('iteración while');
	var num = 1;
	while(num < 11){
		console.log(num);
		++num;
	}
*/
var nota;
var contAlumnos;
var contAprob;
var contDiez;
var acumNotas;
var acumAprob;
var sexo;
var cantMasc;
var cantFem;

while(confirm("¿Desea continuar?")){
	nota = parseInt(prompt("Ingrese nota"));
	sexo = prompt("Ingrese sexo");
	contAlumnos++;
	acumNotas+= nota;
	if(nota > 4){
		acumAprob+= nota;
		contAprob ++;
	}
	if (nota == 10){
		contDiez++;
	}
	if (sexo != "F"){
		cantMasc++;
	} else {
		cantFem++;
	}



}

}//FIN DE LA FUNCIÓN