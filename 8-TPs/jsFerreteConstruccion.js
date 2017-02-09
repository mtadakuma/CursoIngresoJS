/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = parseInt(document.getElementById("Largo").value);
	var ancho = parseInt(document.getElementById("Ancho").value);
	var rectanguloDeAlambre = /*2*/ 6 * (largo + ancho);
	console.log("Se tienen que comprar " + rectanguloDeAlambre + " metros de alambre. Cada pieza debería ser de " 
		+ Math.floor(rectanguloDeAlambre / 3) + " metros cada uno.");
}
function Circulo () 
{
	var radio = parseInt(document.getElementById("Radio").value)
	var largo = parseInt(document.getElementById("Largo").value);
	var circuloDeAlambre = (2* 3.14 *radio);
	console.log("Se tienen que comprar " + circuloDeAlambre + " metros de alambre. Cada pieza debería ser de " 
		+ Math.floor(circuloDeAlambre / 3) + " metros cada uno.");
}
function Materiales () 
{
	var largo = parseInt(document.getElementById("Largo").value);
	var ancho = parseInt(document.getElementById("Ancho").value);
	var rectanguloDeAlambre = (largo * ancho);
	var bolsasCemento = 2 * rectanguloDeAlambre;
	var bolsasCal = 3 * rectanguloDeAlambre;
	console.log("Se necesitan " + bolsasCemento + " bolsas de Cemento y se necesitan " + bolsasCal + 
		" bolsas de Cal" );
}