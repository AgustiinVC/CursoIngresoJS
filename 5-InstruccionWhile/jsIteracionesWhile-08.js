/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let suma = 0;
	let producto = 1;
	let respuesta;
	let numeroIngresado = 0;
	let flag = 0;
	let mensajeSuma;
	let mensajeProducto;

	respuesta = prompt ("¿Quiere ingresar un número?");
	respuesta = respuesta.toLowerCase();
	
	while (respuesta == "si")
	{
		flag = 1;
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt (numeroIngresado);

		if (numeroIngresado > 0)
		{
			suma += numeroIngresado;
		}
		else if (numeroIngresado < 0)
		{
			producto *= numeroIngresado;
		}

		respuesta = prompt ("¿Quiere ingresar otro número?");
		respuesta = respuesta.toLowerCase();
	}
	
	if (flag == 0)
	{
		mensajeSuma = "No hay suma porque no ingresaste nada."
		mensajeProducto = "No ingresaste ningún número";
	}
	else 
	{
		mensajeSuma = "La suma es: " + suma;
		mensajeProducto = "El producto de los negativos es: " + producto;
	}

	document.getElementById ("txtIdSuma").value = mensajeSuma;
	document.getElementById ("txtIdProducto").value = mensajeProducto;


}//FIN DE LA FUNCIÓN

/* function mostrar()
{
	let suma = 0;
	let producto = 1;
	let respuesta;
	let numeroIngresado = 0;

	do
	{
		respuesta = prompt ("¿Quiere ingresar un número?");
		respuesta = respuesta.toLowerCase();

		if (respuesta == "si")
		{
			numeroIngresado = prompt ("Ingrese un número:");
			numeroIngresado = parseInt (numeroIngresado);

			if (numeroIngresado > 0)
			{
				suma += numeroIngresado;
			}
			else if (numeroIngresado < 0)
			{
				producto = producto * numeroIngresado;
			}
		}
	}
	while (respuesta == "si");

	document.getElementById ("txtIdSuma").value = "La suma es: " + suma;
	document.getElementById ("txtIdProducto").value = "El producto de los negativos es: " + producto;


}//FIN DE LA FUNCIÓN */