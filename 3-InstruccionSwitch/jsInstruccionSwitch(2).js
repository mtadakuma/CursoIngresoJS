function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
/*
switch(mesDelAño){
	case "Enero": //Mientras no se ponga un break, la ejecución del codigo va a seguir hasta encontrar un break
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno.");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio.");
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	default:
		console.log(1);
		break;
}
*/
if (mesDelAño=="Enero"||mesDelAño=="Febrero"||mesDelAño=="Marzo"||mesDelAño=="Abril"||mesDelAño== "Mayo"||mesDelAño=="Junio")
{
	alert("Falta para el invierno.");
} else if (mesDelAño == "Julio"|| mesDelAño == "Agosto"){
	alert("Abrigate que hace frio.")
} else if (mesDelAño == "Septiembre" || mesDelAño == "Octubre" || mesDelAño == "Noviembre"|| mesDelAño == "Diciembre"){
	alert("Ya pasamos el frio, ahora calor!!!.");
} else {
	alert("Mes inexistente");
}

}//FIN DE LA FUNCIÓN