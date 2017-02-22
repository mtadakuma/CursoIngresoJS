var parar = false;
function Mostrar()
{
	parar = true;
}

for(var i = 0; ; i++){

	if(i==100000){
		console.log(i);
		i=0;
    }
    if(parar){
    	console.log("FIN");
		break;
    }
}


//FIN DE LA FUNCIÓN