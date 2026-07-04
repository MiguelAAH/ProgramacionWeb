/*function convertir() {
    var km = document.getElementById("num1").value;
    if (km == "") {
        alert("ingresa un numero");
        document.getElementById("num2").value = "";
    } else {
        var resultado = parseInt(km) * 0.621371;
        document.getElementById("num2").value = resultado;
    }
}*/

function convertir() {
    var km = document.getElementById("num1").value;
    if (km < 0) {

        document.getElementById("num2").value = "";
    } else {

        var resultado = parseInt(km) * 0.621371;
        document.getElementById("num2").value = resultado;
    }
}
