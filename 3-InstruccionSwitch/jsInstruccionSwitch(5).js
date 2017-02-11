function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
/*
//alert (laHora);
	switch(laHora){
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.");
			break;
		default:
			alert("No es de mañana.");
			break;

	}
*/
var numLaHora = parseInt(laHora);	
/*
switch(numLaHora){ //Si no paso a Number con parseInt me va a dar error
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			alert("No es de mañana.");
			break;

	}

*/
if(laHora >= 7 && laHora <=11){
	alert("Es de mañana.");
} else {
	alert("No es de mañana");
}


}//FIN DE LA FUNCIÓN