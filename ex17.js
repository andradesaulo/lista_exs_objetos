var vet = [];
function insere(){
    var habitante = new Object();
    habitante.sexo = document.getElementById("sexo").value;
    habitante.olhos = document.getElementById("olhos").value;
    habitante.idade = parseInt(document.getElementById("idade").value);
    habitante.altura = document.getElementById("altura").value;
    vet.push(habitante);
    document.getElementById("aviso").innerHTML = "Criado com sucesso";
}
function item1(){
    var i; var media = 0; var qtde = 0; var soma = 0;
    for(i=0;i<vet.length;i++){
        if((vet[i].olhos == "C")&&(vet[i].altura > 1.60)){
            soma = soma + vet[i].idade;
            qtde++;
        }
    }
    document.getElementById("item1").innerHTML = soma/qtde;
}