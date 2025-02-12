# Ejercicios Clase CSS

## DOM y LocalStorage

### 1. Lista de Productos con Precios
Desarrolla una aplicación web que permita registrar una lista de productos con su precio. La lista debe cumplir las siguientes condiciones:
- Cada producto tendrá un nombre y un precio.
- Los productos con precio superior a 50€ se mostrarán en color rojo.
- Los productos con precio entre 20€ y 50€ se mostrarán en color verde.
- Los productos con precio inferior a 20€ se mostrarán en el color por defecto.


### 2. Ampliación de Funcionalidades
- Copia todos los productos a una nueva lista de forma que los cambios en la lista original no afecten a la copia.
- Agrega la posibilidad de eliminar productos de la lista mediante un input donde se introduzca el nombre del producto. Los productos eliminados deberán mostrarse en una nueva lista con un estilo tachado y en color gris para indicar que han sido eliminados.


### 3. Gestión de Biblioteca Digital
Implementa en JavaScript una interfaz web para gestionar una biblioteca digital con las siguientes características:
- Campos:
  - ISBN (Identificador único)
  - Título
  - Autor
  - Año de publicación

- Funcionalidades:
  - Registrar: Almacena los datos introducidos en el localStorage.
  - Mostrar: Muestra todos los libros registrados en una tabla dinámica.
  - Consultar libro: Introduciendo un ISBN, muestra la información del libro correspondiente.
  - Contar libros por autor: Introduciendo el nombre de un autor, muestra cuántos libros suyos están registrados.
  - Modificar libro: Introduciendo un ISBN, permite actualizar la información del libro correspondiente.
