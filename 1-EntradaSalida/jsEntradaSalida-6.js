/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var valueOne = document.getElementById("numeroUno").value;
	var valueTwo = document.getElementById("numeroDos").value;
	var numberOne = parseInt(valueOne); 
	var numberTwo = parseInt(valueTwo);
	var total = numberOne + numberTwo;
	alert("la suma es " + total);
	console.log("La suma es " + (numberOne + numberTwo));
}

