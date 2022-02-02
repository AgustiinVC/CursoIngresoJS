/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Las variales las hago globales


function sumar()
{	
	let nroUno;
	let nroDos;
	let total;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	total = nroUno + nroDos
	alert(`La suma es ${total}`);
}

function restar()
{
	let nroUno;
	let nroDos;
	let total;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	total = nroUno - nroDos
	alert(`La resta es ${total}`);
}

function multiplicar()
{ 
	let nroUno;
	let nroDos;
	let total;

	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	total = nroUno * nroDos
	alert(`La multiplicación es ${total}`);
}

function dividir()
{
	let nroUno;
	let nroDos;
	let total;
	
	nroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	nroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	total = nroUno / nroDos
	alert(`La división es ${total}`);
}

