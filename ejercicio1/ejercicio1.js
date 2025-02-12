/* Definición de variables necesarias */
let formulario = document.querySelector("form");
let nombre = document.getElementById("name");
let precio = document.getElementById("precio");
let lista = document.getElementById("lista");

/* Función que se ejecutará cuando se envíe el formulario */
formulario.addEventListener("submit", (e) => {
    // Evita que se recargue la página
    e.preventDefault();
    // Añade el producto a la lista
    let producto = document.createElement("li");
    // Obtiene el valor del precio
    let precioValue = parseFloat(precio.value);
    // Añade el precio al producto
    producto.textContent = `${nombre.value} - ${precioValue}€`;
    // Añade el producto a la lista
    lista.appendChild(producto);
    // Resetea el formulario
    nombre.value = "";
    precio.value = "";

    // Cambia el color del producto según su precio
    if (precioValue > 50) {
        producto.style.color = "red";
    } else if (precioValue >= 20 && precioValue <= 50) {
        producto.style.color = "green";
    }
});