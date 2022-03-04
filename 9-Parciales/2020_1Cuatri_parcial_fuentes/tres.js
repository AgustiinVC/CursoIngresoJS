/*
En el ingreso a un viaje en avion nos solicitan 
nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a)El nombre de la persona con mas temperatura.
	b)Cuantos mayores de edad estan viudos
	c)La cantidad de hombres que hay solteros  o viudos.
	d)cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e)El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let flagTemperatura;

	let maximaTemperatura;
	let nombreMaximaTemperatura;

	let cantidadMayoresViudos = 0;
	let cantidadSolterosViudos = 0;
	let cantidadTerceraEdad = 0;

	let cantidadSolteros = 0;
	let promedioEdadSolteros = 0;
	let edadTotal = 0;

	flagTemperatura = false;

	do
	{
		nombre = prompt ("Ingrese su nombre:");

		//Ingreso y valido edad
		edad = prompt ("Ingrese su edad: ");
		edad = parseInt (edad);
		
		while (edad < 10 || edad > 100)
		{
			edad = prompt ("Ingrese una edad valida: ");
			edad = parseInt (edad);
		}
		
		//Ingreso y valido sexo
		sexo = prompt ("Ingrese su sexo:");
		sexo = sexo.toLowerCase();

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Ingrese un sexo válido:");
			sexo = sexo.toLowerCase();
		}
		
		//Ingreso y validacion estado civil
		estadoCivil = prompt ("Ingrese su estado civil:");
		estadoCivil = estadoCivil.toLowerCase();

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ("Ingrese un estado civil valido:");
			estadoCivil = estadoCivil.toLowerCase();
		}
		
		//Ingreso y validación temperatura
		temperaturaCorporal = prompt("Ingrese su temperatura corporal:");
		temperaturaCorporal = parseInt (temperaturaCorporal);

		while (temperaturaCorporal < 32 || temperaturaCorporal > 44)
		{
			temperaturaCorporal = prompt("Ingrese una temperatura válida:");
			temperaturaCorporal = parseInt (temperaturaCorporal);
		}
				
		//Fin de la validación

		if (flagTemperatura == false)
		{
			flagTemperatura = true;

			maximaTemperatura = temperaturaCorporal;
			nombreMaximaTemperatura = nombre;
		}

		if (temperaturaCorporal > maximaTemperatura)
		{
			maximaTemperatura = temperaturaCorporal;
			nombreMaximaTemperatura = nombre;
		}

		if (edad > 17 && estadoCivil == "viudo")
		{
			cantidadMayoresViudos++;
			
			if (sexo == "m")
			{
				cantidadSolterosViudos++;
			}
		}
		
		if (sexo == "m" && estadoCivil == "soltero")
		{
			cantidadSolterosViudos++;
			edadTotal += edad;
			cantidadSolteros++;
		}
		
		if (edad > 60 && temperaturaCorporal > 38)
		{
			cantidadTerceraEdad++;
		}
		
		respuesta = prompt ("¿Quiere seguir agregando pasajeros?")
		respuesta =	respuesta.toLowerCase();

	}
	while (respuesta == "si");

	promedioEdadSolteros = edadTotal / cantidadSolteros;

	document.write (`a) La persona con la mayor temperatura (${maximaTemperatura}°C) se llama:  ${nombreMaximaTemperatura} <br>`);
	document.write (`b) Hay un total de: ${cantidadMayoresViudos} mayores que estan viudos<br>`);
	document.write (`c) Hay un total de: ${cantidadSolterosViudos} hombres que son solteros o viudos.<br>`);
	document.write (`d) Hay un total de: ${cantidadTerceraEdad} personas de la tercera edad.<br>`);
	document.write (`e) El promedio de edad entre los hombres solteros es de: ${promedioEdadSolteros}`);
}