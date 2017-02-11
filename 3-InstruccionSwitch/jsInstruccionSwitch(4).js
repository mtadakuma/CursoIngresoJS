function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){
	case "Febrero":
		alert("Este mes tiene 28 días.");
		break;
	case "Enero":
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Este mes tiene 30 días.");
		break;
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre": 
		alert("Este mes tiene 31 días.");
		break;
	default: 
		alert("Something went wrong");
		break;

}
	



}//FIN DE LA FUNCIÓN