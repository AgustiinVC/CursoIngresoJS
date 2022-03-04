/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos: 
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra 
	c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marca;
	let fabricante;

	let precioMaximoJabon ;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;
	let flagPrimerIngresoJabon;

	let cantidadBarbijosTotal = 0;
	let cantidadJabonesTotal = 0;
	let cantidadAlcoholTotal = 0;
	let mayorCantidadProducto;

	let contadorJabon = 0;
	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorMasUnidades = 0;

	let mensaje;

	let contadorIngreso;

	flagPrimerIngresoJabon = false;



	for (contadorIngreso = 0; contadorIngreso < 5; contadorIngreso++)
	{
		//Ingreso y validación tipo de producto
		tipoProducto = prompt ("Ingrese el tipo de producto:");
		tipoProducto = tipoProducto.toLowerCase();

		while (tipoProducto != "jabon" && tipoProducto != "barbijo" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt ("Ingrese un tipo de producto válido:");
			tipoProducto = tipoProducto.toLowerCase();
		}
		
		//Ingreso y validación precio del producto
		precioProducto = prompt ("Ingrese el precio del producto:");
		precioProducto = parseInt (precioProducto);

		while (precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt ("Ingrese un precio válido:");
			precioProducto = parseInt (precioProducto);
		}

		//Ingreso y validación cantidad
		cantidadProducto = prompt ("Ingrese la cantidad:");
		cantidadProducto = parseInt (cantidadProducto);

		while (cantidadProducto < 1 || cantidadProducto > 1000)
		{
			cantidadProducto = prompt ("Ingrese una cantidad válida:");
			cantidadProducto = parseInt (cantidadProducto);
		}

		//Ingreso marca del producto
		marca = prompt ("Ingrese la marca del producto:");
		marca = tipoProducto.toLowerCase();

		//Ingreso fabricante del producto
		fabricante = prompt ("Ingrese el fabricante del producto:");
		fabricante = tipoProducto.toLowerCase();

		//Fin Ingreso y validación

		switch (tipoProducto)
		{
			//Punto A
			case "jabon":
				cantidadJabonesTotal += cantidadProducto;
				contadorJabon++;
				if (flagPrimerIngresoJabon == false)
				{
					precioMaximoJabon = precioProducto;
					cantidadJabonCaro = cantidadProducto;
					fabricanteJabonCaro = fabricante;
					flagPrimerIngresoJabon = true;
				}
				else if (precioProducto > precioMaximoJabon)
				{
						precioMaximoJabon = precioProducto;
						cantidadJabonCaro = cantidadProducto;
						fabricanteJabonCaro = fabricante;
				}
				break;
			
			case "alcohol":
				cantidadAlcoholTotal += cantidadProducto;
				contadorAlcohol++;
				break;

			//Punto C
			case "barbijo":
				cantidadBarbijosTotal += cantidadProducto;
				contadorBarbijo++;
				break;
		}

	}

	//Punto B
	if (cantidadAlcoholTotal > cantidadBarbijosTotal && cantidadAlcoholTotal > cantidadJabonesTotal)
	{
		mayorCantidadProducto = cantidadAlcoholTotal;
		contadorMasUnidades = contadorAlcohol;
	}
	else if (cantidadBarbijosTotal > cantidadAlcoholTotal && cantidadBarbijosTotal > cantidadJabonesTotal)
	{
		mayorCantidadProducto = cantidadBarbijosTotal;
		contadorMasUnidades = contadorBarbijo;
	}
	else
	{
		mayorCantidadProducto = cantidadJabonesTotal;
		contadorMasUnidades = contadorJabon;
	}

	promedioMasUnidades = mayorCantidadProducto / contadorMasUnidades;
	
	if (cantidadJabonesTotal > 0)
	{
		mensaje = "Del mas caro de los jabones la cantidad es " + cantidadJabonCaro + " y el fabricante es: " + fabricanteJabonCaro + "\n";

	}
	else
	{
		mensaje = "No ingresaste jabones por lo que no se puede especificar fabricantes \n"
	}

	mensaje += "El promedio del tipo de producto con mas unidades en total es: " + promedioMasUnidades + "\n";
	mensaje += "Hay un total de: " + cantidadBarbijosTotal + " unidades de barbijos \n";

	alert (mensaje);
}
