let listaAmigos= [];
let numeroMaximo=5;
function asignarTextoElemento(elemento, texto){
    elemento.innerHTML = texto;
    return;
}


function adicionarAmigos() {

    let amigoInput = document.getElementById('valorAmigoSecreto').value;
    let showFriends = document.getElementById('showFriends');

    if (amigoInput.trim()=== ""){
        alert ("No puedes ingresar vacio");
        return;
    }
    if (listaAmigos.length>=5){
        alert("El limite de amigos a ingresar es de 5");
        return;
    }

    listaAmigos.push(amigoInput);


    asignarTextoElemento(showFriends, listaAmigos.join("<br>"));
    
}


function sortearAmigos() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
    let amigoSorteado = listaAmigos[numeroGenerado];
    asignarTextoElemento(showFriends,amigoSorteado);
    
    return;

}


