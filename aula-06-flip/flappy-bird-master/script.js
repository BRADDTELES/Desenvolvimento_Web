let contador = 0;
let divElement = window.document.getElementById("incrementResult");
let alert = window.document.getElementById("alert");
console.log(divElement);

function incrementar() {
    console.time()
    console.log("Entrei na função incrementar");
    console.log("O contador estava em: ", contador);
    contador++;
    console.log("O contador foi definido para: ", contador);
    console.timeEnd();

    divElement.innerHTML = `<p>O resultado incremental é <mark>${contador}</mark></p>`
}
function zerar() {
    confirm = window.confirm("Deseja zerar o contador?");
    console.log(confirm);

    if (confirm) {
        contador = 0;
        divElement.innerHTML = `<p>O resultado incrementação foi zerado!</p>`;

        alert.innerHTML = `<div class="alert alert-success" role="alert">Valor Zerado com sucesso!</div>`
    
    } else {
        window.alert("Pedido de cancelamento não efetuado!");

        alert.innerHTML = `<div class="alert alert-success" role="alert">Cancelamento abortado!</div>`
    }

    
}
function cancelar(){
    confirm = window.confirm("Deseja Cancelar?")
    console.log(confirm);

    if (confirm) {
        window.alert("Cancelamento com sucesso!")

        alert.innerHTML = `<div class="alert alert-success" role="alert">Sucesso!</div>`
    } else {
        window.alert("Cancelamento, Não Efetuado")

        alert.innerHTML = `<div class="alert alert-success" role="alert">Abortado!</div>`
    }
}
