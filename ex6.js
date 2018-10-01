var clientes = [];
var contas = [];

//==============================
//Função para saber se o cliente existe 
//de acordo com o código inserido
//==============================
function existeCliente(codInserido){
    var codigo = parseInt(document.getElementById(codInserido).value);
    for(var i=0;i<clientes.length;i++){
        if(codigo == clientes[i].numCliente){
            var codExiste = true;
            break;
        }
    }
    return codExiste;
}
//------------------------------

//===============================
//Função para saber se a conta existe
//de acordo com o código inserido
//==============================
function existeConta(codInserido){
    var codigo = parseInt(document.getElementById(codInserido).value);
    for(var i=0;i<contas.length;i++){
        if(codigo == contas[i].numConta){
            var codExiste = true;
            break;
        }
    }
    return codExiste;
}
//-----------------------------

//=========================
//Função para fechar a janela de cadastro de clientes
//=========================
function fechaCadastro(){
    document.getElementById("cadastroClientes").setAttribute("class","inv");
}
//------------------------

//====================
//Função de cadastro de clientes
//====================
function cadastraCliente(){
    if(existeCliente("numCliente")){
        //mensagem de erro
        document.getElementById("msgCadrCliente")
        .innerHTML = "Cliente já cadastrado, insira um número " + 
                    "de cliente válido";
    }
    else{
        //variáveis com os valores do formulário de cadastro
        var numCliente = document.getElementById("numCliente").value
        var nomeCliente = document.getElementById("nomeCliente").value;
        var telCliente = document.getElementById("telCliente").value;
        var endCliente = document.getElementById("endCliente").value;
        //criando um objeto cliente e inserindo dentro do vetor clientes
        var cliente = new Object();
        cliente.numCliente = parseInt(numCliente);
        cliente.nomeCliente = nomeCliente;
        cliente.telCliente = telCliente;
        cliente.endCliente = endCliente;
        cliente.conta;
        clientes.push(cliente);
        //mensagem de sucesso
        document.getElementById("msgCadrConta").innerHTML = "";
        var msg = "Cliente " + cliente.numCliente + " cadastrado com sucesso!";
        document.getElementById("msgCadrCliente").innerHTML = msg;
        document.getElementById("fechaCadastro").setAttribute("class", "vis");
    }
}
//-----------------------------

//==========================
//Função de cadastro de contas
//==========================
function cadastraConta(){
    if(existeConta("numConta")){
        //mensagem de erro
        var numConta = document.getElementById("numConta").value;
        var msg = "A conta " +  numConta +
                  " já existe. Insira um número de conta válido.";
        document.getElementById("msgCadrConta").innerHTML = msg;
    }
    else 
        if(existeCliente("numClienteConta")){
            //variáveis com os valores do formulário de cadastro
            var numConta = document.getElementById("numConta").value;
            var saldo = document.getElementById("saldoConta").value
            var numCliente = document.getElementById("numClienteConta").value;
            //criando um objeto conta e inserindo no vetor de contas
            var conta = new Object();
            conta.numConta = parseInt(numConta);
            conta.saldo = parseFloat(saldo);
            conta.numCliente = parseInt(numCliente);
            contas.push(conta)
            //mensagem de sucesso
            msg = "Conta "+ conta.numConta + " cadastrada com sucesso!";
            document.getElementById("msgCadrConta").innerHTML = msg;
        }else{
            //mensagem de erro
            msg = "Cliente não cadastrado. Insira um número de cliente "+
                  "válido ou cadastre-o"
            document.getElementById("msgCadrConta").innerHTML = msg
            //mostra a janela de cadastro de clientes
            document.getElementById("cadastroClientes")
                    .setAttribute("class","vis");
    }
}
//---------------------

//========================
//Função para mostrar as contas cadastradas
//========================
function mostraContas(){
    var msg = "";
    for(var i=0;i<contas.length;i++){
        if(i == contas.length-1){
            msg = msg + contas[i].numConta + ".";
            console.log(msg);
        }
        else{
            msg = msg + contas[i].numConta + ",";
            console.log(msg);
        }
    }
    document.getElementById("todasContas").innerHTML = msg;
}
//----------------