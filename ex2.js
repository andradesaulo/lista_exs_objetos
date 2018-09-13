var vet = [];
function cadastra(){
    var pizza = new Object();
    pizza.idade = document.getElementById("idade").value;
    pizza.filhos = document.getElementById("filhos").value;
    pizza.sexo = document.getElementById("sexo").value;
    pizza.salario = document.getElementById("salario").value;
    pizza.rg = document.getElementById("rg").value;
    //insere pizza no vetor
    vet.push(pizza);
    document.getElementById("aviso").innerHTML = pizza.rg +
        " inserido com sucesso";
}
function item1(){
    var i;
    var soma = 0;
    for(i=0;i<vet.length;i++){
        soma = soma + Number(vet[i].salario);
    }
    document.getElementById("item1").innerHTML = soma/vet.length;
}

function item2(){
    var i;
    var soma = 0;
    for(i=0;i<vet.length;i++){
        soma = soma + Number(vet[i].filhos);
    }
    document.getElementById("item2").innerHTML = soma/vet.length;
}

function item3(){
    var i;
    var maior = vet[0].salario;
    for(i=0;i<vet.length;i++){
        if(vet[i].salario > maior){
            maior = vet[i].salario;
        }
    }
    document.getElementById("item3").innerHTML = maior;
}

function item4(){
    var i;
    var conta = 0;
    for(i=0;i<vet.length;i++){
        if((vet[i].sexo == "f")&&(vet[i].salario > 1000)){
            conta++;
        }
    }
    document.getElementById("item4").innerHTML = conta/vet.length*100;
}

function busca(){
    var rgProcurado = document.getElementById("rgProcurado").value;
    var i;
    for(i=0;i<vet.length;i++){
        if(vet[i].rg == rgProcurado){
            document.getElementById("posicao").innerHTML = 1;
        }
    }
}

function busca2(){
    var objeto = new Object();
    objeto.idade = document.getElementById("idadeProcurado").value;
    objeto.filhos = document.getElementById("filhosProcurado").value;
    objeto.sexo = document.getElementById("sexoProcurado").value;
    objeto.salario = document.getElementById("salarioProcurado").value;
    objeto.rg = document.getElementById("rgProcurado").value;
    var posicao = vet.indexOf(objeto);
}