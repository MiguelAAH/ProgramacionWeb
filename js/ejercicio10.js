document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btn-convertir');
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');

    btnConvertir.addEventListener('click', () => {
        // Obtener el valor y limpiar espacios en blanco
        const valorCelsius = inputCelsius.value.trim();

        // Validar que el campo no esté vacío
        if (valorCelsius === "") {
            alert("Por favor, ingresa un valor en grados Celsius.");
            inputCelsius.focus();
            return;
        }

        // Validar que el valor ingresado sea un número válido
        const celsius = Number(valorCelsius);
        if (isNaN(celsius)) {
            alert("Error: Debes ingresar un valor estrictamente numérico.");
            inputCelsius.focus();
            return;
        }

        // Aplicar la fórmula de conversión: (C * 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32;

        // Mostrar el resultado redondeado a 2 decimales si es necesario
        inputFahrenheit.value = `${Number(fahrenheit.toFixed(2))} °F`;
    });
});