/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nroUno, nroDos, total;
	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nroUno + nroDos;
	alert(`El resultado es ${total}`);
}

