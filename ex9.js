var vet = [];
function adiciona(){
    var objeto = new Object();
    objeto.funcionario = document.getElementById("funcionario").value;
    objeto.salario = document.getElementById("salario").value;
    objeto.tdv = document.getElementById("tdv").value;
    objeto.com = document.getElementById("com").value;
    vet.push(objeto);
    document.getElementById("aviso").innerHTML = objeto.funcionario + " , inserido com sucesso !";
}
function calcula(){
    var i;
    var sm = 0;
    for(i=0;i<vet.length;i++){
        sm = Number(vet[i].salario) + Number(vet[i].tdv) + (tdv*(0.06));

    }

    document.getElementById("calcula").innerHTML = " . E o salário final foi de, " + sm;

}