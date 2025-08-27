function validacao(){
    let x, caixa=0, erro=false;
    document.getElementById("mensagem").innerHTML="";

    if(document.fCadastro.nome.value==""){
        document.getElementById("mensagem").innerHTML="<br> Preencha seu nome"
        document.fCadastro.nome.focus();
        erro=true
    }
    if(document.fCadastro.idade.value==""){
        document.getElementById("mensagem").innerHTML="<br> Preencha sua idade";
        document.fCadastro.idade.focus();
        erro=true
        res=document.getElementById("iidade")
        res.style.boxShadow="2px 2px 30px solid red"
        
    }
    if(!document.fCadastro.sexo[0].checked && !document.fCadastro.sexo[1].checked){
        document.getElementById("mensagem").innerHTML="<br> informe seu sexo"
        erro=true
    }
    for(x=0; x<3; x++){
        if(document.fCadastro.esporte[x].checked){
            caixa=1
        }
    }

    if(caixa==0){
        document.getElementById("mensagem").innerHTML="<br> Informe pelo menos um esporte"
        erro=true
    }
    if(document.fCadastro.estacao.selectedIndex==0){
        document.getElementById("mensagem").innerHTML="<br> Informe sua estação favorita"
        erro=true
    }
    if(erro==false){
        document.fCadastro.submit();
        
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

}