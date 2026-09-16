// Función para activar las animaciones al hacer scroll
window.addEventListener('scroll', revelarElementos);

function revelarElementos() {
    let elementos = document.querySelectorAll('.section, .project-card, .skill-card');

    elementos.forEach(el => {
        let alturaVentana = window.innerHeight;
        let distanciaElemento = el.getBoundingClientRect().top;
        let puntoDeCorte = 150;

        if (distanciaElemento < alturaVentana - puntoDeCorte) {
            el.classList.add('reveal', 'active');
        }
    });
}

// Ejecutar una vez al cargar por si acaso
revelarElementos();