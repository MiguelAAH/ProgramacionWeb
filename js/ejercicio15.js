let estudiantes = [];

const inputNombre = document.getElementById('num1');
const inputCalificacion = document.getElementById('num2');
inputNombre.addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
});
const listaVisual = document.getElementById('listaEstudiantes');

function agregar() {
    const nombre = inputNombre.value.trim();
    const calificacion = inputCalificacion.value.trim();

    if (nombre !== '' && calificacion !== '') {
        const nuevoEstudiante = {
            nombre: nombre,
            calificacion: Number(calificacion)
        };

        estudiantes.push(nuevoEstudiante);
        actualizarListaPantalla();

        inputNombre.value = '';
        inputCalificacion.value = '';
        inputNombre.focus();

    } else {
        alert('Por favor, completa tanto el nombre como la calificación.');
    }
}

function actualizarListaPantalla() {
    listaVisual.innerHTML = '';

    estudiantes.forEach(function (estudiante) {
        const li = document.createElement('li');
        li.textContent = estudiante.nombre + ' - ' + estudiante.calificacion;
        listaVisual.appendChild(li);
    });
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("Agrega estudiantes por favor.");
        return;
    }
    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));
    let estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById('num3').value = promedio.toFixed(2);
    document.getElementById('num4').value = estudianteMasAlto.nombre;
    document.getElementById('num5').value = estudianteMasBajo.nombre;
}
