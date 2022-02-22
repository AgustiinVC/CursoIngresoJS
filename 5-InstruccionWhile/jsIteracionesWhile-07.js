/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let respuesta;
	let suma = 0;
	let promedio = 0;
	let numeroIngresado;
	let mensajeSuma;
	let mensajePromedio;

	respuesta = prompt ("¿Quiere ingresar un número?");
	respuesta = respuesta.toLowerCase ();

	while (respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt (numeroIngresado);

		suma += numeroIngresado;
		contador++;

		respuesta = prompt ("¿Quiere ingresar otro número?");
		respuesta = respuesta.toLowerCase ();
	}

	if (contador == 0)
	{
		mensajeSuma = "No hay suma porque no ingresaste nada."
		mensajePromedio = "No se puede calcular el promedio";
	}
	else 
	{
		promedio = suma / contador;
		mensajeSuma = "La suma es: " + suma;
		mensajePromedio = "El promedio de " + contador + " números es: " + promedio;
	}

	document.getElementById ("txtIdSuma").value = mensajeSuma;
	document.getElementById ("txtIdPromedio").value = mensajePromedio;

}//FIN DE LA FUNCIÓN