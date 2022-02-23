function mostrar()
{
	let numeroIngresado;
	for (;;)
	{
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado == 9)
		{
			break;
		}
	}
	alert ("Saliste del For");

}//FIN DE LA FUNCIÓN
