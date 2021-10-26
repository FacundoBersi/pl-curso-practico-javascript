// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm²");

// RETO CLASE 9
function alturaTrianguloIsoc(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 !== base) {
        return Math.sqrt((lado1 ** 2) - ((base / 2) ** 2));
    } else {
        console.log("No has introducido un triangulo isósceles");
    }
}
console.groupEnd();

// Código del círuclo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
// CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputBase");
    const input2 = document.getElementById("InputLadoA");
    const input3 = document.getElementById("InputLadoB");
    const ladoA = input2.value;
    const ladoB = input3.value;
    const base = input1.value;

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputH = document.getElementById("InputAltura");
    const inputB = document.getElementById("InputBase");
    const altura = inputH.value;
    const base = inputB.value;

    const area = areaTriangulo(base, altura);
    alert(area + "cm²");
}

// CIRCULO
function calcularPerimetroCirculo() {
    const inputR = document.getElementById("InputCirculo");
    const radio = inputR.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const inputR = document.getElementById("InputCirculo");
    const radio = inputR.value;

    const area = areaCirculo(radio);
    alert(area);
}