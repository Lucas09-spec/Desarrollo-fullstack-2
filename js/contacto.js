// Espera a que la página se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');

    // Si el formulario no existe, no hace nada
    if (!contactForm) return;

    // Se activa cuando intentas enviar el formulario
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Limpia los errores anteriores
        limpiarErrores();

        let esValido = true;

        // --- VALIDACIONES ---

        // 1. Validar Nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim().length === 0) {
            esValido = false;
            mostrarError(nombre, 'El nombre es obligatorio.');
        }

        // 2. Validar Correo Electrónico
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email.value)) {
            esValido = false;
            mostrarError(email, 'Por favor, ingresa un correo electrónico válido.');
        }

        // 3. Validar Asunto
        const asunto = document.getElementById('asunto');
        if (asunto.value.trim().length === 0) {
            esValido = false;
            mostrarError(asunto, 'El asunto es obligatorio.');
        }

        // 4. Validar Mensaje
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim().length === 0) {
            esValido = false;
            mostrarError(mensaje, 'El mensaje no puede estar vacío.');
        }


        // --- RESULTADO ---
        if (esValido) {
            alert('¡Mensaje enviado con éxito!');
            contactForm.reset(); // Limpia el formulario después de enviarlo
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });

    // Función para mostrar un error debajo del campo
    function mostrarError(input, mensaje) {
        input.classList.add('is-invalid');
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = mensaje;
        }
    }

    // Función para limpiar todos los errores de validación
    function limpiarErrores() {
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
    }
});