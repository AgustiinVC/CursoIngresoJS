/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	
	claveIngresada = prompt("Ingrese la clave.");

	while (claveIngresada != "utn750")
	{
		alert ("Clave incorrecta, intente de vuelta.")
		claveIngresada = prompt("Ingrese la clave:");
	}

	alert ("Clave validada.");

}//FIN DE LA FUNCIÓN

/*unction mostrar()
{
	var claveIngresada;
	
	do 
	{
		claveIngresada = prompt("Ingrese la clave.");
	}
	while (claveIngresada != "utn750")

	alert ("Clave validada.");

}//FIN DE LA FUNCIÓN */
