// JavaScript Document
$(document).ready(function() {
	var entradas=$(".campos");
	var dica=$(".dica");
	var notificacao=$(".notificacao");
	
	
	
	function validarForm(campo){
		
		if(campo.val().length<=0)
		{
			msg="Este campo deve ser preenchido";
					
		}
		else if(campo.attr("name")=="email")
		{
			var contentInputEmail=campo.attr("name","email").val();
			
			if(contentInputEmail.indexOf("@")==-1 || contentInputEmail.indexOf(".com")==-1)
			{
				msg="Email invalido";
				
			}else if(contentInputEmail.length > 0)
			{
				msg=null;
				
			
			}
		
		}
		else if(campo.attr("type")=="password")
		{
			if(campo.attr("name","password").val().length <7){
		
				msg="Este campo deve conter no minimo 8 caracteres";
			}else if(campo.attr("name","password").val().length >0){msg=null;}
		
		}
		
		else
		
		{
			
			msg=null;
			
			
			
		};
		return msg;
		
	};
	
	
//inicio da função que envia o formulario	
$("input[type='submit']").click(function(e){
	e.preventDefault();
	var erro=0;
	
	$(".campos:visible").each(function(){
		//$(this).val().length <= 0 ? erro++ : "";//
		if($(this).val().length <=0){
			erro++;
			
			$(this).siblings(".notificacao").css("display","block");
			} 
		
	
	});
				
	if(erro > 0){
		
	}else{
	
	
		$(this).parent("form").submit();
	
	
	
	}



});

//fim da função que envia o formulario	




//eventos que chama a função validarform
	
	
	entradas.focus(function(){
		
		
		
			$(this).siblings(".dica").css("display","block");
			
			$(this).siblings(".notificacao").css("display","none");
		
		
		});
		
		
	entradas.blur(function(){
		
			$(this).siblings(".dica").css("display","none");
			
			
			validacao=validarForm($(this));
			
			
			$(this).siblings(".notificacao").html('<span class="seta_vemelha"></span>' + validacao);
			
			
			if(validacao==null){
			
				$(this).siblings(".notificacao").css("display","none");		

			}else{
				$(this).siblings(".notificacao").css("display","block");
			}
		
		
		});
		
	
	
		
    
});
