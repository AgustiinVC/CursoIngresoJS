function mostrar()
{
 let edad;
 edad = parseInt(document.getElementById("txtIdEdad").value);

 if (edad >= 18)
 {
	 alert("Sos mayor de edad");
 }
 else if (edad < 13)
 {
	 alert ("Sos un niño");
 }
 else {
	 alert("Sos un adolescente");
 }
}//FIN DE LA FUNCIÓN