var dadosVeicEstados = [];

//================================
//Função para inserir dados no vetor dadosVeicEstados
//================================
function insereDados() {
    //variáveis com os dados do formulário de inserção
    var estado = document.getElementById("estado").value;
    var numVeiculos = document.getElementById("numVeiculos").value;
    var numAcidentes = document.getElementById("numAcidentes").value;
    var msg;
    //criando um objeto dado e inserindo no vetor acidentesCarros
    var dado = new Object();
    dado.estado = estado;
    dado.numVeiculos = parseInt(numVeiculos);
    dado.numAcidentes = parseInt(numAcidentes);
    dadosVeicEstados.push(dado);
    //Exibe msg de sucesso
    msg = "Dados inseridos com sucesso!"
    document.getElementById("msgDados").innerHTML = msg;
}
//---------------------

//==========================
//Função para calcular o maior e menor índice de acidentes
//==========================
function maiorMenorIndAcid(){
    var maior = dadosVeicEstados[0].numAcidentes;
    var estMaior = 0;
    var menor = dadosVeicEstados[0].numAcidentes;
    var estMenor = 0;
    var i;
    var msg;
    //Calculando o maior e o menor índice de acidentes
    //e guardando o estado de cada índice
    for(i=0;i<dadosVeicEstados.length;i++){
        if (dadosVeicEstados[i].numAcidentes > maior){
            maior = dadosVeicEstados[i].numAcidentes;
            //pos. do estado no vetor de objetos
            estMaior = i;
        }
        if(dadosVeicEstados[i]<menor){
            menor = dadosVeicEstados[i].numAcidentes;
            //pos. do estado no vetor de objetos
            estMaior = i;
        }
    }
    //Exibe resposta
    msg = "O estado com maior índice de acidentes foi "+
          dadosVeicEstados[estMaior].estado + " com " + maior + " acidentes." +
          "</br>" +
          "O estado com menor índice de acidentes foi " +
          dadosVeicEstados[estMenor].estado + " com" + menor + " acidentes.";
    document.getElementById("msgMaiorMenor").innerHTML = msg;
}
//----------------------------

//==============================
//Função para calcular o percentual de veiculos de cada estado
//==============================
function calcPercent(){
    var somaVeiculos = 0;
    var msg = "";
    //Somando o total de veículos dos estados
    for(var i=0;i<dadosVeicEstados.length;i++){
        somaVeiculos = somaVeiculos + dadosVeicEstados[i].numVeiculos;
    }
    //Calculando os percentuais
    for(var i=0;i<dadosVeicEstados.length;i++){
        msg = msg + dadosVeicEstados[i].estado + ": " + 
              parseInt(dadosVeicEstados[i].numVeiculos/somaVeiculos*100) + 
              "%</br>";
    }
    //Exibe msg com os percentuais
    document.getElementById("msgPercentVeic").innerHTML = msg;
}
//-----------------------------

//============================
//Função para calcular a média de acidentes
//===========================
function mediaAcid(){
    var somaAcid = 0;
    var msg;
    //Somando o total de acidentes
    for(var i=0;i<dadosVeicEstados.length;i++){
        somaAcid = somaAcid + dadosVeicEstados[i].numAcidentes;
    }
    //Exibindo msg com a médiad de acidentes
    msg = "A média de acidentes dos estados pesquisados foi de " +
          parseInt(somaAcid/dadosVeicEstados.length) + " acidentes.";
    document.getElementById("msgMediaAcid").innerHTML = msg;
}
//----------------------------