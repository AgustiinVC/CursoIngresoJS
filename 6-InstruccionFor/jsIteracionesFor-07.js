function mostrar()
{
	let numeroIngresado;
	let cantidadDivisores = 0;

	numeroIngresado = prompt ("Ingrese un numero:");
	numeroIngresado = parseInt (numeroIngresado);

	document.write ("Los números divisores son: <br>");

	for (let i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado % i == 0)
		{
			cantidadDivisores++;
			document.write (i + "<br>");
		}
	}

	document.write ("Hay un total de: " + cantidadDivisores + "<br>");

}//FIN DE LA FUNCIÓN