let amigosLista= [];

function agregarAmigo() {

    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value;

    if (!nombreAmigo){
        alert ("No puedes agregar vacio como nombre");
        return;
    }
    amigosLista.push(nombreAmigo);
    amigoInput.value = "";
    amigoInput.focus();
    renderizarAmigos();
}


function renderizarAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for (let i = 0; i < amigosLista.length; i++ ){
        let item = document.createElement("li");
        item.textContent = amigosLista[i];
        listaAmigos.appendChild(item);
    }


}

function sortearAmigo() {
    if (amigosLista.length===0){
        alert("Ingrese amigos para sortear");
        return;
    }

    let amigoSorteado = amigosLista[Math.floor(Math.random()*amigosLista.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es : ${amigoSorteado}`;

    let limpiarLista = document.getElementById ("listaAmigos");
    limpiarLista.innerHTML="";
   
}



