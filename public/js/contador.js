// Obtener el número de visitas desde el archivo JSON (inicialmente 0)
let visitas = JSON.parse(localStorage.getItem('visitas')) || 0;

// Mostrar el contador en la página
document.getElementById('contador').innerText = visitas;

// Función para agregar visitas ficticias cada 3 horas
function agregarVisitaFicticia() {
    // Obtener la hora de la última visita ficticia
    let lastVisit = localStorage.getItem('lastVisit');
    
    // Si no hay "lastVisit", significa que es la primera vez
    if (!lastVisit) {
        lastVisit = Date.now();
        localStorage.setItem('lastVisit', lastVisit);
    }

    // Comprobar si han pasado 3 horas (3 horas = 10800000 ms)
    const now = Date.now();
    if (now - lastVisit >= 10800000) {
        visitas += 1;
        localStorage.setItem('visitas', visitas);
        localStorage.setItem('lastVisit', now);
        document.getElementById('contador').innerText = visitas;
    }
}

// Llamar a la función para agregar visitas ficticias
agregarVisitaFicticia();
