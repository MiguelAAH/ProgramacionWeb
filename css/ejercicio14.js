function calcular() {
    let cadena = document.getElementById("num1").value;
    let arreglo = cadena.split(',').map(Number);
    let maximo = Math.max(...arreglo);
    let minimo = Math.min(...arreglo);
    let suma = arreglo.reduce((a, b) => a + b, 0);
    let promedio = suma / arreglo.length;
    let par = arreglo.filter(n => n % 2 === 0);
    let impar = arreglo.filter(n => n % 2 !== 0);
    document.getElementById("num2").value = maximo;
    document.getElementById("num3").value = minimo;
    document.getElementById("num4").value = promedio;
}