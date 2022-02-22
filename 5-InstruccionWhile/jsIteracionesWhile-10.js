/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let respuesta;

    let sumaPositivo = 0;
    let sumaNegativo = 0;

    let cantidadPositivos = 0;
    let cantidadNegativos = 0;
    let cantidadCeros = 0;
    let cantidadPares = 0;

    let promedioNegativos = 0;
    let promedioPositivos = 0;
    let diferenciaPosNeg = 0;

    let flag = 0;

	respuesta = prompt ("¿Quiere ingresar un número?");
	respuesta = respuesta.toLowerCase();

	while (respuesta == "si")
	{
        flag = 1;
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt (numeroIngresado);
        if (numeroIngresado % 2 == 0)
        {
            cantidadPares++;
        }
		
        if (numeroIngresado > 0)
        {
            cantidadPositivos++;
            sumaPositivo += numeroIngresado;
        }
        else if (numeroIngresado < 0)
        {
            cantidadNegativos++;
            sumaNegativo += numeroIngresado;
        }
        else
        {
            cantidadCeros++;
        }
		
		respuesta = prompt ("¿Quiere ingresar otro número?");
		respuesta = respuesta.toLowerCase();
	}

	if (flag == 0)
	{
		document.write ("No ingresaste nada. ");
	}
	else 
	{
        promedioNegativos = sumaNegativo / cantidadNegativos;
        promedioPositivos = sumaPositivo / cantidadPositivos;
        diferenciaPosNeg = promedioPositivos - promedioNegativos;

		document.writeln (`Ingresaste ${cantidadPositivos} números positivos, su suma es: ${sumaPositivo}. <br>`);
        document.writeln (`Ingresaste ${cantidadNegativos} números negativos y su suma es: ${sumaNegativo}. <br>`);
        document.writeln (`Ingresaste ${cantidadPares} números pares. <br>`);
        document.writeln (`Ingresaste ${cantidadCeros} ceros <br>`);
        document.writeln (`El promedio de numeros positivos es: ${promedioPositivos}. <br>`);
        document.writeln (`El promedio de numeros negativos es: ${promedioNegativos}. <br>`);
        document.writeln (`La diferencia entre los promedios negativo y positivo es: ${diferenciaPosNeg}. <br>`);
	}
}//FIN DE LA FUNCIÓN