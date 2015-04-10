$(document).ready(function(){
	$('#totalPergComJust').focus();
	$('#totalPergComJust').on('change', function(){
		var numero = $(this);
		verifica(numero, "comJust");
	});
	
	$('#totalPergSemJust').on('change', function(){
		var numero = $(this);
		verifica(numero,"semJust");
	});	
	function verifica(numero,str){
		
		if (numero.val() == ''){			
			alert('vazio');
		} else {
			if(numero.val() < 0){
				numero.val('');
				alert('não aceita num negativo');			
			} else {
				inicializa();
				contador = numero.val();				
				novoContador = parseInt(contador);
				if(str == "semJust"){
					geraSemJustifica(novoContador);
				} else {
					geraComJustifica(novoContador);			
				}
				numero.val("");

			}
				
		}						
	}	
	function inicializa(){
		$('#geraComJust').val("");
		$('#geraSemJust').val("");				
		var contador = 0;
	}
	
	function geraSemJustifica(numeroTotalPerguntas){
		//var array = [];	//cria uma array	
		//alert('num'+numeroTotalPerguntas);
		for(var i = 0; i< numeroTotalPerguntas; i++){
			var numero = i + 1;
			document.getElementById('geraSemJust').value += 
				'<p class="pergunta-obrigatoria">1 – Como conheceu o empreendimento?'+'\n'+
				'\t'+'<span class="label" id="label'+numero+'"><img src="img/error.png" /></span>'+'\n'+
				'\t'+'<span class="sucesso" id="sucesso'+numero+'"><img src="img/sucess.png" /></span></p>'+'\n'+
				'<table cellpadding="0" cellspacing="5" class="tabela-modelo-2">'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="mídia – qual?" /></td>'+'\n'+
				'\t\t'+'<td>mídia – qual? <input type="text" name="qual'+numero+'" class="campoContato" /></td>'+'\n'+
				'\t'+'</tr>'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="site da empresa" /></td>'+'\n'+
				'\t\t'+'<td>site da empresa</td>'+'\n'+
				'\t'+'</tr>'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="Placas" /></td>'+'\n'+
				'\t\t'+'<td>Placas</td>'+'\n'+
				'\t\t'+'</tr>'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="Indicação" /></td>'+'\n'+
				'\t\t'+'<td>Indicação</td>'+'\n'+
				'\t'+'</tr>'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="panfletos/folders" /></td>'+'\n'+
				'\t\t'+'<td>panfletos/folders</td>'+'\n'+
				'\t'+'</tr>'+'\n'+
				'\t'+'<tr>'+'\n'+
				'\t\t'+'<td><input type="radio" name="notapergunta'+numero+'" value="outros – qual?" /></td>'+'\n'+
				'\t\t'+'<td>outros – qual? <input type="text" name="outro'+numero+'" class="campoContato" /></td>'+'\n'+
				'\t'+'</tr>'+'\n'+
				'</table>'+'\n'
			;
		}		
		//imprimeArray(array);	
	}
	
	function geraComJustifica(numeroTotalPerguntas){
		for(var i = 0; i< numeroTotalPerguntas; i++){
			var numero = i + 1;		
			document.getElementById('geraComJust').value += 
			'<div id="pergunta'+numero+'">'+'\n'+
			'\t'+'<p class="pergunta-obrigatoria">5 – O atendimento foi educado e cortês.'+'\n'+
			'\t'+'<span class="label" id="label'+numero+'"><img src="img/error.png" /></span>'+'\n'+
			'\t'+'<span class="sucesso" id="sucesso'+numero+'"><img src="img/sucess.png" /></span></p>'+'\n'+
			'\t'+'<table cellpadding="0" cellspacing="5" class="tabela-modelo-1">'+'\n'+
			'<tr>'+'\n'+
			'\t'+'<td>Discordo Totalmente</td>'+'\n'+
			'\t'+'<td>Discordo</td>'+'\n'+
			'\t'+'<td>Não Concordo nem discordo</td>'+'\n'+
			'\t'+'<td>Concordo</td>'+'\n'+
			'\t'+'<td>Concordo Totalmente</td>'+'\n'+
			'\t'+'<td>NA (Não Aplicável)</td>'+'\n'+
			'</tr>'+'\n'+
			'<tr>'+'\n'+
			'\t'+'<td>1 <input type="radio" name="notapergunta'+numero+'" value="1" /></td>'+'\n'+
			'\t'+'<td>2 <input type="radio" name="notapergunta'+numero+'" value="2" /></td>'+'\n'+
			'\t'+'<td>3 <input type="radio" name="notapergunta'+numero+'" value="3" /></td>'+'\n'+
			'\t'+'<td>4 <input type="radio" name="notapergunta'+numero+'" value="4" /></td>'+'\n'+
			'\t'+'<td>5 <input type="radio" name="notapergunta'+numero+'" value="5" /></td>'+'\n'+
			'\t'+'<td>0 <input type="radio" name="notapergunta'+numero+'" value="NA (Não Aplicável)" /></td>'+'\n'+
			'</tr>'+'\n'+
			'</table>'+'\n'+
			'<br />'+'\n'+
			'O que foi decisivo para dar esta nota? Justificar notas 1 e 2'+'\n'+
			'<textarea  name="justifica'+numero+'"></textarea>'+'\n'+
			'</div>'+'\n'
		}
	}

});
