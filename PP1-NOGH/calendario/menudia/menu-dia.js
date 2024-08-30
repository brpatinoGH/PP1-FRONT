document.addEventListener('DOMContentLoaded', () => {
    // Recupera los días seleccionados del localStorage
    const selectedDays = JSON.parse(localStorage.getItem('selectedDays')) || [];

    // Obtiene el contenedor donde se mostrarán los botones de los días seleccionados
    const selectedDaysContainer = document.querySelector('.selected-days-container');

    // Recorre los días seleccionados y crea un botón para cada uno
    selectedDays.forEach(day => {
        const button = document.createElement('button');
        button.textContent = day;
        button.classList.add('btn', 'btn-light', 'btn-lg');
        selectedDaysContainer.appendChild(button);

        // Añade el event listener a cada botón para permitir que el usuario lo seleccione o deseleccione
        button.addEventListener('click', () => {
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                // Opcionalmente, puedes eliminar el día del localStorage aquí si es necesario
            } else {
                button.classList.add('selected');
                // Opcionalmente, puedes agregar el día al localStorage aquí si es necesario
            }
        });
    });

// Lógica para mostrar menús dependiendo del día seleccionado
document.addEventListener("DOMContentLoaded", () => {
    fetch('/obtener-menus')
        .then(response => response.json())
        .then(data => {
            menus = data.menus;
            console.log("Menús recibidos:", menus);
            mostrarMenusParaDia('Lunes'); // O cualquier día seleccionado
        })
        .catch(error => console.error('Error al cargar los menús:', error));
});

function mostrarMenusParaDia(diaSeleccionado) {
    const menusDiaContainer = document.getElementById('menus-dia-container');
    menusDiaContainer.innerHTML = ''; // Limpia el contenido anterior

    // Filtra los menús para el día seleccionado
    const menusParaDia = menus.filter(menu => menu.dias.includes(diaSeleccionado));

    // Muestra los menús correspondientes
    menusParaDia.forEach(menu => {
        const menuElement = document.createElement('div');
        menuElement.innerHTML = `
            <h3>${menu.nombre}</h3>
            <p>${menu.descripcion}</p>
            <button onclick="abrirOpcionesMenu(${menu.id})">Seleccionar</button>
        `;
        menusDiaContainer.appendChild(menuElement);
    });
}});
