
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo = prompt ("Ingrese el largo del rectángulo:");
    largo = parseInt (largo);

    ancho = prompt ("Ingrese el ancho del rectángulo:");
    ancho = parseInt (ancho);

    perimetro = 2 * (largo + ancho);

    alert ("El perímetro del rectágulo es de: " + perimetro);
}
