document.addEventListener('DOMContentLoaded', () => {
    // Recupera los días seleccionados del localStorage
    const selectedDays = JSON.parse(localStorage.getItem('selectedDays')) || [];

    // Obtiene el contenedor donde se mostrarán los botones de los días seleccionados
    const selectedDaysContainer = document.querySelector('.selected-days-container');

    // Orden de los días
    const daysOrder = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

    // Ordenar los días seleccionados
    const sortedDays = daysOrder.filter(day => selectedDays.includes(day));

    // Recorre los días seleccionados y crea un botón para cada uno
    sortedDays.forEach(day => {
        const button = document.createElement('button');
        button.textContent = day.charAt(0).toUpperCase() + day.slice(1);
        button.classList.add('btn');
        selectedDaysContainer.appendChild(button);

        // Añade el event listener a cada botón para permitir que el usuario lo seleccione o deseleccione
        button.addEventListener('click', () => {
            // Deseleccionar el botón previamente seleccionado
            document.querySelectorAll('.btn.selected').forEach(selectedButton => {
                selectedButton.classList.remove('selected');
            });

            // Seleccionar el botón clicado
            button.classList.add('selected');
        });
    });
});

// Lógica para mostrar menús dependiendo del día seleccionado
let menus;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado y analizado');

    // Cargar los menús desde el archivo JSON
    fetch('menus.json')
        .then(response => {
            console.log('Respuesta recibida del fetch:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            menus = data;
            console.log("Menús cargados:", menus);
            
            // Obtener todos los botones de días
            const botonesDias = document.querySelectorAll('.diasEncargar button');
            console.log('Botones de días encontrados:', botonesDias.length);

            // Añadir event listener a cada botón
            botonesDias.forEach(boton => {
                boton.addEventListener('click', () => {
                    console.log('Botón clickeado:', boton.textContent);
                    const dia = boton.textContent;
                    mostrarMenusParaDia(dia);
                    // Resaltar el botón seleccionado
                    botonesDias.forEach(btn => btn.classList.remove('selected'));
                    boton.classList.add('selected');
                });
            });

            // Mostrar los menús del Lunes por defecto
            mostrarMenusParaDia('Lunes');
        })
        .catch(error => console.error('Error al cargar los menús:', error));
});

function mostrarMenusParaDia(diaSeleccionado) {
    console.log('Mostrando menús para:', diaSeleccionado);
    const menusDiaContainer = document.getElementById('menus-dia-container');
    if (!menusDiaContainer) {
        console.error('No se encontró el contenedor de menús');
        return;
    }
    
    menusDiaContainer.innerHTML = ''; // Limpia el contenido anterior

    // Obtiene los menús para el día seleccionado
    const menusParaDia = menus[diaSeleccionado];
    console.log('Menús para el día seleccionado:', menusParaDia);

    if (menusParaDia && menusParaDia.length > 0) {
        // Crea un título para el día seleccionado
        const titulo = document.createElement('h2');
        titulo.textContent = `Menús para ${diaSeleccionado}`;
        menusDiaContainer.appendChild(titulo);

        // Muestra los menús correspondientes
        menusParaDia.forEach(menu => {
            const menuElement = document.createElement('div');
            menuElement.className = 'menu-item';
            menuElement.innerHTML = `
                <h3>${menu.nombre}</h3>
                <p>${menu.descripcion}</p>
                <button onclick="seleccionarMenu(${menu.id})">Seleccionar</button>
            `;
            menusDiaContainer.appendChild(menuElement);
        });
    } else {
        menusDiaContainer.innerHTML = '<p>No hay menús disponibles para este día.</p>';
    }

    // Hacer visible el contenedor de menús
    menusDiaContainer.style.display = 'block';
}

function seleccionarMenu(menuId) {
    console.log(`Menú seleccionado: ${menuId}`);
    // Aquí puedes agregar la lógica para manejar la selección del menú
    alert(`Has seleccionado el menú ${menuId}`);
}