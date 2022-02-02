/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let total;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    total = precioUno + precioDos + precioTres;

    alert(`La suma total es de $${total}`);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let total;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    total = (precioUno + precioDos + precioTres)/3;

    alert(`El promedio es de $${total}`);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let total;
    let iva;
    
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    total = precioUno + precioDos + precioTres;
    iva = total * 21 / 100;

    total = total + iva;

    alert(`El precio final es de $${total}`);
}