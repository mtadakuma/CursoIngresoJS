function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor((Math.random() * /*10*/ (11-1)) + 1);
    /* alert(random); */
    if (random >= 9) {
    	/* alert("EXCELENTE!!"); */
    	console.log(random, "EXCELENTE!!");
    } else if (random >= 4){
    	/* alert ("APROBO"); */
    	console.log(random, "APROBO");
    } else {
    	/* alert ("Vamos, la proxima se puede"); */
    	console.log(random, "Vamos, la proxima se puede");
    }
}//FIN DE LA FUNCIÓN