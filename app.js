let amigosLista= [];
let numeroMaximo=5;

function agregarAmigo() {

    let amigoInput = document.getElementById('amigo').value;
    let listaUL = document.getElementById('listaAmigos');

    if (amigoInput.trim()=== ""){
        alert ("No puedes ingresar vacio");
        return;
    }
    if (amigosLista.length>=numeroMaximo){
        alert("El limite de amigos a ingresar es de 5");
        return;
    }

    amigosLista.push(amigoInput);


    let nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = amigoInput;
    listaUL.appendChild(nuevoElementoLista);
    
}


function sortearAmigo() {

    let resultadoUL = document.getElementById ("resultado");
    let listaUL = document.getElementById ("listaAmigos")

    if (amigosLista.length===0){
        alert("Ingrese amigos para sortear");
        return;
    }

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
    let amigoSorteado = amigosLista[numeroGenerado];
    resultadoUL.innerHTML = "";

    let resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = "El amigo secreto es :" + amigoSorteado;
    resultadoUL.appendChild(resultadoElemento);

    amigosLista = [];
    listaUL.innerHTML = "";

   
}



