var miTemporizador;

function inicio()
{
	miTemporizador = setTimeout (SegundosEnElAire, 3000);
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() 
{
	document.getElementById ("secreto").style.visibility = "visible";

}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert ("Encontraste el boton Oculto.")
}//FIN DE LA FUNCIÓN fin