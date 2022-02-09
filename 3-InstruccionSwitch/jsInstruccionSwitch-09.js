function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;
	let descuento = 0;
	let aumento = 0;
	const PRECIO_ESTADIA = 15000;

	estacion = document.getElementById ("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;
	
	switch (estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento =  20 / 100;
			}
			else if (destino == "Mar del plata")
			{
				descuento = 20;
			}
			else
			{
				descuento = 10;
			}
			break;
		
		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}
			else if (destino == "Mar del plata")
			{
				aumento = 20;;
			}
			else
			{
				aumento = 10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba")
			{
				aumento = 10;
			}
			break;
	}
	
	if (aumento != 0)
	{
		precioFinal = PRECIO_ESTADIA * (1 + aumento / 100);
	}
	else if (descuento != 0)
	{
		precioFinal = PRECIO_ESTADIA * (1 - descuento / 100);
	}
	else 
	{
		precioFinal = PRECIO_ESTADIA;
	}

	alert (`Irse a ${destino} en ${estacion} tiene un costo de $${precioFinal}`);
}//FIN DE LA FUNCIÓN