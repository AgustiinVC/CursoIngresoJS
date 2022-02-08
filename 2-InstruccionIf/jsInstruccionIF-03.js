function mostrar()
{
		let edad;
		edad = parseInt(document.getElementById ("txtIdEdad").value);
	
		if (edad >= 18)
		{
			alert ("Sos mayor de edad");
		}
		else{
			alert("Sos menor");
		}
}//FIN DE LA FUNCIÓN
/*
function mostrar()
{
		let edad;
		let mensaje;

		edad = parseInt(document.getElementById ("txtIdEdad").value);
		mensaje = "Sos menor de edad";

		if (edad >= 18)
		{
			mensaje = "Sos mayor de edad";
		}
		
		alert(mensaje);
		
}//FIN DE LA FUNCIÓN
*/