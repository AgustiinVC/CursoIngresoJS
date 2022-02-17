/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroPedido;
	let contador = 0;
	let mensaje;

	numeroPedido = prompt ("Ingrese un número entre 0 y 9 inclusive.");
	numeroPedido = parseInt(numeroPedido);

	mensaje = "El número es invalido;"

	while (contador < 10)
	{
		if (numeroPedido == contador)
		{
			mensaje = "El número ingresado fue " + numeroPedido + " y fue validado.";	
		}
		contador++;
	}
	document.getElementById("txtIdNumero").value = mensaje;

}//FIN DE LA FUNCIÓN