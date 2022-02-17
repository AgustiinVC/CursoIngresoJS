/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let maximo = 0;
	let minimo = 0;
	let flag = 0;

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
		
		respuesta = prompt ("¿Quiere ingresar otro un número?");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById ("txtIdMaximo").value = "El número máximo es: " + maximo;
	document.getElementById ("txtIdMinimo").value = "El número máximo es: " + minimo;

}//FIN DE LA FUNCIÓN


/*
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}

*/