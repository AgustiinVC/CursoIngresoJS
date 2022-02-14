function mostrar()
{
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;
/*
	switch (mes)
	{
		case "Enero": 
		case "Febrero": 
		case "Marzo": 
		case "Abril": 
		case "Mayo": 
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		case "Julio": 
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre": 
		case "Octubre": 
		case "Noviembre": 
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
	}*/
	
	switch (mes)
	{
		case "Julio": 
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		case "Septiembre": 
		case "Octubre": 
		case "Noviembre": 
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
			break;
		
		default:
			mensaje = "Falta para el invierno.";
	}

	alert (mensaje);
	
}//FIN DE LA FUNCIÓN