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
// let menus;

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM completamente cargado y analizado');

//     fetch('menus.json')
//         .then(response => {
//             console.log('Respuesta recibida del fetch:', response);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             menus = data;
//             console.log("Menús cargados:", menus);
            
//             const botonesDias = document.querySelectorAll('.diasEncargar button');
//             console.log('Botones de días encontrados:', botonesDias.length);

//             botonesDias.forEach(boton => {
//                 boton.addEventListener('click', () => {
//                     console.log('Botón clickeado:', boton.textContent);
//                     const dia = boton.textContent;
//                     mostrarMenusParaDia(dia);
//                     botonesDias.forEach(btn => btn.classList.remove('selected'));
//                     boton.classList.add('selected');
//                 });
//             });

//             mostrarMenusParaDia('Lunes');
//         })
//         .catch(error => console.error('Error al cargar los menús:', error));
// });

// function mostrarMenusParaDia(diaSeleccionado) {
//     console.log('Mostrando menús para:', diaSeleccionado);
//     const menusDiaContainer = document.getElementById('menus-dia-container');
//     if (!menusDiaContainer) {
//         console.error('No se encontró el contenedor de menús');
//         return;
//     }
    
//     menusDiaContainer.innerHTML = '';

//     const menusParaDia = menus[diaSeleccionado];
//     console.log('Menús para el día seleccionado:', menusParaDia);

//     if (menusParaDia && menusParaDia.length > 0) {
//         const titulo = document.createElement('h2');
//         titulo.textContent = `Menús para ${diaSeleccionado}`;
//         menusDiaContainer.appendChild(titulo);

//         menusParaDia.forEach(menu => {
//             const menuElement = document.createElement('div');
//             menuElement.className = 'menu-item';
//             menuElement.innerHTML = `
//                 <h3>${menu.nombre}</h3>
//                 <p>${menu.descripcion}</p>
//                 <button onclick="seleccionarMenu(${menu.id})">Seleccionar</button>
//             `;
//             menusDiaContainer.appendChild(menuElement);
//         });
//     } else {
//         menusDiaContainer.innerHTML = '<p>No hay menús disponibles para este día.</p>';
//     }

//     menusDiaContainer.style.display = 'block';
// }

// function seleccionarMenu(menuId) {
//     console.log(`Menú seleccionado: ${menuId}`);
//     alert(`Has seleccionado el menú ${menuId}`);
// }

//COMIDAS
// const botonesDisponibles = [
//     { id: 'button1', visible: true, imgSrc: 'empanadadepollo.jpg', imgAlt: 'Empanada', text: 'Botón 1' },
//     { id: 'button2', visible: false, imgSrc: 'tartaverdura.jpg', imgAlt: 'Tarta', text: 'Botón 2' },
//     { id: 'button3', visible: true, imgSrc: 'patacarnecerdo.jpg', imgAlt: 'Pata muslo / Carne / Cerdo', text: 'Botón 3' }
// ];

// const buttonsContainer = document.getElementById('buttonsContainer');

// botonesDisponibles.forEach(boton => {
//     if (boton.visible) {
//         const containerButton = document.createElement('div');
//         containerButton.className = 'container-button';


//         const imgElement = document.createElement('img');
//         imgElement.src = boton.imgSrc;
//         imgElement.alt = boton.imgAlt;

//         const textElement = document.createElement('p');
//         textElement.textContent = boton.text;

//         containerButton.appendChild(imgElement);
//         containerButton.appendChild(textElement);


//         buttonsContainer.appendChild(containerButton);
//     }
// });