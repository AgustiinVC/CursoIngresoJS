/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto = 0; 
var contadorIntentos = 0;

function comenzar()
{
  const MAX = 100;
  const MIN = 1;
	
  //Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random() * (MAX - MIN)+ MIN);
    contadorIntentos = 0;
    
    document.getElementById ("txtIdIntentos").value = contadorIntentos;

}

function verificar()
{
  let numeroIngresado;
  let numeroParseado;

  numeroIngresado = (document.getElementById("txtIdNumero").value);
  numeroParseado = parseInt (numeroIngresado);
   
  if (numeroSecreto == 0)
  {
    alert ("Dale a comenzar antes de verificar.");
  }
  else if (numeroIngresado === "")
  {
    alert ("Ingrese su numero antes de verificar.");
  }
  else
  {
    contadorIntentos += 1;

    if (numeroParseado > numeroSecreto)
    {
      alert ("Te pasaste...");
    }
    else if (numeroParseado < numeroSecreto)
    {
      alert ("Te falta...");
    }
    else
    {
      alert ("Usted es un ganador!!! Te llevo solo " + contadorIntentos + " intentos.");
    }

    document.getElementById ("txtIdIntentos").value = contadorIntentos;
  }

	
}