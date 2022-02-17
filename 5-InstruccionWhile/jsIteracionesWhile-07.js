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

	do
	{
		contador++;

		respuesta = prompt ("¿Quiere ingresar un número?");
		respuesta = respuesta.toLowerCase ();
		if (respuesta == "si")
		{
			numeroIngresado = prompt ("Ingrese el número");
			numeroIngresado = parseInt (numeroIngresado);

			suma += numeroIngresado;
		}
	}
	while (respuesta == "si")
	
	promedio = suma / contador;

	document.getElementById ("txtIdSuma").value = "La suma es: " + suma;
	document.getElementById ("txtIdPromedio").value = "El promedio de " + contador + " números es: " + promedio;

}//FIN DE LA FUNCIÓN