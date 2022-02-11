/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 	



}//FIN DE LA FUNCIÓN
function piedra()
{
	let mensaje;

	if (eleccionMaquina == 1)
	{
		mensaje = "Empataste.";
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Perdiste.";
	}
	else 
	{
		mensaje = "Ganaste.";
	}
	alert (mensaje);
    
	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 
    /* La linea anterior la coloco si quiero jugar varias veces
    sin la necesidad de refrescar la página */

}//FIN DE LA FUNCIÓN
function papel()
{
	let mensaje;

	if (eleccionMaquina == 1)
	{
		mensaje = "Ganaste.";
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Empataste.";
	}
	else 
	{
		mensaje = "Perdiste.";
	}
	alert (mensaje);
    
	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 

}//FIN DE LA FUNCIÓN
function tijera()
{
	let mensaje;

	if (eleccionMaquina == 1)
	{
		mensaje = "Perdiste.";
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Ganaste.";
	}
	else 
	{
		mensaje = "Empataste.";
	}
	alert (mensaje);

    
	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 

}//FIN DE LA FUNCIÓN