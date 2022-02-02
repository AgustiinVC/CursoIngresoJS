/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let porcentaje;
	
	importe = parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = prompt ("Ingrese el porcentaje de descuento:");
	porcentaje = parseInt (porcentaje);
	
	descuento = importe * porcentaje / 100;
	resultado = importe - descuento;
	//resultado = importe * (1-porcentaje/100);
	
	document.getElementById("txtIdResultado").value = resultado;
}

/* //Ejercicio 10 Bis % por Prompt
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let porcentaje;
	
	importe = parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = prompt ("Ingrese el porcentaje de descuento:");
	porcentaje = parseInt (porcentaje);
	
	descuento = importe * porcentaje / 100;
	resultado = importe - descuento;
	//resultado = importe * (1-porcentaje/100);
	
	document.getElementById("txtIdResultado").value = resultado;
}  */