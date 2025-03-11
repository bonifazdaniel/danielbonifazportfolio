// Obtener el número de visitas desde el archivo JSON
fetch('public/data/visitas.json')
    .then(response => response.json())
    .then(data => {
        let visitas = data.visitas + 1; // Incrementar visitas
        document.getElementById('contador').innerText = visitas;

        // Intentar actualizar el archivo JSON (esto no funcionará en GitHub Pages, es solo simulado)
        fetch('public/data/visitas.json', {
            method: 'PUT', // PUT no funcionará en GitHub Pages, solo para simular
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ visitas: visitas })
        }).catch(error => {
            console.error('Error al actualizar el contador:', error);
        });
    })
    .catch(error => console.error('Error obteniendo las visitas:', error));
