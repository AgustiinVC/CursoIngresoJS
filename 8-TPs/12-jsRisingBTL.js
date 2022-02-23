/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	let mensajeSexo;
	let mensajeEstadoCivil;
	let mensajeNacionalidad;

	//validacion edad
	 edadIngresada = prompt ("Ingrese una edad (18 a 90):");
	 edadIngresada = parseInt(edadIngresada);
	
	 //while (edadIngresada < 18 || edadIngresada > 90)
	 for(;edadIngresada < 18 || edadIngresada > 90;)
	 {
		alert ("Ingrese una edad valida.");
		edadIngresada = prompt ("Ingrese una edad (18 a 90):");
	 	edadIngresada = parseInt(edadIngresada);
	 } 

	 //validacion sexo
	 sexoIngresado = prompt ("Ingrese el sexo:");
	 sexoIngresado = sexoIngresado.toLowerCase();

	 //while (sexoIngresado != "f" && sexoIngresado != "m")
	 for(;sexoIngresado != "f" && sexoIngresado != "m";)
	 {
		alert ("Ingrese una sexo valido.");
		sexoIngresado = prompt ("Ingrese el sexo:");
	 	sexoIngresado = sexoIngresado.toLowerCase();
	 }

	 //validacion estado civil
	 estadoCivilIngresado = prompt ("Ingrese el estado civil:");
	 estadoCivilIngresado = parseInt(estadoCivilIngresado);

	 //while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4)	 
	 for (;estadoCivilIngresado < 1 || estadoCivilIngresado > 4;)
	 {
		alert ("Ingrese un estado civil valido.");
		estadoCivilIngresado = prompt ("Ingrese el estado civil:");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	 }

	 //validacion sueldo bruto
	 sueldoBruto = prompt ("Ingrese el sueldo bruto:");
	 sueldoBruto = parseInt(sueldoBruto);

	 //while (sueldoBruto < 8000)
	 for(;sueldoBruto < 8000;)
	 {
		alert ("Ingrese un sueldo bruto valido.");
		sueldoBruto = prompt ("Ingrese el sueldo bruto:");
		sueldoBruto = parseInt(sueldoBruto);
	 }

	 //validacion legajo
	 numeroLegajo = prompt ("Ingrese el número de legajo:");
	 numeroLegajo = parseInt(numeroLegajo);

	 //while (numeroLegajo > 10000 || numeroLegajo < 0)
	 for (;numeroLegajo > 10000 || numeroLegajo < 0;)
	 {
		alert ("Ingrese un número de legajo valido.");
		numeroLegajo = prompt ("Ingrese el número de legajo:");
		numeroLegajo = parseInt(numeroLegajo);
	 }

	 //validacion nacionalidad
	 nacionalidad = prompt ("Ingrese su nacionalidad:");
	 nacionalidad = nacionalidad.toLowerCase();

	 //while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	 for (;nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n";)
	 {
		alert ("Ingrese una nacionalidad válido.");
		nacionalidad = prompt ("Ingrese su nacionalidad:");
		nacionalidad = nacionalidad.toLowerCase();
	 }

	 //Tomo los datos y los emprolijo

	 if (sexoIngresado == "f")
	 {
		 mensajeSexo = "Femenino";
	 }
	 else 
	 {
		 mensajeSexo = "Masculino";
	 }

	 switch (estadoCivilIngresado)
	 {
		case 1:
			 mensajeEstadoCivil = "Soltero";
			 break;
		case 2:
			 mensajeEstadoCivil = "Casado";
			 break;
		case 3:
			 mensajeEstadoCivil = "Divorciado";
			 break;
		case 4:
			 mensajeEstadoCivil = "Viudo";
	 }


	 if (nacionalidad == "a")
	 {
		 mensajeNacionalidad = "Argentino";
	 }
	 else if (nacionalidad == "e")
	 {
		 mensajeNacionalidad = "Extranjero";
	 }
	 else if (nacionalidad == "n")
	 {
		 mensajeNacionalidad = "Nacionalizado";
	 }

	 document.getElementById ("txtIdEdad").value = "Su edad es: " +edadIngresada + " años.";
	 document.getElementById ("txtIdSexo").value = "Su sexo es: " + mensajeSexo;
	 document.getElementById ("txtIdEstadoCivil").value = "Su estado civil es: " + mensajeEstadoCivil;
	 document.getElementById ("txtIdSueldo").value = "Su sueldo bruto es: " + sueldoBruto;
	 document.getElementById ("txtIdLegajo").value = "Su número de legajo es: " + numeroLegajo;
	 document.getElementById ("txtIdNacionalidad").value = "Su nacionalidad es: " + mensajeNacionalidad;

}