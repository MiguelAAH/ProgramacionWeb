const obtenerTareas = () => {
    const datos = localStorage.getItem("tareas");
    return datos ? JSON.parse(datos) : [];
};

const guardarEnStorage = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};

function manejarTareas() {
    let listaInterna = obtenerTareas();

    function renderizarTareas() {
        const ul = document.getElementById("listaTareas");
        ul.innerHTML = ""; // Limpiar lista antes de redibujar

        listaInterna.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${tarea}</span>
                <button class="btn-eliminar" onclick="appTareas.eliminar(${index})">Eliminar</button>
            `;
            ul.appendChild(li);
        });
    }

    return {
        agregar: function () {
            const input = document.getElementById("nuevaTarea");
            const textoTarea = input.value.trim();

            if (textoTarea === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo vacío',
                    text: 'Por favor escribe una tarea antes de agregarla.',
                    confirmButtonColor: '#ea7fd9'
                });
                return;
            }

            listaInterna.push(textoTarea);
            guardarEnStorage(listaInterna);
            renderizarTareas();

            input.value = "";
        },

        eliminar: function (index) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ea7fd9',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    listaInterna.splice(index, 1);
                    guardarEnStorage(listaInterna);
                    renderizarTareas();

                    Swal.fire({
                        title: '¡Eliminado!',
                        text: 'La tarea ha sido borrada con éxito.',
                        icon: 'success',
                        confirmButtonColor: '#ea7fd9'
                    });
                }
            });
        },

        inicializar: function () {
            renderizarTareas();
        }
    };
}

const appTareas = manejarTareas();

document.addEventListener("DOMContentLoaded", () => {
    appTareas.inicializar();
});