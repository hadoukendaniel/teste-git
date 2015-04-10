$(document).ready(function(){
	
	$('[name="tipopergunta"]').on('click',function(){
		var valor = $(this).val();

		if(valor == "comjustifica"){
			$('.semjustifica').hide();
			$('.comjustifica').show();
		} else {
			$('.comjustifica').hide();
			$('.semjustifica').show();
		}
		limpaCampos();
	});
	
	function limpaCampos(){
		$('#geraComJust').val("");
		$('#geraSemJust').val("");
	}
});