import {mostrarProductos} from "./app.js";
import {productos} from "./stock.js";
import {obtenercarritoStorage} from "./accionesCarrito.js";
import {pintarCarrito} from "./accionesCarrito.js";
import {actualizarTotalesCarrito} from "./actualizarCarrito.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);

    if (localStorage.getItem("carrito")) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito); 
        actualizarTotalesCarrito(carrito);
    };
});


