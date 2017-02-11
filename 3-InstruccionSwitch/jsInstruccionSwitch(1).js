function Mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
	case "Enero":
		console.log("que comiences bien el año!!!.");
		break;
	case "Marzo":
		console.log("a clases!!!.");
		break;
	case "Julio":
		console.log("se vienen las vacaciones!!!.");
		break;
	case "Diciembre": 
		console.log("Felices fiesta!!!.");
		break;
	default:
		console.log("En este mes no pasa nada.");
		break;
}

/*
if(mesDelAño == "Enero") {
	console.log("Que comiences bien el año!!!.");
} else if (mesDelAño == "Marzo"){
	console.log("A clases!!.");
} else if (mesDelAño == "Julio"){
	console.log("Se vienen las vacaciones!!.");
} else if (mesDelAño == "Diciembre"){
	console.log("Felices fiestas!!.");
} else {
	console.log("El mes no es valido.");
}
*/

}//FIN DE LA FUNCIÓN