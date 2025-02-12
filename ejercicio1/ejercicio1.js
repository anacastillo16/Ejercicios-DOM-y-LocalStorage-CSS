let formulario = document.querySelector("form");
        let nombre = document.getElementById("name");
        let precio = document.getElementById("precio");
        let lista = document.getElementById("lista");

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            let producto = document.createElement("li");
            let precioValue = parseFloat(precio.value);
            producto.textContent = `${nombre.value} - ${precioValue}€`;
            lista.appendChild(producto);
            nombre.value = "";
            precio.value = "";

            if (precioValue> 50) {
                producto.style.color = "red";
            } else if (precioValue>= 20 && precioValue <= 50) {
                producto.style.color = "green";
            }
        });