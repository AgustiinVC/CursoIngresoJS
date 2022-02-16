var contador = 0;
var miIntervalo;

function inicio()
{
	miIntervalo = setInterval (SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() 
{
	contador += 1;
	alert ("Bienvenidos a las UTN FRA, contador: " + contador);

	if (contador == 5)
	{
		fin();
	}
	
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	let mensaje;
	clearInterval (miIntervalo);
	if (contador == 5)
	{
		mensaje = "Se detuvo la función. Se repitio 5 veces.";
	}
	else 
	{
		mensaje = "Detuviste la función. Se mostraron " + contador + " mensajes.";
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN fin


