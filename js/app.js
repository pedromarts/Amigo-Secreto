
let amigos = []


// Botão adicionar
function adicionar () {
    let amigo = document.getElementById ('nome-amigo');
    let lista =document.getElementById ('lista-amigos');
    amigos.push;    
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value = '';
}



// Botão  Sortear
function sortear (){
    embaralha (amigos);
    }





// Função embaralhar (compõe sortear)
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// Botão  Reiniciar
    // limpar os campos 