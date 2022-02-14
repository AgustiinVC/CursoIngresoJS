function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!";
			break;
		
		case "Marzo":
			mensaje = "A clases!!!";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaiones";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;

		default:
			mensaje = "Un mes como cualquier otro";
	}
	alert (mensaje);

}//FIN DE LA FUNCIÓN