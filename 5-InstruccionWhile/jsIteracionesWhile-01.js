/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	let contador = 0;
	while (contador < 10)
	{
		contador++;
		alert ("Repeticiones: " + contador);
	}

}//FIN DE LA FUNCIÓN 

/*
function mostrar() //Entra la primera vez al loop sin condicion
{
	let i = 0;
	do
	{
		i++;
		alert ("Repeticiones: " + i);
	}
	while (i<10);

}//FIN DE LA FUNCIÓN
*/