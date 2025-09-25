document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    if (!registroForm) return;

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let esValido = true;
        
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

        const nombre = document.getElementById('nombre');
        if (nombre.value.trim().length === 0 || nombre.value.length > 50) {
            esValido = false;
            mostrarError(nombre, 'El nombre es obligatorio y no debe exceder los 50 caracteres.');
        }

        const correo = document.getElementById('correo');
        const emailRegex = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!emailRegex.test(correo.value)) {
            esValido = false;
            mostrarError(correo, 'El correo debe ser válido y pertenecer a @duoc.cl, @profesor.duoc.cl o @gmail.com.');
        }

        const password = document.getElementById('password');
        if (password.value.length < 4 || password.value.length > 10) {
            esValido = false;
            mostrarError(password, 'La contraseña debe tener entre 4 y 10 caracteres.');
        }

        if (esValido) {
            alert('¡Registro exitoso!');
            
        } else {
            alert('Por favor, corrige los errores del formulario.');
        }
    });

    function mostrarError(inputElement, mensaje) {
        inputElement.classList.add('is-invalid');
        const errorFeedback = inputElement.nextElementSibling;
        if (errorFeedback && errorFeedback.classList.contains('invalid-feedback')) {
            errorFeedback.textContent = mensaje;
        }
    }
});