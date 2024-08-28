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
});

