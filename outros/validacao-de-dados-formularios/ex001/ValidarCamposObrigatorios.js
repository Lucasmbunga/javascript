function validacao(){
    let x, caixa=false, erro=false;
    if(document.fCadastro.nome.value==""){
        alert("Por favor, preencha o seu nome!");
        document.fCadastro.nome.focus();
        erro=true



    }
    if(document.fCadastro.idade.value==""){
        alert("Por favor, preencha sua idade!");
        document.fCadastro.idade.focus();
        erro=true
    }
    if(!document.fCadastro.sexo[0].checked && !document.fCadastro.sexo[1].checked){
        alert("Por favor, informe seu sexo!")
        erro=true
    }
    for(x=0; x<3; x++){
        if(document.fCadastro.esporte[x].checked){
            caixa=true
        }
    }

    if(caixa==false){
        alert("Por favor, informe pelo menos um esporte!")
        erro=true
    }
    if(document.fCadastro.estacao.selectedIndex==0){
        alert("Por favor, informe a estação do ano favorito!")
        erro=true
    }
    if(erro==false){
        document.fCadastro.submit();
        erro=true
    }
}

function dadosRecebidos(){
    let n, i, s, e;
    n=document.fCadastro.nome.value;
    i=document.fCadastro.idade.value;
    if(document.fCadastro.sexo[0].checked){
        s=document.fCadastro.sexo[0].value;
    }
    else{
        s=document.fCadastro.sexo[1].value;
    }
    for(x=0; x<3; x++){
        if(document.fCadastro.esporte[x].checked){
            e=document.fCadastro.esporte[x].value;
        }
    }
    est=document.fCadastro.estacao.value;
    document.write("Nome="+n);
    document.write("<br> Idade="+i);
    document.write("<br>Sexo="+s);
    document.write("<br>Esporte="+e);
    document.write("<br>Estação="+est)


}