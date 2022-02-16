var miTemporizador;
var tiempoInicio;
var tiempoFinal;

function inicio()
{
	miTemporizador = setTimeout (SegundosEnElAire, 3000);
	document.getElementById ("secreto").style.visibility = "hidden";
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() 
{
	document.getElementById ("secreto").style.visibility = "visible";
	tiempoInicio = new Date();
	tiempoInicio = tiempoInicio.getTime();
}//FIN DE LA FUNCIÓN SegundosEnElAire

function ContarMilisegundos()
{
	let resultado;

	tiempoFinal = new Date ();
	tiempoFinal = tiempoFinal.getTime ();

	resultado = tiempoFinal - tiempoInicio;

	alert ("El tiempo que paso fue de: " + resultado + " milisegundos.");

}//FIN DE LA FUNCIÓN fin