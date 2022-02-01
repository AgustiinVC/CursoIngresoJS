function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById ("txtIdEdad").value);

	if (edad >= 18)
	{
		alert (`Tiene ${edad} años por lo que es mayor de edad`);
	}
}//FIN DE LA FUNCIÓN