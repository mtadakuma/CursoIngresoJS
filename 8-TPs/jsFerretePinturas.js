/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempFarenheit = parseInt(document.getElementById("Temperatura").value);
	var tempCentigrados = (tempFarenheit - 32) / 1.8;
	console.log(tempFarenheit + " Farenheit son " + tempCentigrados + " centígrados.");
}

function CentigradosFahrenheit () 
{
	var tempCentigrados = parseInt(document.getElementById("Temperatura").value);
	var tempFarenheit = (tempCentigrados * 1.8) + 32;
	console.log(tempCentigrados + " Centigrados son " + tempFarenheit + " Farenheit.");
}
