/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var valueOne = document.getElementById("numeroUno").value;
	var valueTwo = document.getElementById("numeroDos").value;
	var numberOne = parseInt(valueOne/*, 10*/);
	var numberTwo = parseInt(valueTwo/*, 10*/);
	var total = numberOne + numberTwo;
	alert("la suma es " + total);
}

function restar()
{
	var valueOne = document.getElementById("numeroUno").value;
	var valueTwo = document.getElementById("numeroDos").value;
	var numberOne = parseInt(valueOne/*, 10*/);
	var numberTwo = parseInt(valueTwo/*, 10*/);
	var total = numberOne - numberTwo;
	alert("la resta es " + total);
}

function multiplicar()
{ 
	var valueOne = document.getElementById("numeroUno").value;
	var valueTwo = document.getElementById("numeroDos").value;
	var numberOne = parseInt(valueOne/*, 10*/);
	var numberTwo = parseInt(valueTwo/*, 10*/);
	var total = numberOne * numberTwo;
	alert("la multiplicacion es " + total);
}

function dividir()
{
	var valueOne = document.getElementById("numeroUno").value;
	var valueTwo = document.getElementById("numeroDos").value;
	var numberOne = parseInt(valueOne/*, 10*/);
	var numberTwo = parseInt(valueTwo/*, 10*/);
	var total = numberOne / numberTwo;
	alert("la division es " + total);
}

//No es necesario poner la base en funcion parseInt porque no trabajamos con numeros tan complicados