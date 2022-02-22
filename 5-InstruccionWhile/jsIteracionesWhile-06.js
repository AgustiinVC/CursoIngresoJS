function mostrar()
{
	let contador = 0;
	let suma = 0;
	let promedio = 0;
	let numerosIngresados;
	const CANTIDAD_NUMEROS = 5;
	
	while (contador < CANTIDAD_NUMEROS)
	{
		numerosIngresados = prompt("Ingrese el Número");
		numerosIngresados = parseInt (numerosIngresados);
		
		contador++;

		suma += numerosIngresados;
	}
	
	promedio = suma / contador;

	document.getElementById ("txtIdSuma").value = "La suma es: " + suma;
	document.getElementById ("txtIdPromedio").value = "El promedio es: " + promedio;

}//FIN DE LA FUNCIÓN

/*
function mostrar()
{
	let contador = 0;
	let suma = 0;
	let promedio = 0;
	let numerosIngresados;
	let numerosIngresadosParseado = 0;
	const CANTIDAD_NUMEROS = 5;

	do
	{
		numerosIngresados = prompt("Ingrese el Número");
		numerosIngresadosParseado = parseInt (numerosIngresados);
		
		if (numerosIngresados === "") //solo valida prompt vacios.
		{
			alert ("No ingreso nada");
		}
		else
		{
			contador++;
			suma += numerosIngresadosParseado;
		}
	}
	while (contador < CANTIDAD_NUMEROS);

	promedio = suma / contador;

	document.getElementById ("txtIdSuma").value = "La suma es: " + suma;
	document.getElementById ("txtIdPromedio").value = "El promedio es: " + promedio;

}//FIN DE LA FUNCIÓN  */