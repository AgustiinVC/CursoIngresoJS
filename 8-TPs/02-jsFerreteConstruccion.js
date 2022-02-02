/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = 6 * (ancho + largo);

    alert (`Se necesitan ${perimetro} metros de alambre`);
}
function Circulo () 
{
    let radio;
    let perimetro;
    const PI = 3.14;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 6 * PI * radio;

    alert (`Se necesitan ${perimetro} metros de alambre`);
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;
    
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    cemento = CEMENTO_X_METRO * area;
    cal = CAL_X_METRO * area;

    alert (`Se necesitan ${cemento} de cemento y ${cal} de cal para un contrapiso de ${area} m2`);
}