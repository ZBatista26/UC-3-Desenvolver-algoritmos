// LISTA 06

// 1
// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.push("uva");
// frutas.shift();

// function verificarFruta() {
//     let fruta = prompt("Digite uma fruta:");
//     console.log(fruta);
//     let check = frutas.includes(fruta);
//     console.log(check);
//     if (check) {
//         console.log("Fruta encontrada");
//         alert("Fruta encontrada");
//     } else {
//         console.log("Fruta não encontrada");
//         alert("Fruta não encontrada");
//     }
// }

// verificarFruta();

// 2 
// let operacao = prompt("Digite uma operação")
// let a = parseFloat(prompt("Digite um número"))
// let b = parseFloat(prompt("Digite outro número"))
// console.log(operacao)
// console.log(a)
// console.log(b)

// function calcular(){
// let calculo;

// if (operacao === "soma"){
//     calculo = (a + b)
//     console.log(calculo)
//     console.log(`O resultado é ${calculo} para ${a} + ${b}`)
//     alert(`O resultado é ${calculo} para ${a} + ${b}`)
// }
// else if (operacao === "subtracao"){
//     calculo = (a - b)
//     console.log(calculo)
//     console.log(`O resultado é ${calculo} para ${a} - ${b}`)
//     alert(`O resultado é ${calculo} para ${a} - ${b}`)
// }
// else if (operacao === "multiplicacao"){
//     calculo = (a * b)
//     console.log(calculo)
//     console.log(`O resultado é ${calculo} para ${a} * ${b}`)
//     alert(`O resultado é ${calculo} para ${a} * ${b}`)
// }
// else if (operacao === "divisao"){
//     calculo = (a / b)
//     console.log(calculo)
//     console.log(`O resultado é ${calculo} para ${a} / ${b}`)
//     alert(`O resultado é ${calculo} para ${a} / ${b}`)
// }
// else {
//     console.log("Operação inválida");
//     alert("Operação inválida");

// }
// }
// calcular()

// 3

// let numeros = [1, 2, 3, 4, 5];
// let numerosAumentados = [];

// for (let i = 0; i < numeros.length; i++) {
//     numerosAumentados.push(numeros[i] + 5);
// }

// console.log(numerosAumentados);

// 4

// function classificarNota(nota) {
//     switch (true) {
//         case (nota >= 7 && nota <= 10):
//             return "Aprovado";
//         case (nota >= 0 && nota < 7):
//             return "Reprovado";
//         default:
//             return "Nota inválida";
//     }
// }

// // Exemplos de uso:
// console.log(classificarNota(8)); // Aprovado
// console.log(classificarNota(5)); // Reprovado
// console.log(classificarNota(11)); // Nota inválida


// 5

// let numeros = [5, 10, 15, 20];

// function verificarNumero(numero) {
//     if (numero < 10) {
//         return "menor que 10";
//     } else if (numero >= 10 && numero <= 20) {
//         return "entre 10 e 20";
//     } else {
//         return "maior que 20";
//     }
// }

// for (let i = 0; i < numeros.length; i++) {
//     console.log(`O número ${numeros[i]} é ${verificarNumero(numeros[i])}`);
// }


// 6

// let idade = 10
// if (idade >= 18 && idade <= 65){
//     console.log("Adulto")
// }
// else{
//     console.log("Não é adulto.")
// }


// 7
// numeros = []
// function fizzBuzz(n){

// for (i = 1; i < n; i++){
// if (i % 3 == 0 && i % 5 == 0){
//     numeros.push("fizzBuzz")
// }
// else if (i % 5 == 0){
//     numeros.push("Buzz")
// }
// else if (i % 3 == 0){
//     numeros.push("Fizz")
// }
// else{
//     numeros.push(i)
// }
// }}
// fizzBuzz(16)
// console.log(numeros)

//  8

// tarefas = ["estudar", "limpar", "comprar"];
// tarefas.splice(1, 1, "exercitar");
// tarefas.splice(2, 0);
// console.log(tarefas.length);
// console.log(tarefas)

// 9 
// function calcularMedia(){
//     nota1 = 7;
//     nota2 = 9;
//     soma = nota1 + nota2;
//     divide = soma / 2
//     console.log(`${divide} é o resultado da média de ${nota1} e ${nota2}`)
// }
// calcularMedia()

// 10
// let valores = [5, 10, 15, 20];
// let valoresDivididos = [];
// i = 0;

// while (i < valores.length){
//     valoresDivididos.push  (valores[i] /2)
//     i++

//     }
// console.log(valoresDivididos)

// 11

// let solicitarNumero = parseInt(prompt("Digite um número: "))
// let solicitarOutroNumero = parseInt(prompt("Digite outro número: "))
// function compararSoma(a,b) {
//   let soma= a + b
//   return soma>20 ? "a soma é maior que 20": "é menor"
// }
// alert (compararSoma(solicitarNumero,solicitarOutroNumero))

// 12
// let solicitarNumero = parseInt(prompt("Digite um número: "))

// for (let i = 1; i <= solicitarNumero; i++){
//     if (i % 3 === 0){
//         alert(`${(i)} é divisivel por 3!`)
//     }
//     else{
//         alert(`${(i)}`)
//     }
// }


// 13


// let solicitarNumero = parseInt(prompt("Digite um número: "))
// numeros = []

// for (let i = 1; i <= solicitarNumero; i++){
//    numeros.push(i)
// }

// for (let i = 0; i < numeros.length; i++){
//     let quadrado = numeros[i] * numeros[i]
//     alert(`O quadrado de ${numeros[i]} é ${quadrado}`)
// }


// 14

// function verificarValor(a){
//     a = parseInt(prompt("Digite um número:"))
//     if (a<0){
//         alert("O número fornecido é negativo")
//     }
//     else if (a == 0){
//     alert("O número fornecido é zero!")
// }
//     else{
//         alert("O número fornecido é positivo")
//     }
// }
// verificarValor()


// 15

// let solicitarNumero = parseInt(prompt("Digite um número: "))

// for (let i = 1; i <= solicitarNumero; i++){
//     if (i % 2 === 0){
//         alert(`${(i)} é par!`)
//     }
//     else{
//         alert(`${(i)} é impar`)
//     }
// }