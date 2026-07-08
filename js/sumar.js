function sumar() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = num1 + num2;
    document.getElementById('num3').value = num3;
}