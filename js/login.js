document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    const correo = document.getElementById('correo');
    const password = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        limpiarMensajesYErrores();

        const esCorreoValido = validarCorreo();
        const esPasswordValido = validarPassword();

        if (esCorreoValido && esPasswordValido) {
            mostrarMensaje('¡Inicio de sesión exitoso!', 'success');
            loginForm.reset();
        } else {
            mostrarMensaje('Por favor, corrige los datos ingresados.', 'danger');
        }
    });

    function validarCorreo() {
        const emailRegex = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!emailRegex.test(correo.value)) {
            mostrarError(correo, 'El correo debe ser válido y de un dominio permitido.');
            return false;
        }
        return true;
    }

    function validarPassword() {
        if (password.value.length < 4 || password.value.length > 20) {
            mostrarError(password, 'La contraseña debe tener entre 4 y 20 caracteres.');
            return false;
        }
        return true;
    }

    function mostrarError(input, mensaje) {
        input.classList.add('is-invalid');
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = mensaje;
        }
    }
    
    function mostrarMensaje(mensaje, tipo = 'danger') {
        const contenedor = document.getElementById('form-messages');
        if(contenedor) {
            contenedor.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
        }
    }

    function limpiarMensajesYErrores() {
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
        
        const contenedorMensajes = document.getElementById('form-messages');
        if (contenedorMensajes) {
            contenedorMensajes.innerHTML = '';
        }
    }
});