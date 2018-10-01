var vet = [];
function insere(){
    var objeto = new Object();
    objeto.codigo = document.getElementById("codigo").value;
    objeto.qtde = document.getElementById("qtde").value;
    objeto.valor = document.getElementById("valor").value;
    objeto.descricao = document.getElementById("descricao").value; 
    vet.push(objeto);
    document.getElementById("aviso").innerHTML = objeto.codigo +
    " inserido com sucesso";
    // chama a ordenação
    ordena();
}
function ordena(){
    var i,j;
    var aux = new Object();
    for(i=0;i<vet.length;i++){
        for(j=i+1;j<vet.length;j++){
            if (vet[i].codigo > vet[j].codigo){
                aux = vet[i];
                vet[i] = vet[j];
                vet[j] = aux;
            }
        }
    }
}
function altera(){
    var codigo = parseInt(document.getElementById("codAltera").value);
    for(var i = 0; i < vet.length;i++){
        if(vet[i].codigo == codigo){
            vet[i].qtde = parseInt(document.getElementById("qtdeAltera").value);
            vet[i].descricao = document.getElementById("descrAltera").value;
            vet[i].valor = parseFloat(document.getElementById("valorAltera").value);
            document.getElementById("msgAltera").innerHTML = "Produto alterado com sucesso"
            break;
        }
    }
    if(i==vet.length){
        document.getElementById("msgAltera").innerHTML = "Produto não encontrado"
    }
}
function mostraLetra(){
    var letra = document.getElementById("letra").value;
    var saida = "";
    for(var i=0;i<vet.length;i++){
        if(vet[i].descricao.charAt(0)==letra){
            saida += vet[i].descricao+"<br/>";
        }
    }
    document.getElementById("mostraLetra").innerHTML = saida;
}
function estoque(){
    var saida="";
    for(var i=0;i<vet.length;i++){
        if(vet[i].qtde<5){
            saida += vet[i].descricao+"<br/>";
        }
    }
    document.getElementById("msgEstoque").innerHTML = saida;
}
