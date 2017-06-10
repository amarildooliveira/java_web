
<script> 

function validar(){
	
	elementoUsuario = document.getElementById("txtUsuario");
	textoDigitadoUsuario = elementoUsuario.value;
	
	
	elementoSenha=document.getElementById("txtSenha");
	textoDigitadoSenha = elementoSenha.value;
	
	if(textoDigitadoUsuario=="" || textoDiditadoSenha==""){
		window.alert("Os campos usuario e senha devem ser digitados!#");
		return false;
	}else{
		return true;
	}
	

}

//Instanciando objeto
aut= new Auticacao();

</script>