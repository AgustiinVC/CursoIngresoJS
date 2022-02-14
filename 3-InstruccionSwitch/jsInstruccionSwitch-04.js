function mostrar()
{
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Abril": 
		case "Junio": 
		case "Septiembre": 
		case "Noviembre":
			mensaje = "Este mes tiene 30 días.";
			break;

		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;
		
		default:
			mensaje = "Este mes tiene 31 días.";
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN