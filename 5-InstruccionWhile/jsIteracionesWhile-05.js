/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	let flag = 0;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase();
	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		alert ("Dato ingresado incorrecto");
		sexoIngresado = prompt("ingrese f ó m .");
		sexoIngresado = sexoIngresado.toLowerCase();
	}
	
	document.getElementById("txtIdSexo").value = "Tu sexo es: " + sexoIngresado;

}//FIN DE LA FUNCIÓN

/*
function mostrar()
{
	var sexoIngresado;
	let flag = 0;

	do
	{
		sexoIngresado = prompt("ingrese f ó m .");
		sexoIngresado = sexoIngresado.toLowerCase();

		if (sexoIngresado == "f" || sexoIngresado == "m")
		{
			mensaje = "El sexo que se ingreso es: " + sexoIngresado;
			flag = 1;
		}
		else
		{
			mensaje = "Informacion ingresada no válida."
		}

		document.getElementById("txtIdSexo").value = mensaje;

	}
	while (flag != 1);

}//FIN DE LA FUNCIÓN
*/