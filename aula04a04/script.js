// let permissao
// permissao = 'gerente'

// switch (permissao) {
//     case 'comum':
//         console.log ('usuário comum')
//         break;
//     case 'gerente':
//         console.log('usuário Gerente')
//         break;
//     case 'diretor':
//         console.log('Usuário Diretor')
//         break;
//         default:
//             console.log('Usuário não reconhecido')
//             break
        

// }

// 001

// for(let i = 1; i <= 10; i++){
//     if (i % 2 !==0){
//         console.log('Estou aprendendo', i)
//     }
// }

//002

// let i = 1
// while (i<=10){
//     if (i % 2 !==10){
//         console.log(i)
//     }
//     i++
// }

// método for
 
// for (let i=0; i<5; i++){
//     console.log(i);
// }

// Método while

// let i=0
// while (i<5){
//     console.log(i);
//     i++
// }

// 001

// for (let i=1; i<=10; i++){
// console.log(i);
// }

// 002

// let  i = 1
// while (i <= 10){
//     console.log(i)
//     i++
// }
    
//003

// let  batista = 0
// for (let i = 1; i <= 5; i++){
//     batista = batista + i;

// }

// console.log(batista)

//004

// let batista = 0 
// let i = 1
// while (i <= 5){
//     batista = batista + i;
//     i++
// }
// console.log(batista)

//005

// let batista = 1
// let i  = 2
// for (let i = 2; i <= 4; i++){
//     batista = batista * i
// }
// console.log(batista)

//006

// let batista = 1
// let i = 2
// while (i <= 4){
//     batista = batista * i;
//     i++
// }
// console.log(batista)

//007

// for (let i = 1; i <= 10; i++){
//     if (i % 2 ===0){
//         console.log(i, "= Par")
//     } else {
//         console.log(i,"= impar")
//     }
        
// }
    
    
//008

// let i = 1
// while (i <= 10){
//     if(i % 2 === 0){
//         console.log(i, "par")
//     } else {
//         console.log(i,"impar")
//     } 
//     i++

//     }
    /// 008 errada
    //  for (let i = 1; i <=20; i++){
    //     if( i % 3 === 0){
    //         console.log(i,"fizz")
    //     } else if ( i % 5 === 0){
    //         console.log(i,"Buzz")
    //     } else (i % 3 === 0 && i % 5 ===0){
    //         console.log(i, "FizzBuzz")
    //     }
    //  }  

    //009 certa

    //  for (let i = 1; i <=20; i++){
    //     if (i % 3 === 0 && i % 5 ===0) {
    //         console.log(i, "FizzBuzz")
    //     }else if(i % 3 === 0){
    //         console.log(i,"fizz")
    //     }else if( i % 5 === 0){
    //         console.log(i,"Buzz")
    //     }else{
    //         console.log(i)
    //     }

//010



//001

// function verificarIdade(listaDeIdade){
//     for (let i = 0; i < listaDeIdade.length; i++){
//         if (listaDeIdade[i] < 18){
//             return "Alguem não pode entrar";

//         }
//         else{
//             return "Todos podem entrar"
//         }
//     }
// }
//  let idade = [19, 20]
//  console.log(verificarIdade(idade))

//002

// function numerosPares(){
//     let i = 1
//     let contador = 0
//     while(i <= 50){
//         if (i % 2 ===0){
//             contador = contador + 1;
//         }
//         i++
//     }  
// return contador
// }
// console.log(numerosPares())


//003

let test = prompt("Run", "code");
