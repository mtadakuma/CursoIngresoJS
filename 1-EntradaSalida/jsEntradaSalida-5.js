/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre = document.getElementById("elNombre").value;
	var edad = document.getElementById("laEdad").value;
	var msj = "Usted se llama " + nombre + " y tiene " + edad + " años";
	alert(msj);


	console.log("Usted se llama " + nombre + " y tiene " + edad + " años");
}

