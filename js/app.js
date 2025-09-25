// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Arreglo con la información de los productos
    const productos = [
        {
            id: 'rtx-3060',
            nombre: 'NVIDIA RTX 3060',
            descripcion: 'La RTX 3060 ofrece un excelente rendimiento en 1080p y 1440p, ideal para gamers que buscan calidad sin gastar demasiado.',
            precio: 350000,
            imagen: 'img/descarga.jpeg'
        },
        {
            id: 'rtx-4070',
            nombre: 'NVIDIA RTX 4070',
            descripcion: 'La RTX 4070 es perfecta para juegos en 1440p y 4K con ray tracing y DLSS, brindando potencia para los títulos más exigentes.',
            precio: 800000,
            imagen: 'img/descarga (1).jpeg'
        },
        {
            id: 'rtx-5060',
            nombre: 'NVIDIA RTX 5060',
            descripcion: 'La nueva generación RTX 5060 promete mayor eficiencia y rendimiento, ideal para quienes buscan actualizar su setup.',
            precio: 490000,
            imagen: 'img/download.jpg'
        }
    ];

    // Función para mostrar los productos en el HTML
    const renderizarProductos = () => {
        const contenedor = document.getElementById('productos-container');
        if (!contenedor) return; 

        contenedor.innerHTML = ''; 
        productos.forEach(producto => {
            const productoCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="fw-bold text-primary fs-5 mt-3">$${producto.precio.toLocaleString('es-CL')}</p>
                            <button class="btn btn-success mt-auto" onclick="agregarAlCarrito('${producto.id}')">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += productoCard;
        });
    };

    // Función global para agregar productos al carrito
    window.agregarAlCarrito = (productoId) => {
        const producto = productos.find(p => p.id === productoId);
        if (producto) {
            alert(`"${producto.nombre}" fue añadido al carrito.`);
        }
    };

    renderizarProductos();
});