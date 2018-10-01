var vet = [];
function cadastra(){
    var objeto = new Object();
    objeto.cliente = document.getElementById("cliente").value;
    objeto.sr = document.getElementById("sr").value;
    objeto.data = document.getElementById("data").value;
    objeto.valor = document.getElementById("valor").value;
    objeto.os = document.getElementById("os").value;
    vet.push(objeto);
    document.getElementById("aviso").innerHTML = objeto.os + " Inserido com sucesso";
}
function consultar(){
    var i;
    var soma = 0;
    var maior = vet[0].valor;
    for(i=0;i<vet.length;i++){
        soma = soma + Number(vet[i].valor) ;
        if(vet[i].valor > maior){
            maior = vet[i].valor;
        }
    }
    for(i=0;i<vet.length;i++){
        if(vet[i].valor = maior){
            var pmc = i;
        }
    }
    media = soma / vet.length ;
    document.getElementById("consulta").innerHTML = "A média foi, " + media.toFixed(2) + 
    " Do(a) cliente, " +   vet[pmc].cliente +
    " . Na data " + vet[pmc].data + 
    " . Com a descrição do serviço de " + vet[pmc].sr ;
}