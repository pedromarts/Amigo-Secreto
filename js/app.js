
let amigos = []

// Botão adicionar
function adicionar () {
    let amigo = document.getElementById ('nome-amigo');
    let lista =document.getElementById ('lista-amigos');
    amigos.push (amigo.value);  //adicionando ao array amigos = []  
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
    let sorteio = document.getElementById ('lista-sorteio');

    for (let i = 0; i <  amigos.length - 1; i++){
       
       if (i == amigos.length) {
        sorteio.innerHTML =  sorteio.innerHTML + amigos[i] + ' --> ' + amigos [0] + '<br>'
       } else {
        sorteio.innerHTML =  sorteio.innerHTML + amigos[i] + ' --> ' + amigos [i+ 1] + '<br>';
       }
    }

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

function reiniciar () { 
    amigos = [];
    let lista =document.getElementById ('lista-amigos').innerHTML = '';
    let sorteio = document.getElementById ('lista-sorteio').innerHTML = '';
    

}