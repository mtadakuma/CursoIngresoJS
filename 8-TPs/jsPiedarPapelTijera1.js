/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()*(4-1))+1;
	console.log(eleccionMaquina);
	
	/*if (eleccionMaquina == 1){
		console.log(eleccionMaquina + " Piedra");
	} else if (eleccionMaquina == 2){
		console.log(eleccionMaquina + " Papel");
	} else {
		console.log(eleccionMaquina + " Tijera");
	}*/



}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1){
		alert("Eligió Pieda, Empató");
		console.log("Pieda, Empató");
	} else if (eleccionMaquina == 2){
		alert("Eligió Piedra, Perdió");
		console.log("Piedra, Perdió")
	} else {
		alert("Eligió Pieda, Ganó");
		console.log("Pieda, Ganó");
	}
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 1){
		alert("Eligió Papel, Ganó");
		console.log("Papel, Ganó");
	} else if (eleccionMaquina == 2){
		alert("Eligió Papel, Empató");
		console.log("Papel, Empató")
	} else {
		alert("Eligió Papel, Perdió");
		console.log("Papel, Perdió");
	}

	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 1){
		alert("Eligió Tijera, Perdió");
		console.log("Tijera, Perdió");
	} else if (eleccionMaquina == 2){
		alert("Eligió Tijera, Ganó");
		console.log("Tijera, Ganó")
	} else {
		alert("Eligió Tijera, Empató");
		console.log("Tijera, Empató");
	}
	comenzar();
}//FIN DE LA FUNCIÓN