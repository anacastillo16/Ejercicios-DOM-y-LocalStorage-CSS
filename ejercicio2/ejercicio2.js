// Definición de variables necesarias
let formulario = document.getElementById("formularioAgregar");
let nombre = document.getElementById("name");
let precio = document.getElementById("precio");
let lista = document.getElementById("lista");

// Función que se ejecutará cuando se envíe el formulario
formulario.addEventListener("submit", (e) => {
    // Evita que se recargue la página
    e.preventDefault();

    // Obtiene el valor del precio
    let precioValue = parseFloat(precio.value);

    // Añade el precio al producto
    let producto = document.createElement("li");
    // Añade el producto a la lista
    producto.textContent = `${nombre.value} - ${precioValue}€`;

    // Cambia el color del producto según su precio
    if (precioValue > 50) {
        producto.style.color = "red";
    } else if (precioValue >= 20 && precioValue <= 50) {
        producto.style.color = "green";
    }

    // Añade el producto a la lista
    lista.appendChild(producto);

    // Resetea el formulario
    nombre.value = "";
    precio.value = "";
});

// Definición de variables necesarias para copiar la lista
let botonCopiar = document.getElementById("copiarLista");
let listaCopiada = document.getElementById("listaCopiada");

// Función que se ejecutará cuando se haga click en el botón de copia lista
botonCopiar.addEventListener("click", () => {
    // Resetea la lista copiada
    listaCopiada.innerHTML = "";

    // Obtiene los productos de la lista
    let productos = document.querySelectorAll("#lista li");

    // Recorre el array de productos y los copia a una nueva lista
    productos.forEach(producto => {
        // Crea un nuevo elemento li
        let productoCopiado = document.createElement("li");
        // Copia el contenido del producto
        productoCopiado.textContent = producto.textContent;
        // Copia el color del producto
        productoCopiado.style.color = producto.style.color;
        // Añade el producto copiado a la lista
        listaCopiada.appendChild(productoCopiado);
    });
});

// Definición de variables necesarias para el botón de eliminar
let formularioEliminar = document.getElementById("formularioEliminar");

// Función que se ejecutará cuando se envíe el formulario
formularioEliminar.addEventListener("submit", (e) => {
    // Evita que se recargue la página
    e.preventDefault();

    // Obtiene el producto a eliminar
    let productoAEliminar = document.getElementById("productoAEliminar").value;

    // Recorre los elementos de la lista copiada
    let elementosCOPIADOS = listaCopiada.getElementsByTagName("li");
    // Recorre el array de elementos
    for (let i = 0; i < elementosCOPIADOS.length; i++) {
        // Obtiene el nombre del producto
        let textoElemento = elementosCOPIADOS[i].textContent;
        // Obtiene el nombre del elemento
        let nombreElemento = textoElemento.split(" - ")[0];

        // Si el producto a eliminar es igual al nombre del elemento
        if (productoAEliminar.toLowerCase() == nombreElemento.toLowerCase()) {
            // Cambia el estilo del elemento
            elementosCOPIADOS[i].style.textDecoration = "line-through";
            // Cambia el color del elemento
            elementosCOPIADOS[i].style.color = "gray";
        }
    }

    // Resetea el formulario
    formularioEliminar.reset();
});
