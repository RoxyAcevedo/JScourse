const arraProductos = [];
const producto1 = Producto(1, "shampoo", 900);
const producto2 = Producto(2, "acondicionador", 100);
const producto3 = Producto(3, "serum", 1500);

arrayProductos.push(prodcuto1, producto2, producto3); 

console.log(arrayProductos)

const ordenarMenorMayor = () => {
    arrayProductos.sort((a,b) =>a.precio - b.precio); 
    console.log(arrayProductos); 
};

const ordenarMayorMenor = () => {
    arrayProductos.sort((a,b) => b.precio - a.precio);
    console.log(arrayProductos);
}; 

const mostrarListaOrdenada = () => {
    let array = []; 
    arrayProductos.forEach(producto => array.push(producto.nombre+ " $"+producto.precio));
    alert("Lista de precios:"+"\n"+array,join("\n")); 
};

ordenarMayorMenor ();

function comprarProductos() {
    let productoNombre = "";
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt("¿Queres comprar shampoo, acondocionador o ambos?");
        productoCantidad = parseInt (prompt("¿Cuantos queres comprar?"));
        
        const producto = arrayProductos.find(producto => producto.nombre === productoNombre); 
        
        if(producto) {
            total+= producto.precio * productoCantidad;
        } else {
            alert ("El producto no se encuentra en stock")
        }

        seguirComprando = confirm("¿Queres agregar otro producto?");

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 5000) {
        totalCompra = totalCompra * 0.80;
        alert ("Tenes un 20% de descuento");
    } calcularEnvio (totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm("Queres envio a dmicilio?");
    
    if (tieneEnvioADomicilio && totalCompra >=2000) {
        alert("Tenes envio gratis, el total de la compra es: "+ totalCompra);
    } else if (tieneEnvioADomicilio&& totalCompra < 2000 && totalCompra !== 0) {
        alert("El envío cuenta $700. El total de la compra es: "+ totalCompra);
    } else {
        alert("El total de la compra es: "+totalCompra);
    }
}; 

function comprar() {
    const quieroOrdenar =confirm("¿Queres ordenar la lista de productos del mas barato al mas caro?");
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

comorar();


