
// Espera a que la página se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');

    // Si el formulario de login no está en la página, no hace nada
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(event) {
        // Previene el envío del formulario para validarlo con JS
        event.preventDefault();

        limpiarErrores();
        let esValido = true;

        // --- VALIDACIONES ---

        // 1. Validar Correo (con dominios específicos)
        const correo = document.getElementById('correo');
        const emailRegex = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!emailRegex.test(correo.value)) {
            esValido = false;
            mostrarError(correo, 'El correo debe ser válido y de un dominio permitido.');
        }

        // 2. Validar Contraseña (entre 4 y 20 caracteres)
        const password = document.getElementById('password');
        if (password.value.length < 4 || password.value.length > 20) {
            esValido = false;
            mostrarError(password, 'La contraseña debe tener entre 4 y 20 caracteres.');
        }

        // --- RESULTADO ---
        if (esValido) {
            // Lógica de ejemplo para simular un login
            if (correo.value === 'admin@duoc.cl' && password.value === 'admin123') {
                alert('¡Bienvenido Administrador!');
                
            } else {
                alert('¡Inicio de sesión exitoso!');
                
            }
            loginForm.reset();
        } else {
            alert('Por favor, corrige los datos ingresados.');
        }
    });

    function mostrarError(input, mensaje) {
        input.classList.add('is-invalid');
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = mensaje;
        }
    }

    function limpiarErrores() {
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
    }
});