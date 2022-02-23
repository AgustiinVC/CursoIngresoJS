function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt ("Ingrese un numero de repeticiones:");
	numeroIngresado = parseInt (numeroIngresado);

	for (let i = 0 ;; i++)
	{
		if (numeroIngresado == i)
		{
			break;
		}
	}
	alert ("Fuera del For");
}//FIN DE LA FUNCIÓN