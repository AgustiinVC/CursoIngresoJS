/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt("Ingrese su nombre");

	//guardo el valor de nombre en la variable del HTML
	document.getElementById("txtIdNombre").value = nombre;

}

