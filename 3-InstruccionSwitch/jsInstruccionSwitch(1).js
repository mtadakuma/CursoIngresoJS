function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":
	{
		console.log("que comiences bien el año!!!.");
		break;
	}
	case "Marzo":
	{
		console.log("a clases!!!.");
		break;
	}
	case "Julio":
	{
		console.log("se vienen las vacaciones!!!.");
		break;
	}
	case "Diciembre": 
	{
		console.log("Felices fiesta!!!.");
		break;
	}
	default:
	{
		console.log("You get nothing");
		break;
	}
}



}//FIN DE LA FUNCIÓN