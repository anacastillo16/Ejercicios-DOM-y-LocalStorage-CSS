let formulario = document.getElementById("formularioAgregar");
let nombre = document.getElementById("name");
let precio = document.getElementById("precio");
let lista = document.getElementById("lista");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let precioValue = parseFloat(precio.value);

    let producto = document.createElement("li");
    producto.textContent = `${nombre.value} - ${precioValue}€`;

    if (precioValue > 50) {
        producto.style.color = "red";
    } else if (precioValue >= 20 && precioValue <= 50) {
        producto.style.color = "green";
    }

    lista.appendChild(producto);

    nombre.value = "";
    precio.value = "";
});

let botonCopiar = document.getElementById("copiarLista");
let listaCopiada = document.getElementById("listaCopiada");

botonCopiar.addEventListener("click", () => {
    listaCopiada.innerHTML = "";

    let productos = document.querySelectorAll("#lista li");

    productos.forEach(producto => {
        let productoCopiado = document.createElement("li");
        productoCopiado.textContent = producto.textContent;
        productoCopiado.style.color = producto.style.color;
        listaCopiada.appendChild(productoCopiado);
    });
});

let formularioEliminar = document.getElementById("formularioEliminar");

formularioEliminar.addEventListener("submit", (e) => {
    e.preventDefault();

    let productoAEliminar = document.getElementById("productoAEliminar").value;

    let elementosCOPIADOS = listaCopiada.getElementsByTagName("li");
    for (let i = 0; i < elementosCOPIADOS.length; i++) {
        let textoElemento = elementosCOPIADOS[i].textContent;
        let nombreElemento = textoElemento.split(" - ")[0];

        if (productoAEliminar.toLowerCase() == nombreElemento.toLowerCase()) {
            elementosCOPIADOS[i].style.textDecoration = "line-through";
            elementosCOPIADOS[i].style.color = "gray";
        }let formulario = document.getElementById("formularioAgregar");
        let nombre = document.getElementById("name");
        let precio = document.getElementById("precio");
        let lista = document.getElementById("lista");
        
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
        
            let precioValue = parseFloat(precio.value);
        
            let producto = document.createElement("li");
            producto.textContent = `${nombre.value} - ${precioValue}€`;
        
            if (precioValue > 50) {
                producto.style.color = "red";
            } else if (precioValue >= 20 && precioValue <= 50) {
                producto.style.color = "green";
            }
        
            lista.appendChild(producto);
        
            nombre.value = "";
            precio.value = "";
        });
        
        let botonCopiar = document.getElementById("copiarLista");
        let listaCopiada = document.getElementById("listaCopiada");
        
        botonCopiar.addEventListener("click", () => {
            listaCopiada.innerHTML = "";
        
            let productos = document.querySelectorAll("#lista li");
        
            productos.forEach(producto => {
                let productoCopiado = document.createElement("li");
                productoCopiado.textContent = producto.textContent;
                productoCopiado.style.color = producto.style.color;
                listaCopiada.appendChild(productoCopiado);
            });
        });
        
        let formularioEliminar = document.getElementById("formularioEliminar");
        
        formularioEliminar.addEventListener("submit", (e) => {
            e.preventDefault();
        
            let productoAEliminar = document.getElementById("productoAEliminar").value;
        
            let elementosCOPIADOS = listaCopiada.getElementsByTagName("li");
            for (let i = 0; i < elementosCOPIADOS.length; i++) {
                let textoElemento = elementosCOPIADOS[i].textContent;
                let nombreElemento = textoElemento.split(" - ")[0];
        
                if (productoAEliminar.toLowerCase() == nombreElemento.toLowerCase()) {
                    elementosCOPIADOS[i].style.textDecoration = "line-through";
                    elementosCOPIADOS[i].style.color = "gray";
                }
            }
        
            document.getElementById("productoAEliminar").value = "";
        });
        
    }

    document.getElementById("productoAEliminar").value = "";
});
