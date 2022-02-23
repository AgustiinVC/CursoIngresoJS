function mostrar()
{
	let numeroIngresado;
	let cantidadPares = 0;

	numeroIngresado = prompt ("Ingrese su numero:");
	numeroIngresado = parseInt (numeroIngresado);
	
	document.write ("Los números pares son: <br>");

	for (let i = 1; i < (numeroIngresado + 1); i++)
	{
		if (i % 2 == 0)
		{
			document.write (i + "<br>");
			cantidadPares++
		}
	}
	document.write ("Cantidad de números pares: " + cantidadPares);


}//FIN DE LA FUNCIÓN