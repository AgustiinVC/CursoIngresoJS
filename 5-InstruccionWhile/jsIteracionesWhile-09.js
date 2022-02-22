/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let maximo;
	let minimo;
	let flag = 0;
	let mensajeMaximo;
	let mensajeMinimo;

	respuesta = prompt ("¿Quiere ingresar un número?");
	respuesta = respuesta.toLowerCase();

	while (respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt (numeroIngresado);
		flag ++;

		if (flag == 1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}

		
		if (numeroIngresado > maximo)
		{
			maximo = numeroIngresado;
		}
		else if (numeroIngresado < minimo)
		{
			minimo = numeroIngresado;
		}
		
		respuesta = prompt ("¿Quiere ingresar otro número?");
		respuesta = respuesta.toLowerCase();
	}

	if (flag == 0)
	{
		mensajeMaximo = "No hay máximos porque no ingresaste nada."
		mensajeMinimo = "No hay mínimos porque no ingresaste nada";
	}
	else 
	{
		mensajeMaximo = "El número máximo es: " + maximo;
		mensajeMinimo = "El número máximo es: " + minimo;
	}

	document.getElementById ("txtIdMaximo").value = mensajeMaximo;
	document.getElementById ("txtIdMinimo").value = mensajeMinimo;

}//FIN DE LA FUNCIÓN