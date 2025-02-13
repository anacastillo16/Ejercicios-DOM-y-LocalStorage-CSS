// Función para registrar libros
function registrarLibro() {
    // Obtiene los valores del formulario
    let ISBN = document.getElementById("ISBN").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let publicacion = document.getElementById("publicacion").value;

    // Crea un objecto libro
    let libro = {ISBN, titulo, autor, publicacion};

    // Guarda el libro en el localStorage
    localStorage.setItem(ISBN, JSON.stringify(libro));

    // Mensaje de que todo ha salido bien
    alert("Libro registrado con éxito");
    // Resetea el formulario
    document.querySelector("form").reset();
}

//Creamos un evento y llamamos a la función registrarLibro
let registrar = document.getElementById("registrar");
registrar.addEventListener("click", function() {
    registrarLibro();
});

// Función para mostrar libros
function mostrarLibros() {
    // Obtiene los libros del localStorage
    let libros = JSON.parse(localStorage.getItem("libros"));
    // Crea la tabla
    let resultado = document.getElementById("resultado");
    // Añade las cabeceras
    resultado.innerHTML = "<th>ISBN</th> <th>Título</th> <th>Autor</th> <th>Publicación</th>";

    // Recorre el array de libros
    for (let i = 0; i < localStorage.length; i++) {
        // Obtiene el ISBN
        let ISBN = localStorage.key(i);

        // Obtiene el libro
        let libro = JSON.parse(localStorage.getItem(ISBN));

        // Añade el libro a la tabla
        resultado.innerHTML += `<tr><td>${libro.ISBN}</td><td>${libro.titulo}</td><td>${libro.autor}</td><td>${libro.publicacion}</td></tr>`;
    }
}

//Creamos un evento y llamamos a la función mostrarLibros
let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", function() {
    mostrarLibros();
});


// Función para consultar libros
function consultarLibro() {
    // Obtiene el ISBN
    let ISBN = document.getElementById("ISBN").value;

    // Comprueba que el ISBN no este vacio
    if (!ISBN) {
        alert("Introduce un ISBN");
        return;
    }

    // Obtiene el libro
    let libro = JSON.parse(localStorage.getItem(ISBN));

    // Añade el libro a la tabla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<tr><td>${libro.ISBN}</td><td>${libro.titulo}</td><td>${libro.autor}</td><td>${libro.publicacion}</td></tr>`;
}

//Creamos un evento y llamamos a la función consultarLibro
let consultar = document.getElementById("consultar");
consultar.addEventListener("click", function() {
    consultarLibro();
});

function contarLibros() {
    // Obtiene el autor
    let autor = document.getElementById("autor").value;

    // Comprueba que el autor no este vacio
    if (!autor) {
        alert("Introduce un autor");
        return;
    }

    // Cuenta los libros del autor
    let contador = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let ISBN = localStorage.key(i);
        let libro = JSON.parse(localStorage.getItem(ISBN));
        if (libro.autor == autor) {
            contador++;
        }
    }

    // Muestra el contador
    alert(`El autor ${autor} tiene ${contador} libros`);
}

//Creamos un evento y llamamos a la función contarLibros
let contar = document.getElementById("contar");
contar.addEventListener("click", function() {
    contarLibros();
});

// Función para modificar libros
function modificarLibro() {
    // Obtiene el ISBN
    let ISBN = document.getElementById("ISBN").value;

    // Comprueba que el ISBN no este vacio
    if (!ISBN) {
        alert("Introduce un ISBN");
        return;
    }

    // Obtiene el libro
    let libro = JSON.parse(localStorage.getItem(ISBN));

    // Obtiene los valores del formulario
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let publicacion = document.getElementById("publicacion").value;

    // Modifica el libro
    if (titulo) {
        libro.titulo = titulo;
    }
    
    if (autor) {
        libro.autor = autor;
    }   

    if (publicacion) {
        libro.publicacion = publicacion;
    }

    // Guarda el libro en el localStorage
    localStorage.setItem(ISBN, JSON.stringify(libro));

    // Mensaje de que todo ha salido bien
    alert("Libro modificado con éxito");
    
    // Resetea el formulario
    document.querySelector("form").reset();
}

//Creamos un evento y llamamos a la función modificarLibro
let modificar = document.getElementById("modificar");
modificar.addEventListener("click", function() {
    modificarLibro();
});