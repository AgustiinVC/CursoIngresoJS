function mostrar()
{
	let edad, estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	/*if (edad >= 18 && estado == "Soltero")
	{
		alert ("Es soltero y no es menor");
	} //forma mas simplificada */

	if (edad <18 && estado != "Soltero")
	{

	}
	else if (edad >= 18 && estado == "Soltero")
	{
		alert ("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN