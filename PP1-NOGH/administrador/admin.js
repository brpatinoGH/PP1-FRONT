let pedidos = []; // Cargar desde pedidos.json
let menus = []; // Cargar desde menus.json

// Cargar datos ficticios al iniciar
document.addEventListener("DOMContentLoaded", () => {
    fetch('menus.json')
        .then(response => response.json())
        .then(data => {
            menus = data;
            console.log("Menus cargados:", menus); // Verifica los menús cargados
        });

    fetch('pedidos.json')
        .then(response => response.json())
        .then(data => {
            pedidos = data;
            console.log("Pedidos cargados:", pedidos); // Verifica los pedidos cargados
            mostrarPedidos();
        });
});


// Función para mostrar los pedidos en la interfaz
function mostrarPedidos() {
    const pedidosList = document.getElementById('pedidos-list');
    pedidosList.innerHTML = ''; // Limpiar la lista antes de mostrar los pedidos

    pedidos.forEach(pedido => {
        const menu = menus.find(m => m.id === pedido.menuId);
        if (menu) { // Asegúrate de que el menú se encontró
            const pedidoElement = document.createElement('div');
            pedidoElement.innerHTML = `
                <p>${pedido.dia}: ${menu.nombre}</p>
                <button onclick="editarPedido(${pedido.id})">Editar</button>
                <button onclick="eliminarPedido(${pedido.id})">Eliminar</button>
            `;
            pedidosList.appendChild(pedidoElement);
        } else {
            console.error(`Menú con id ${pedido.menuId} no encontrado.`);
        }
    });
}

// Función para asignar un menú a un día
document.getElementById('menu-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const dia = document.getElementById('dia').value;
    const menuId = parseInt(document.getElementById('menu').value);

    const nuevoPedido = { id: Date.now(), dia, menuId };
    pedidos.push(nuevoPedido);
    mostrarPedidos();
});

// Función para eliminar un pedido
function eliminarPedido(id) {
    pedidos = pedidos.filter(pedido => pedido.id !== id);
    mostrarPedidos();
}

// Función para editar un pedido
function editarPedido(id) {
    const pedido = pedidos.find(p => p.id === id);
    document.getElementById('dia').value = pedido.dia;
    document.getElementById('menu').value = pedido.menuId;
    eliminarPedido(id); // Eliminar y dejar que el usuario vuelva a agregar
}
