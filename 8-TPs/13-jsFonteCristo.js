/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
/*
//hecho con while
function NumerosPares() 
{
    let cantidadPares = 0;
    let contador;

    tomarNumero(); 

    contador = numeroIngresado;

    while (contador >= 0)
    {
        if (contador % 2 == 0)
        {
            cantidadPares++;
        }
        contador--;
    }

    alert ("Hay un total de: " + cantidadPares + " números pares desde el número " + numeroIngresado + " al 0.");
}

function NumerosImpares() 
{
    let cantidadImpares = 0;
    let contador;

    tomarNumero(); 

    contador = numeroIngresado;

    while (contador >= 0)
    {
        if (contador % 2 == 1)
        {
            cantidadImpares++;
        }
        contador--;
    }

    alert ("Hay un total de: " + cantidadImpares + " números impares desde el número " + numeroIngresado + " al 0.");
}

function NumerosDivisibles() 
{
    let cantidadDivisibles = 0;
    let contador;

    tomarNumero(); 

    contador = 100;
    
    while (contador > 0)
    {
        if (contador % numeroIngresado == 0)
        {
            cantidadDivisibles++;
        }
        contador--;
    }

    alert ("Hay un total de: " + cantidadDivisibles + " números divisibles.");
}

function VerificarPrimo() 
{
    let cantidadDivisibles = 0;
    let contador = 1;
    let mensaje;

    tomarNumero(); 

    while (contador < (numeroIngresado + 1))
    {
        if (numeroIngresado % contador  == 0)
        {
            cantidadDivisibles++;

            if (cantidadDivisibles > 2)
            {
                break;
            }
        }

        contador++;
    }

    if (cantidadDivisibles == 2)
    {
        mensaje = "El número " + numeroIngresado + " es primo";
    }
    else
    {
        mensaje = "El número " + numeroIngresado + " no es primo";
    }

    alert (mensaje);
}

function NumerosPrimos() 
{
    let cantidadDivisibles = 0;
    let vericadorNumeroPrimo = 1;
    let mensaje = "";
    tomarNumero(); 
    numeroAVerificar = numeroIngresado;

    while (numeroAVerificar >= 0)
    {
        while (vericadorNumeroPrimo < (numeroAVerificar + 1))
        {
            if (numeroAVerificar % vericadorNumeroPrimo  == 0)
            {
                cantidadDivisibles++;
            }
            
            vericadorNumeroPrimo++;
        }

        if (cantidadDivisibles == 2)
        {
            mensaje = mensaje + numeroAVerificar.toString() + " ";
        }
        numeroAVerificar--;
        vericadorNumeroPrimo = 1;
        cantidadDivisibles = 0;
    }
    
    alert ("Los números primos son: " + mensaje);
}

function tomarNumero()
{
    numeroIngresado = document.getElementById ("txtIdNumero").value;
    numeroIngresado = parseInt (numeroIngresado);
}
*/

//hecho con for
function NumerosPares() 
{
    let cantidadPares = 0;
    let contador;

    tomarNumero(); 

    for (contador = numeroIngresado ; contador >= 0 ; contador--)
    {
        if (contador % 2 == 0)
        {
            cantidadPares++;
        }
    }

    alert ("Hay un total de: " + cantidadPares + " números pares desde el número " + numeroIngresado + " al 0.");
}

function NumerosImpares() 
{
    let cantidadImpares = 0;
    let contador;

    tomarNumero(); 

    for (contador = numeroIngresado ; contador >= 0 ; contador--)
    {
        if (contador % 2 == 1)
        {
            cantidadImpares++;
        }
    }

    alert ("Hay un total de: " + cantidadImpares + " números impares desde el número " + numeroIngresado + " al 0.");
}

function NumerosDivisibles() 
{
    let cantidadDivisibles = 0;
    let contador;

    tomarNumero(); 
  
    for (contador = 100 ; contador > 0 ; contador--)
    {
        if (contador % numeroIngresado == 0)
        {
            cantidadDivisibles++;
        }
    }

    alert ("Hay un total de: " + cantidadDivisibles + " números divisibles.");
}

function VerificarPrimo() 
{
    let cantidadDivisibles = 0;
    let contador;
    let mensaje;

    tomarNumero(); 

    for (contador = 1 ; contador < (numeroIngresado + 1) ; contador++)
    {
        if (numeroIngresado % contador  == 0)
        {
            cantidadDivisibles++;

            if (cantidadDivisibles > 2)
            {
                break;
            }
        }
    }

    if (cantidadDivisibles == 2)
    {
        mensaje = "El número " + numeroIngresado + " es primo";
    }
    else
    {
        mensaje = "El número " + numeroIngresado + " no es primo";
    }

    alert (mensaje);
}

function NumerosPrimos() 
{
    let cantidadDivisibles = 0;
    let vericadorNumeroPrimo;
    let mensaje = "";
    tomarNumero(); 

    for (numeroAVerificar = numeroIngresado ; numeroAVerificar >= 0 ; numeroAVerificar--)
    {
        for (vericadorNumeroPrimo = 1 ; vericadorNumeroPrimo < (numeroAVerificar + 1) ; vericadorNumeroPrimo++)
        {
            if (numeroAVerificar % vericadorNumeroPrimo  == 0)
            {
                cantidadDivisibles++;
            }
        }

        if (cantidadDivisibles == 2)
        {
            mensaje = mensaje + numeroAVerificar.toString() + " ";
        }
        cantidadDivisibles = 0;
    }
    
    alert ("Los números primos son: " + mensaje);
}

function tomarNumero()
{
    numeroIngresado = document.getElementById ("txtIdNumero").value;
    numeroIngresado = parseInt (numeroIngresado);
}

