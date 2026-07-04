function convertir() {
    var Edad = document.getElementById("num1").value;
    if (Edad < 0) {

        document.getElementById("num2").value = "Error en la entrada";
    } else if (Edad < 18) {
        document.getElementById("num2").value = "No puede votar";
    } else {
        document.getElementById("num2").value = "Puede votar";
    }
}