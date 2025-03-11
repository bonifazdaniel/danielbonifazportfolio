// Obtener el número de visitas desde localStorage (inicialmente 0)
let visitas = JSON.parse(localStorage.getItem('visitas')) || 0;

// Mostrar el contador en la página
document.getElementById('contador').innerText = visitas;

// Función para incrementar el contador en 1
function incrementarVisitas() {
    visitas += 1;
    localStorage.setItem('visitas', visitas); // Guardar las visitas en localStorage
    document.getElementById('contador').innerText = visitas; // Mostrar el contador actualizado
}

// Incrementar visitas cada vez que se cargue la página
incrementarVisitas();
