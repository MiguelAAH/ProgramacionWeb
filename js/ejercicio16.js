const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function validarCampos(val1, val2) {
    if (val1.trim() === "" || val2.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números para continuar.',
            confirmButtonColor: '#ea7fd9'
        });
        return false;
    }
    if (isNaN(val1) || isNaN(val2)) {
        Swal.fire({
            icon: 'error',
            title: 'Formato incorrecto',
            text: 'Asegúrate de ingresar solo números en los campos de texto.',
            confirmButtonColor: '#ea7fd9'
        });
        return false;
    }
    return true;
}

function calcularOperacion(operacion) {
    const txt1 = document.getElementById("numero1").value;
    const txt2 = document.getElementById("numero2").value;
    if (!validarCampos(txt1, txt2)) return;
    const n1 = Number(txt1);
    const n2 = Number(txt2);
    let resultado = 0;
    switch (operacion) {
        case 'suma':
            resultado = sumar(n1, n2);
            break;
        case 'resta':
            resultado = restar(n1, n2);
            break;
        case 'multiplica':
            resultado = multiplicar(n1, n2);
            break;
        case 'divide':
            if (n2 === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error matemático',
                    text: 'No es posible dividir entre cero.',
                    confirmButtonColor: '#ea7fd9'
                });
                return;
            }
            resultado = dividir(n1, n2);
            break;
    }
    document.getElementById("num3").value = resultado;
}