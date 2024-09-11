
// ATIVIDADE 01

// function verificarIdade(listaDeIdade){
//     for (let i = 0; i < listaDeIdade.length; i++){
//         if (listaDeIdade[i] < 18){
//             return "Alguem não pode entrar";
//         }
//         else{
//             return "Todos podem entrar!"
//         }
//     }
    
// }
// let idade = [19, 20]
// console.log(verificarIdade(idade))

// ATIVIDADE 02

// function numerosPares(){
//     let i = 1;
//     let contador = 0;
//     while(i <= 50){
//         if (i % 2 === 0){
//             contador = contador + 1;
//         }
//         i++
//     }
//     return contador
// }
// console.log(numerosPares()) 

//ATIVIDADE 003

// function classificarCor(numero){
//     switch (numero) {
//         case 1:
//             return "Cor Clara"
//         case 2:
//             return "Cor Média"
//         case 3:
//             return "Cor Escura"
//         default:
//             return "Cor Desconhecida"
//     }
// }
// console.log(classificarCor(1))

// ATIDADE 004

// function validarSenha(senha) {
//     const comprimento = senha.length;
//     switch (true) {
//         case (comprimento < 8):
//             return "Senha Fraca";
//         case (comprimento >= 8 && comprimento <= 12):
//             return "Senha Média";
//         case (comprimento > 12):
//             return "Senha Forte";

//     }
// }
// console.log(validarSenha("Neto026"))
// console.log(validarSenha("Neto.2602"))
// console.log(validarSenha("Neto.26022001"))

// ATIVIDADE 005

// function classificarNota (nota) {
//     switch (true) {
//         case (nota >= 90 && nota <= 100):
//             return "Nota A"
//         case (nota >= 80 && nota <= 89):
//             return "Nota B"
//         case (nota >= 60 && nota <= 69):
//             return "Nota D"
//         default:
//             return "Nota F"
//     }
// }
// console.log(classificarNota(90))

// ATIVIDADE 006

// function exibirFizzBuzz(){
//     for (let i = 1; i <=100; i++) {
//         if (i % 2 ===0 && i % 3 ===0 && i % 5 ===0){
//             console.log(i, "FizzBuzzBoom");
//         }else if(i % 2 ===0 && i % 3 ===0){
//             console.log(i, "FizzBuzz");
//         }else if(i % 3 ===0 && i % 5 ===0){
//             console.log(i, "BuzzBoom");
//         }else if(i % 2 ===0 && i % 5 ===0){
//             console.log(i, "FizzBoom");
//         }else if(i % 2===0){
//             console.log("Fizz")
//         }else if(i % 3===0){
//             console.log("Buuz")
//         }else if(i % 5===0){
//             console.log("Boom")
//         }else{
//             console.log(i)
//         }
//     }
// }
// exibirFizzBuzz()