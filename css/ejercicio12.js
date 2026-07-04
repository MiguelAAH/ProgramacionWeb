function convertir() {
    var Mxn = document.getElementById("num1").value;
    if (Mxn < 0) {

        document.getElementById("num2").value = "";
    } else {

        var resultado = parseInt(Mxn) * 0.055;
        document.getElementById("num2").value = resultado;
    }
}