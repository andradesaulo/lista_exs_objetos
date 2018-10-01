var clientes = [];
var contas = [];
//==========================
//Função para saber se o código do cliente existe,
//retorna true ou não.
//==========================
function existeCliente(cod){
    var existe;
    for(var i=0;i<clientes.length;i++){
        if(clientes[i].codCliente == cod){
            existe = true;
            return existe;
        }
    }
}
//-------------------------

//=================================
//Função para saber se cliente está vinculado com alguma conta,
//retorna true ou não
//=================================
function contaVinculada(cod){
    var vinculada;
    for(var i=0;i<contas.length;i++){
        if(contas[i].codCliente == cod){
            vinculada = true;
            return vinculada;
        }
    }
}
//---------------------------------

//============================
//Função para cadastrar clientes
//============================
function cadastraCliente(){
    //variáveis com os valores do form. de cadastro
    var codCliente = document.getElementById("codClienteCadastro").value;
    var nomeCliente = document.getElementById("nomeCliente").value;
    var msg;
    if(existeCliente(codCliente)){
        //Exibe msg de erro
        msg = "Cliente " + codCliente + " existente. Insira outro código";
        document.getElementById("msgCadastroCliente").innerHTML = msg;
    }else{
        //Cria um objeto cliente e o insere no vetor clientes
        var cliente = new Object();
        cliente.codCliente = parseInt(codCliente);
        cliente.nomeCliente = nomeCliente;
        clientes.push(cliente);
        //Exibe msg de sucesso
        msg = "Cliente " + codCliente + " cadastrado com sucesso!";
        document.getElementById("msgCadastroCliente").innerHTML = msg;
    }
}
//----------------------------

//======================
//Função para cadastrar contas
//======================
function cadastraConta(){
    //Variáveis com os valores do form. de cadastro
    var codCliente = document.getElementById("codClienteConta").value;
    var numConta = document.getElementById("numConta").value;
    var valCompra = document.getElementById("valCompra").value;
    var msg;
    if(existeCliente(codCliente)){
        //Cria um objeto conta e o insere no vetor contas
        var conta = new Object();
        conta.codCliente = codCliente;
        conta.numConta = parseInt(numConta);
        conta.valCompra = parseFloat(valCompra);
        contas.push(conta);
        //Exibe msg de sucesso
        msg = "Conta " + numConta + " cadastrada com sucesso!";
        document.getElementById("msgCadastroConta").innerHTML = msg;
    }else{
        //Exibe msg de erro
        msg = "Cliente " + codCliente + 
              " não cadastrado. Insira um código válido!";
        document.getElementById("msgCadastroConta").innerHTML = msg;
    }
}
//-------------------------

//=========================
//Função para remover clientes
//=========================
function removeCliente(){
    //variável com o valor do código do cliente
    var codCliente = document.getElementById("codClienteRemocao").value;
    var msg;
    if(contaVinculada(codCliente)){
        //Exibe msg de erro
        msg = "Exclusão não permitida.";
        document.getElementById("msgRemocaoCliente").innerHTML = msg;
    }else{
        var pos;
        //Procura a posição do código
        for(var i=0;i<clientes.length;i++){
            if(clientes[i].codCliente == codCliente){
                pos = i;
                break;
            }
        }
        //Remove o objeto cliente 
        clientes.splice(pos,1);
        //Exibe msg de sucesso
        msg = "Exclusão do cliente " + codCliente + " com sucesso!";
        document.getElementById("msgRemocaoCliente").innerHTML = msg;
    }
}
//------------------------
