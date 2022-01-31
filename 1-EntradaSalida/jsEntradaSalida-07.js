/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Las variales las hago globales


function sumar()
{	
	let nro1, nro2, total;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nro1 + nro2
	alert(`La suma es ${total}`);
}

function restar()
{
	let nro1, nro2, total;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nro1 - nro2
	alert(`La resta es ${total}`);
}

function multiplicar()
{ 
	let nro1, nro2, total;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nro1 * nro2
	alert(`La multiplicación es ${total}`);
}

function dividir()
{
	let nro1, nro2, total;
	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	total = nro1 / nro2
	alert(`La división es ${total}`);
}

