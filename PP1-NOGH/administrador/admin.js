let productos = []; // Array para almacenar los productos

// Función para listar productos en la página
function listarProductos() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpiar lista antes de renderizar
    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} (Categoría: ${producto.categoria}) - Stock: ${producto.stock}
            <button onclick="modificarProducto(${index})">Editar</button>
            <button onclick="cambiarStock(${index})">Cambiar Stock</button>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        productList.appendChild(li);
    });
}

// Función para agregar un nuevo producto
function agregarProducto(event) {
    event.preventDefault(); // Prevenir recarga de página al enviar el formulario

    const nombre = document.getElementById('name').value;
    const categoria = document.getElementById('menu-category').value;
    const stock = parseInt(document.getElementById('stock').value);

    // Crear el nuevo producto con los valores del formulario
    const nuevoProducto = { nombre, categoria, stock };
    productos.push(nuevoProducto); // Añadir el producto al array

    listarProductos(); // Actualizar la lista de productos
    document.getElementById('addProductForm').reset(); // Limpiar el formulario
}

// Función para eliminar un producto
function eliminarProducto(index) {
    productos.splice(index, 1); // Eliminar producto del array
    listarProductos(); // Actualizar lista
}

// Función para modificar un producto
function modificarProducto(index) {
    const producto = productos[index];
    
    const nuevoNombre = prompt("Nuevo nombre del producto:", producto.nombre);
    const nuevaCategoria = prompt("Nueva categoría de producto:", producto.categoria);
    const nuevoStock = prompt("Nuevo stock disponible:", producto.stock);

    // Actualizar los datos del producto
    productos[index] = {
        nombre: nuevoNombre || producto.nombre,
        categoria: nuevaCategoria || producto.categoria,
        stock: parseInt(nuevoStock) || producto.stock
    };

    listarProductos(); // Actualizar lista
}

// Función para cambiar el stock de un producto
function cambiarStock(index) {
    const nuevoStock = prompt("Nuevo stock disponible:", productos[index].stock);
    if (nuevoStock !== null) {
        productos[index].stock = parseInt(nuevoStock);
    }
    listarProductos(); // Actualizar lista
}

// Inicializar la función agregarProducto cuando se envía el formulario
document.getElementById('addProductForm').addEventListener('submit', agregarProducto);

// Renderizar la lista de productos al cargar la página
listarProductos();


// Función para cambiar el stock de un producto
function cambiarStock(index) {
    const nuevoStock = prompt("Nuevo stock disponible:", productos[index].stock);
    if (nuevoStock !== null) {
        productos[index].stock = parseInt(nuevoStock);
    }
    listarProductos(); // Actualizar lista
}

// Asignar la función agregarProducto al formulario
document.getElementById('addProductForm').addEventListener('submit', agregarProducto);

// Listar productos inicialmente
listarProductos();

function toggleDaySelection() {
    const menuFijo = document.getElementById("menu-fijo");
    const specialDay = document.getElementById("special-day");
    const categoryField = document.getElementById("category-field");

    if (menuFijo.value === "especial") {
        specialDay.style.display = "block";
        categoryField.style.display = "none"
    } else {
        specialDay.style.display = "none";
        categoryField.style.display = "block";

    }

}
