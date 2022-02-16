var miTemporizador;

function inicio()
{
	miTemporizador = setTimeout (SegundosEnElAire, 3000);
	document.getElementById ("secreto").style.visibility = "hidden";	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() 
{
   document.getElementById ("secreto").style.visibility = "visible";
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert ("Boton El Oculto");
}