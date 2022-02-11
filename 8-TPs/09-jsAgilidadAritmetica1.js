/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
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
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;

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

}//FIN DE LA FUNCIÓN

function Responder()
{
    let respuestaFlotante;
    let mensaje;

	respuesta = document.getElementById ("txtIdRespuesta").value;
    respuestaFlotante = parseFloat (respuesta);

    if (respuesta === "")
    {
        mensaje = "Ingrese su respuesta antes de verificar";
    }
    else
    {
         if (respuestaFlotante == resultadoOperacion)
        {
            mensaje = "El resultado es correcto.";
            comenzar();
        }
        else
        {
            mensaje = "El resultado es incorrecto. Intente otra vez.";
            
        }
        
        document.getElementById ("txtIdRespuesta").value = "";
    }

    alert (mensaje);

}//FIN DE LA FUNCIÓN

/*
      switch (operador) 
        {
            case 1: //Suma
                operadorSimbolo = "+";
                resultadoOperacion = numeroRandomUno + numeroRandomDos;
                break;

            case 2: //Resta
                operadorSimbolo = "-";
                resultadoOperacion = numeroRandomUno - numeroRandomDos;
                break;

            case 3: //División
                operadorSimbolo = "/";
                resultadoOperacion = numeroRandomUno / numeroRandomDos;
                break;

            case 4: //Multiplicación
                operadorSimbolo = "*";
                resultadoOperacion = numeroRandomUno * numeroRandomDos;
                break;
        }
*/