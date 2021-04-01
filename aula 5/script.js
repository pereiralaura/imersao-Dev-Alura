function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    listarFilmesNaTela(filmeFavorito)
    if(filmeFavorito.endsWith('.jpg')){
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert("Imagem Inválida")
    } 
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

//Revisão
//input = campo em branco
//button = botão
//on.Click"()" = no momento que você clica já chama a função

//function = função
//document.querySelector = 
//afas.value = o que escrevemos na caixinha branca
//afasf.endsWith = terminar com...
//.innerHTML = 