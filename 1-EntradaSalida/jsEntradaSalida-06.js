/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nro1, nro2, total;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nro1 + nro2;
	alert(`El resultado es ${total}`);
}

