function mostrar()
{
	let numeroIngresado;
	let cantidadDivisores = 0;
	let mensaje;

	numeroIngresado = prompt ("Ingrese un número:");
	numeroIngresado = parseInt (numeroIngresado);

	for (i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado % i == 0)
		{
			cantidadDivisores++;
		}
	}

	if (cantidadDivisores == 2)
	{
		mensaje = "El número: " + numeroIngresado + " es primo.";
	}
	else
	{
		mensaje = "El número: " + numeroIngresado + " no es primo.";
	}

	alert (mensaje);
}//FIN DE LA FUNCIÓN