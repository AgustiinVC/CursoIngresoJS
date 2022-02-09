function mostrar()
{
  let nro;
  const max = 10;
  const min = 1;
 
  nro = Math.floor(Math.random()*(max - min) + min);

  alert (`El número aleatorio es ${nro}`);
}//FIN DE LA FUNCIÓN