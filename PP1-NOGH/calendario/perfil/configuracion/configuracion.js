document.getElementById('updateProfileForm').addEventListener('submit', function(event) {
    // Verificar si las contraseñas coinciden
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorDiv = document.getElementById('password-error');

    if (newPassword !== confirmPassword) {
        event.preventDefault(); // Evitar el envío del formulario
        errorDiv.textContent = 'Las contraseñas no coinciden.';
    } else {
        errorDiv.textContent = ''; // Limpiar el mensaje de error si coinciden
    }
});
