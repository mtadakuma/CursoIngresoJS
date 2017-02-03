/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var valorUno = document.getElementById("numeroDividendo").value;
	var valorDos = document.getElementById("numeroDivisor").value;
	var numeroDividendo = parseInt(valorUno);
	var numeroDivisor = parseInt(valorDos);
	var total = numeroDividendo % numeroDivisor;
	alert("el resto es " + total);
}
