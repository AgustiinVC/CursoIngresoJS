/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto = 0; 
var contadorIntentos = 0;

function comenzar()
{
	const MAX = 100;
	const MIN = 1;
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round (Math.random() * (MAX - MIN) + MIN);
	
	contadorIntentos = 0;

	document.getElementById("txtIdIntentos").value = contadorIntentos;

}

function verificar()
{
	let numeroIngresado;
	let numeroParseado;
	let mensaje;

	numeroIngresado = document.getElementById ("txtIdNumero").value;
	numeroParseado = parseInt (numeroIngresado);

	if (numeroSecreto == 0)
	{
		mensaje ="Presione el boton Comenzar antes de verificar.";
	}
	else if (numeroIngresado === "")
	{
		mensaje ="Ingrese un numero antes de verificar. Gracias.";
	}
	else
	{
		contadorIntentos += 1;

		if (numeroParseado > numeroSecreto)
		{
			mensaje ="Te pasaste..." ;
		}
		else if (numeroParseado < numeroSecreto)
		{
			mensaje ="Te falta...";
		}
		else 
		{
			if (contadorIntentos == 1)
			{
				mensaje ="Adivinaste. Usted es un Psiquico.";
			}
			else if (contadorIntentos == 2)
			{
				mensaje ="Adivinaste. Excelente percepción.";
			}
			else if (contadorIntentos == 3)
			{
				mensaje ="Adivinaste. Esto es suerte.";
			}
			else if (contadorIntentos == 4)
			{
				mensaje = "Adivinaste. Excelente técnica.";
			}
			else if (contadorIntentos == 5)
			{
				mensaje ="Adivinaste. Usted esta en la media.";
			}
			if (contadorIntentos >= 6 && contadorIntentos <= 10)
			{
				mensaje ="Adivinaste. Falta técnica.";
			}
			if (contadorIntentos >10)
			{
				mensaje = "Adivinaste. Afortunado en el amor.";
			}
		}
	}
	
	alert (mensaje);
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	

}