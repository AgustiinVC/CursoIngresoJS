/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var respuesta;
var numeroRandomUno;
var numeroRandomDos;
var operador;
var resultadoOperacion;

function comenzar()
{
    let operadorSimbolo;
    
    numeroRandomUno = Math.round (Math.random() * (10 - 1) + 1);
    numeroRandomDos = Math.round (Math.random() * (10 - 1) + 1);
    operador = Math.round (Math.random() * (4 - 1) + 1); //con esto genero un operador aleatorio

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIDSegundoNumero").value = numeroRandomDos;

    if (operador == 1) //Suma
    {
        operadorSimbolo = "+";
        resultadoOperacion = numeroRandomUno + numeroRandomDos;
    }
    else if (operador == 2) //Resta
    {
        operadorSimbolo = "-";
        resultadoOperacion = numeroRandomUno - numeroRandomDos;
    }
    else if (operador == 3) //División
    {
        operadorSimbolo = "/";
        resultadoOperacion = numeroRandomUno / numeroRandomDos;
        resultadoOperacion = resultadoOperacion.toFixed(2);
    }
    else //Multiplicación
    {
        operadorSimbolo = "x";
        resultadoOperacion = numeroRandomUno * numeroRandomDos;
    }

    document.getElementById("txtIdOperador").value = operadorSimbolo;

    setTimeout (Responder, 4000);

}//FIN DE LA FUNCIÓN

function Responder()
{
    let respuestaFlotante;
    let mensaje;

	respuesta = document.getElementById ("txtIdRespuesta").value;
    respuestaFlotante = parseFloat (respuesta);

    if (respuesta === "")
    {
        mensaje = "No llego a resolverlo";
    }
    else
    {
         if (respuestaFlotante == resultadoOperacion)
        {
            mensaje = "El resultado es correcto.";
        }
        else
        {
            mensaje = "El resultado es incorrecto.";
            
        }
    }

    alert (mensaje);

    comenzar();

}//FIN DE LA FUNCIÓN