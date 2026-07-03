function sumar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
    console.log("El resultado es: " + resultado);
}

function multiplicar() {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var resultado2 = parseInt(num3) * parseInt(num4);
    document.getElementById("resultado2").innerHTML = "El resultado es: " + resultado2;
    console.log("El resultado es: " + resultado2);
}

function division() {
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    var resultado3 = parseInt(num5) / parseInt(num6);
    document.getElementById("resultado3").innerHTML = "El resultado es: " + resultado3;

    if (num6 === 0) {
        document.getElementById("resultado3").innerHTML = "No se puede dividir por cero";
    } else {
        document.getElementById("resultado3").innerHTML = "El resultado es: " + resultado3;
    }
    console.log("El resultado es: " + resultado3);
}