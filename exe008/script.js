// function classificarNota (){
//     const nota = parseInt (prompt("Digite a nota de todos os alunos"))
//     let resultado 
//     if (nota > 90) {
//         resultado = `A. Exelente grabalho!`;
//     else if (nota >= 80) {
//         resultado = `B. Bom Trabalho!`;
//     else if (nota >= )
//     }
//     }
// }

// SPLICE

// const numeros = [1,2,3,4,5,6]
// numeros.splice(1,1,"Batista")
// console.log(numeros)

// // PUSH Adiciona no final
// const numeros = [1,2,3,4,5,6]
// numeros.push("BATISTA")
// console.log(numeros)


// INDEXOF procura o numero do indice 

// const numeros = [1,2,3,4,5,6]
// console.log(numeros.indexOf(2)) -> 1

// const nomes = ["francisco", "batista", "silva", "neto"]
// console.log(nomes.indexOf("batista")) // -> 1


// LASTINDEXSOF

// pega o indice da ultima vez que ele foi adicionado 
// const numeros = ["Batista","neto","francisco","Batista", "Batista", "Silva", "Neto", "Neto"];
// console.log(numeros.lastIndexOf("Batista"))

// INCLUIDES

// const nomes = ["Francisco", "Batista","Silva", "neto"]
// console.log(nomes.includes("Francisco")) // -> batista


// POP remove um dos índices

// const nomes = ["Francisco", "Batista", "Silva", "Neto"]
// const ultimo = numeros.pop()
// console.log(ultimo)
// console.log(nomes)

// SHIFT Remove o primeiro índice

//const nomes = ["francisco", "batista", "silva", "neto"]
// const primeiro = nomes.shift()
// console.log(primeiro)
// console.log(nomes) // -> apagou o "francisco"


// SPLICE REMOVE OS NÚMEROS DO MEIO

// const nomes = ["francisco", "batista", "silva", "neto"]
// const meio = nomes.splice(2,2)
// console.log(meio)
// console.log(nomes) // -> "silva", "neto" foram removidos

// ESVAZIAR 
// let numeros = ["francisco", "batista", "silva", "neto"]
// numeros.length = 1
// console.log(numeros) -> francisco


// QUESTÃO 1
// 01

// let frutas = ["maçã", "banana", "laranja"];
// frutas.splice(0,0, "Abaxaxi");
// console.log(frutas);

// 02

// let fruta = ["maçã", "banana", "laranja"]
// fruta.splice(3,3,"manga")
// console.log(fruta)

// 03

// let fruta = ["maçã", "banana", "laranja"]
// const primeiro = fruta.shift()
// console.log(primeiro);
// console.log(fruta);

// 04

// let fruta = ["maçã", "banana", "laranja"]
// let ultimo = fruta.pop()
// console.log(ultimo)
// console.log(fruta)

// QUESTÃO 2

// 01
// let numero = [10, 20, 30, 40, 50]
// numero.splice(2, 0, 25)
// console.log(numero)

// 02
// let numero = [10, 20, 30, 40, 50]
// meio = numero.splice(3,1)
// console.log(meio)
// console.log(numero)

// QUESTÃO 3

// let cores = ["vermelho", "azul", "verde", "amarelo", "azul"]
// console.log(cores.indexOf("azul"))

// let cores = ["vermelho", "azul", "verde", "amarelo", "azul"]
// console.log(cores.lastIndexOf("azul"))

// let cores = ["vermelho", "azul", "verde", "amarelo", "azul"]
// console.log(cores.includes("roxo"))

// QUESTÃO 4

//01

// let alunos = ["joão", "Ana", "Carlos", "Bia"]
// const meio = alunos.splice(2,1)
// console.log(meio)
// console.log(alunos)

// 02

// let alunos = ["joão", "Ana", "Carlos", "Bia"]
// const final = alunos.shift()
// console.log(final)
// console.log(alunos)

// 03

// let alunos = ["joão", "Ana", "Carlos", "Bia"]
// alunos.splice(0,0, "Pedro")
// console.log(alunos)

//QUESTÃO 5

// 01

// let animais = ["gato", "cachorro", "pássaro", "peixe"]
// const inicio = animais.shift()
// console.log(inicio)
// console.log(animais)
 
// 02

// let animais = ["gato", "cachorro", "pássaro", "peixe"]
// animais.splice(4,0, "Hamster")
// console.log(animais)

// 03

// let animais = ["gato", "cachorro", "pássaro", "peixe"]
// const meio = animais.splice(2,1)
// console.log(meio)
// console.log(animais)

// 04

// let animais = ["gato", "cachorro", "pássaro", "peixe"]
// console.log(animais.includes("gato"))

// QUESTÃO 6

// 01

// let livros = ["O senhor dos anéis", "1984", "O pequeno príncipe", "Harry Potter"];
// console.log(livros.indexOf("1984"))

// 02

// let livros = ["O senhor dos anéis", "1984", "O pequeno príncipe", "Harry Potter"];
// const meio = livros.splice(2,1);
// console.log(meio);
// console.log(livros);

// QUESTÃO 7

// 01

// let cidades = ["São Paulo", "Rio de Janeiro", "Salvador", "Brasília"];
// console.log(cidades.includes("Salvador"));

// 02

// let cidades = ["São Paulo", "Rio de Janeiro", "Salvador", "Brasília"];
// const inicio = cidades.splice(0,0, "Curitiba")
// console.log(inicio)
// console.log(cidades)

// QUESTÃO 8

// let jogos = ["FIFA", "Minecraft", "Fortinite", "Among"]
// const meio = jogos.splice(1,1, "the sims")
// console.log(jogos)

// let jogos = ["FIFA", "Minecraft", "Fortinite", "Among"]
// const inicio = jogos.shift()
// console.log(inicio)
// console.log(jogos)

// QUESTÃO 9

// let esportes = ["futebol", "basquete", "vôlei", "tênis"]
// const inicio = esportes.shift()
// console.log(inicio)
// console.log(esportes)

// let esportes = ["futebol", "basquete", "vôlei", "tênis"]
// const verificar = esportes.includes("vôlei")
// console.log(verificar)

// let esportes = ["futebol", "basquete", "vôlei", "tênis"]
// const meio = esportes.splice(2,1)
// console.log(meio)
// console.log(esportes)

// QUESTÃO 10 

// let tecnologias = ["HTML", "CSS", "JavaScript","React"]
// console.log(tecnologias.pop())
// console.log(tecnologias)

// let tecnologias = ["HTML", "CSS", "JavaScript","React"]
// const adicionar = tecnologias.unshift("node.js")
// console.log(tecnologias)

let id = "100";
{
let id = 200;
id = id + 1;
console.log(id);
}

