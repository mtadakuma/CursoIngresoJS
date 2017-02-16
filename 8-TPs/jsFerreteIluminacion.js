/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*
function CalcularPrecio () 
{
 	var cantLamp = parseInt(document.getElementById("Cantidad").value);
 	var tipoLamp = document.getElementById("Marca").value;
 	var precioFinal = cantLamp * 35; 
 	console.log(precioFinal);
 	var total;
 	if (cantLamp >=6 && tipoLamp == "ArgentinaLuz"){
 		total = precioFinal*0.50;
 	} else if(cantLamp == 5 && tipoLamp == "ArgentinaLuz"){
 		total = precioFinal*0.60;
 	} else if (cantLamp == 5 &&  tipoLamp != "ArgentinaLuz"){
 		total = precioFinal*0.70;
 	} else if (cantLamp == 4 && (tipoLamp =="ArgentinaLuz" || tipoLamp == "FelipeLamparas")){
 		total = precioFinal * 0.75;
 	} else if (cantLamp == 4 && (tipoLamp != ""))

 	else {
 		console.log("Error");
 	}
 	document.getElementById("precioDescuento").value = total;   
*/

function CalcularPrecio () 
{
 	var cantLamp = parseInt(document.getElementById("Cantidad").value);
 	var tipoLamp = document.getElementById("Marca").value;
 	var total = cantLamp * 35
 	document.getElementById("precioDescuento").value = desc;
 	
	switch (cantLamp){
		case 5:
			if(tipoLamp == "ArgentinaLuz"){
				desc = total*0.60;
			} else {
				desc = total*0.70;
			}
			break;
		case 4:
			if(tipoLamp == "ArgentinaLuz" || tipoLamp == "FelipeLamparas"){
				desc = total * 0.75;
			} else {
				desc = total * 0.80;
			}
			break;
		case 3: 
			if(tipoLamp == "ArgentinaLuz"){
				desc = total * 0.85;
			} else if (tipoLamp == "FelipeLamparas") {
				desc = total * 0.90;
			} else {
				desc = total * 0.95;
			}
			break;
		default:
				if(cantLamp>= 6){
					desc = total*0.50;
				} else {
					desc = total;
				} 
			break;

		}
}

