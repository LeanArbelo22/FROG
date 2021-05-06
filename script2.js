const carrito = [];
/* const nombre = '';
const email = '';
const password = '';

const datos = [nombre, email, password]; */

function agregarProducto(nombre, precio){
    const producto = {
        nombre = nombre,
        precio = precio
    }

    carrito.push(producto);
}