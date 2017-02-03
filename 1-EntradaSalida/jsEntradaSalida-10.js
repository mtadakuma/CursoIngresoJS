/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var valorSalario = document.getElementById("importe").value;
	var sueldo = parseInt(valorSalario/*,10*/);
	/*var total = sueldo - sueldo*0.25;*/
	var total = sueldo * 0.75;
	document.getElementById("resultado").value = total
}
