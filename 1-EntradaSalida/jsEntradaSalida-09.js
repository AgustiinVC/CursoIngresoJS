/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoViejo;
	let sueldoNuevo;
	let aumento;

	sueldoViejo = parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = sueldoViejo * 10 / 100;
	sueldoNuevo = sueldoViejo + aumento;

	document.getElementById("txtIdResultado").value = sueldoNuevo;
}
 /*  // Ejercicio 9 Bis % por Prompt

function mostrarAumento()
{
	let sueldoViejo;
	let sueldoNuevo;
	let aumento;
	let porcentaje;

	sueldoViejo = parseInt(document.getElementById("txtIdSueldo").value);
	porcentaje = prompt ("Ingrese el % de aumento");
	porcentaje = parseInt (porcentaje);
	
	aumento = sueldoViejo * porcentaje / 100;
	sueldoNuevo = sueldoViejo + aumento;

	document.getElementById("txtIdResultado").value = sueldoNuevo;
}    */