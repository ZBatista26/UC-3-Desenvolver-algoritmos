let livros = [

    {"Titulo": "Harry potter e a camara cecreta", "Quantidade": 15},
    {"Titulo": "Coraline", "Quantidade": 5},
    {"Titulo": "Diario de um banana", "Quantidade": 10},
    {"Titulo": "Naruto", "Quantidade": 2}

];
let livrosMaisDoQue10 = []

function livrosEmEstoque(){
    livros.forEach((livro => {
        // console.log(livro);
        if(livro.Quantidade >= 10){
            // console.log(livro)
        livrosMaisDoQue10.push(livro)

        }
    }))

    return livrosMaisDoQue10;
}

console.log(livrosEmEstoque())








