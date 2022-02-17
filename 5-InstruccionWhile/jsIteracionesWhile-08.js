/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
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


}//FIN DE LA FUNCIÓN