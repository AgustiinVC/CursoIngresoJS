/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe, descuento, resultado;
	importe = document.getElementById("txtIdImporte").value;
	
	descuento = importe * 25 / 100;
	resultado = importe - descuento;
	//resultado = importe * 0.75;
	
	document.getElementById("txtIdResultado").value = resultado;
}
