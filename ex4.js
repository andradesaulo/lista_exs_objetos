var habitantes = [];
//Função de cadastro de habitantes
function cadastraHab(){
    var habitante = new Object();
    habitante.rg = parseInt(document.getElementById("rg").value);
    habitante.sexo = document.getElementById("sexo").value;
    habitante.idade = parseInt(document.getElementById("idade").value);
    habitante.nFilhos = parseInt(document.getElementById("nFilhos").value);
    habitante.rendFam = parseFloat(document.getElementById("rendFam").value);
    habitantes.push(habitante);
}
//Função para calcular a média salarial dos habitantes
function mediaSalHab(){
    var soma = 0;
    var mediaSal;
    for(var i = 0;i<habitantes.length;i++){
        soma += habitantes[i].rendFam
    }
    mediaSal = soma/habitantes.length
    document.getElementById("mediaSalHab").innerHTML = medialSal;
}
//Função para calcular a maior e a menor idade habitacional
function menorMaiorIdade(){
    var menorIdade = habitantes[0].idade;
    var maiorIdade = habitantes[0].idade;
    for(var i = 1;i<habitantes.length;i++){
        if(menorIdade < habitantes[i].idade){
            menorIdade = habitantes[i].idade;
        }
        if(maiorIdade > habitantes[i].idade){
            maiorIdade = habitantes[i].idade;
        }
    }
    document.getElementById("maiorIdade").innerHTML = maiorIdade;
    document.getElementById("menorIdade").innerHTML =  menorIdade;
}
//Função para calcular a quantidade de mulheres com mais de 2 filhos e com renda
//familiar inferior a R$600,00
function quantMulheres(){
    var quantMulheres = 0;
    for(var i = 0;i<habitantes.length;i++){
        if((habitantes[i].sexo = "F")&&
        (habitantes[i].nFilhos > 2)&&
        (habitantes[i].rendFam < 600)){
           quantMulheres++ 
        }
    }
    document.getElementById("quantMulheres").innerHTML = quantMulheres;
}
