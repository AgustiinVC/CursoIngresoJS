function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			alert ("Este mes no tiene mas de 29 dias.");
		break;
		
		default:
			alert("Este mes tiene 30 o más dias");
	}
	


}//FIN DE LA FUNCIÓN