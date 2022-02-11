var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

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
		ContadorDeEmpates += 1;
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Perdiste.";
		ContadorDePerdidas += 1;
	}
	else 
	{
		mensaje = "Ganaste.";
		ContadorDeGanadas += 1;
	}
	alert (mensaje);
	mostrarResultado();

	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 

}//FIN DE LA FUNCIÓN
function papel()
{
	let mensaje;

	if (eleccionMaquina == 1)
	{
		mensaje = "Ganaste.";
		ContadorDeGanadas += 1;
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Empataste.";
		ContadorDeEmpates += 1;
	}
	else 
	{
		mensaje = "Perdiste.";
		ContadorDePerdidas += 1;
	}
	alert (mensaje);
	mostrarResultado();

	eleccionMaquina = Math.round(Math.random() * (3-1) + 1); 

}//FIN DE LA FUNCIÓN
function tijera()
{
	let mensaje;

	if (eleccionMaquina == 1)
	{
		mensaje = "Perdiste.";
		ContadorDePerdidas += 1;
	}
	else if (eleccionMaquina == 2)
	{
		mensaje = "Ganaste.";
		ContadorDeGanadas += 1;
	}
	else 
	{
		mensaje = "Empataste.";
		ContadorDeEmpates += 1;
	}
	alert (mensaje);
	mostrarResultado();

	eleccionMaquina = Math.round(Math.random() * (3-1) + 1);

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas + " partidas ganadas";
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas + " partidas perdidas";
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates + " partidas empatadas";
}

	/* Opcional con switch

	switch (eleccionMaquina)
	{
		case 1:
			mensaje = "Empataste.";
			ContadorDeEmpates += 1;
			break;
		case 2:
			mensaje = "Perdiste.";
			ContadorDePerdidas += 1;
			break;
		case 3:  //puedo poner default aca también
			mensaje = "Ganaste.";
			ContadorDeGanadas += 1;
			break;
	}
	*/