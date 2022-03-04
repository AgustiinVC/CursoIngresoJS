
function mostrar()
{
    let tipoProducto;
    let precioProducto;
    let cantidadUnidades;
    let marca;
    let fabricante;

    let cantidadUnidadesBarato;
    let fabricanteBarato;
    let precioBarato;
    let flagPrimerIngreso;

    let cantidadTotalJabones = 0;

    flagPrimerIngreso = false;

    for (let carga = 1; carga < 6; carga++)
    {
        // Ingreso y validación del tipo de producto
        tipoProducto = prompt ("Ingrese un tipo de producto:");
        tipoProducto = tipoProducto.toLowerCase();

        while (tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol")
        {
            tipoProducto = prompt ("Ingrese un tipo de producto válido:");
            tipoProducto = tipoProducto.toLowerCase();
        }

        // Ingreso y validación del precio del producto
        precioProducto = prompt ("Ingrese el precio del producto:");
        precioProducto = parseInt (precioProducto);

        while (precioProducto < 100 || precioProducto > 300)
        {
            precioProducto = prompt ("Ingrese un precio válido:");
            precioProducto = parseInt (precioProducto);
        }

        // Ingreso y validación la cantidad de productos
        cantidadUnidades = prompt ("Ingrese el precio del producto:");
        cantidadUnidades = parseInt (cantidadUnidades);

        while (cantidadUnidades < 1 || cantidadUnidades > 1000)
        {
            cantidadUnidades = prompt ("Ingrese una cantidad válida:");
            cantidadUnidades = parseInt (cantidadUnidades);
        }

        // Ingreso de la marca
        marca = prompt ("Ingrese la marca del producto:");
        marca = marca.toLowerCase();

        // Ingreso del fabricante
        fabricante = prompt ("Ingrese el fabricante del producto:");
        fabricante = fabricante.toLowerCase();

        if (tipoProducto == "alcohol" && flagPrimerIngreso == false)
        {
            flagPrimerIngreso == true;

            precioBarato = precioProducto;
            cantidadUnidadesBarato = cantidadUnidades;
            fabricanteBarato = fabricante;
        }

        // Punto A
        if (precioProducto < precioBarato)
        {
            precioBarato = precioProducto;
            cantidadUnidadesBarato = cantidadUnidades;
            fabricanteBarato = fabricante;
        }

        // Punto C
        if (tipoProducto == "jabón")
        {
            cantidadTotalJabones += cantidadUnidades;
        }
                

    }
}
