// Espera a que la página se cargue por completo
document.addEventListener('DOMContentLoaded', () => {

    // 1. Datos de las entradas del blog (como si vinieran de una base de datos)
    const blogPosts = [
        {
            id: 1,
            title: '¿Vale la pena la serie RTX 5000?',
            date: '20 de Septiembre, 2025',
            summary: 'Analizamos los rumores y las primeras impresiones de la nueva generación de tarjetas gráficas.',
            fullText: 'La arquitectura de la nueva serie 5000 promete un salto cuántico en rendimiento y eficiencia energética. Con el nuevo DLSS 4.0, los juegos no solo se verán más realistas, sino que también correrán a tasas de frames nunca antes vistas. Es la actualización perfecta para los entusiastas que buscan lo último en tecnología.',
            image: './img/descarga (1).jpeg',
            relatedProductPrice: 490000 // Precio del producto relacionado (RTX 5060)
        },
        {
            id: 2,
            title: 'Guía para armar tu primer PC Gamer',
            date: '15 de Septiembre, 2025',
            summary: 'Te guiamos paso a paso en la elección de componentes para que armes un PC potente y equilibrado.',
            fullText: 'Armar tu propio PC puede parecer intimidante, pero con nuestra guía, te convertirás en un experto. Te enseñamos a elegir la placa madre correcta, a combinar la CPU con la GPU para evitar cuellos de botella y a seleccionar una fuente de poder que garantice la estabilidad de tu sistema. ¡Manos a la obra!',
            image: './img/images (1).jpeg',
            relatedProductPrice: 350000 
        }
    ];

    const blogContainer = document.getElementById('blog-posts-container');
    
    // Si el contenedor del blog no existe, no hace nada
    if (!blogContainer) return;

    // 2. Función para crear las tarjetas del blog en la página
    function renderBlogPosts() {
        blogContainer.innerHTML = ''; // Limpia el contenedor
        blogPosts.forEach(post => {
            const postCard = `
                <div class="col-md-6 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${post.image}" class="card-img-top" alt="${post.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text text-muted small">${post.date}</p>
                            <p class="card-text">${post.summary}</p>
                            <button class="btn btn-outline-primary mt-auto" onclick="showPostDetails(${post.id})">
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            `;
            blogContainer.innerHTML += postCard;
        });
    }

    // 3. Función para mostrar los detalles del post en un modal 
    window.showPostDetails = (postId) => {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;

        // Selecciona los elementos del modal y actualiza su contenido
        document.getElementById('modalPostTitle').textContent = post.title;
        document.getElementById('modalPostImage').src = post.image;
        document.getElementById('modalPostFullText').textContent = post.fullText;
        document.getElementById('modalPostPrice').textContent = `$${post.relatedProductPrice.toLocaleString('es-CL')}`;

        // Muestra el modal usando el API de Bootstrap
        const postModal = new bootstrap.Modal(document.getElementById('postModal'));
        postModal.show();
    };

    // Llama a la función para que se muestren las tarjetas al cargar la página
    renderBlogPosts();
});