function mostrar()
{
	let nota;
	let mensaje;
	const max = 10;
	const min = 1;

	nota = Math.round(Math.random()*(max - min) + min);

	if (nota >= 9)
	{
		mensaje = `Te sacaste un ${nota}, EXCELENTE`;
	}
	else if (nota >= 4)
	{
		mensaje = `Te sacaste un ${nota}, APROBÓ`;
	}
	else {
		mensaje = `Te sacaste un ${nota}. Vamos, la próxima se puede`;
	}
	alert (mensaje);
}//FIN DE LA FUNCIÓN