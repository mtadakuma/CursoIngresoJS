/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var name = document.getElementById("elNombre").value;
	var age = document.getElementById("laEdad").value;
	console.log("Usted se llama " + name + " y tiene " + age + " años");
}

