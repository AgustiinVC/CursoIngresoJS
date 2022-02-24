/* Parcial 2020 Ej 2
Vallario Cores, Agustín
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/

function mostrar()
{
  let tipoBolsa;
  let cantidadBolsa;
  let precioBolsa;

  let tipoBolsaMaximo;
  let tipoBolsaCaro;
  let cantidadBolsaMaximo;
  let precioBolsaCaro;
  
  let respuesta;
  let flagPrimerIngreso;

  let importeBruto = 0;
  let importeConDescuento;
  let descuento;
  let totalBolsas = 0;
  let mensaje = "";

  flagPrimerIngreso = false;
  descuento = 0;

  do
  {
    //Ingreso y validación contenido de la bolsa
    tipoBolsa = prompt ("Ingrese el contenido de la bolsa:");
    tipoBolsa = tipoBolsa.toLowerCase();

    while (tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
    {
      tipoBolsa = prompt ("Ingrese un contenido válido:");
      tipoBolsa = tipoBolsa.toLowerCase();
    }

    //Ingreso y validación cantidad de bolsas
    cantidadBolsa = prompt ("Ingrese la cantidad de bolsas:");
    cantidadBolsa = parseInt (cantidadBolsa);

    while (cantidadBolsa < 1)
    {
      cantidadBolsa = prompt ("Ingrese una cantidad válida:");
      cantidadBolsa = parseInt (cantidadBolsa);
    }

    //Ingreso y validación precio de bolsas
    precioBolsa = prompt ("Ingrese el precio por bolsa:");
    precioBolsa = parseInt (precioBolsa);

    while (precioBolsa < 1)
    {
      precioBolsa = prompt ("Ingrese un precio válido:");
      precioBolsa = parseInt (precioBolsa);
    }

    // Valores maximos con el primer ingreso.
    if (flagPrimerIngreso == false)
    {
      flagPrimerIngreso = true;

      tipoBolsaMaximo = tipoBolsa;
      tipoBolsaCaro = tipoBolsa;
      cantidadBolsaMaximo = cantidadBolsa;
      precioBolsaCaro = precioBolsa;
    }

    // Punto A
    importeBruto += (cantidadBolsa * precioBolsa);
    totalBolsas += cantidadBolsa;

    // Punto C
    if (cantidadBolsa > cantidadBolsaMaximo)
    {
      tipoBolsaMaximo = tipoBolsa;
      cantidadBolsaMaximo = cantidadBolsa;
    }

    //Punto D
    if (precioBolsa > precioBolsaCaro)
    {
      precioBolsaCaro = precioBolsa;
      tipoBolsaCaro = tipoBolsa;
    }

    respuesta = prompt ("¿Quiere seguir ingresando productos?");
    respuesta = respuesta.toLowerCase();
  }
  while (respuesta == "si")

  if (totalBolsas > 29)
  {
    descuento = 25;
  }
  else if (totalBolsas > 9)
  {
    descuento = 15;
  }

  mensaje += "El importe bruto es de: $" + importeBruto + "\n";

  // Punto B
  if (descuento != 0)
  {
    importeConDescuento = importeBruto * (1 - descuento / 100);
    mensaje += "El importe con descuento es de: $" + importeConDescuento + "\n";
  }

  mensaje += "El tipo con mas cantidad de bolsas es: " + tipoBolsaMaximo + "\n";
  mensaje += "El tipo con bolsas a mayor precio: " + tipoBolsaCaro;

  alert (mensaje);
}