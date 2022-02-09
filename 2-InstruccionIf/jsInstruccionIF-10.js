function mostrar()
{
	let nota;
	const max = 10;
	const min = 1;

	nota = Math.round(Math.random()*(max - min) + min);

	if (nota >= 9)
	{
		alert (`Te sacaste un ${nota}, EXCELENTE`);
	}
	else if (nota >= 4)
	{
		alert (`Te sacaste un ${nota}, APROBÓ`);
	}
	else {
		alert (`Te sacaste un ${nota}. Vamos, la próxima se puede`);
	}
}//FIN DE LA FUNCIÓN