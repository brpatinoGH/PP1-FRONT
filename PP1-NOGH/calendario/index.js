document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de días
    const buttons = document.querySelectorAll('.diasEncargar button');
    const btnContinuar = document.getElementById('btnContinuar');
    // Recupera los días seleccionados del localStorage al cargar la página
    let selectedDays = JSON.parse(localStorage.getItem('selectedDays')) || [];

    // Función para actualizar el estado del botón "Continuar"
    function updateContinueButton() {
        if (selectedDays.length > 0) {
            btnContinuar.disabled = false;
        } else {
            btnContinuar.disabled = true;
        }
    }

    // Actualiza el estado visual de los botones según los días seleccionados
    buttons.forEach(button => {
        const day = button.textContent.trim().toLowerCase();
        if (selectedDays.includes(day)) {
            button.classList.add('selected'); // Marca los botones ya seleccionados
        }

        // Añade el event listener a cada botón
        button.addEventListener('click', () => {
            const day = button.textContent.trim().toLowerCase();

            if (!selectedDays.includes(day)) {
                selectedDays.push(day); // Agrega el día a la lista seleccionada
                button.classList.add('selected'); // Cambia el color del botón
            } else {
                selectedDays = selectedDays.filter(d => d !== day); // Elimina el día de la lista seleccionada
                button.classList.remove('selected'); // Revierte el color del botón
            }

            // Guarda la lista actualizada en el localStorage
            localStorage.setItem('selectedDays', JSON.stringify(selectedDays));

            // Actualiza el estado del botón "Continuar"
            updateContinueButton();
        });
    });

    // Inicializa el estado del botón "Continuar"
    updateContinueButton();

    // Maneja el botón de continuar
    btnContinuar.addEventListener('click', () => {
        window.location.href = 'menudia/menu-dia.html';
    });
});
