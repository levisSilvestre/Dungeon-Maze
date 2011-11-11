$(document).ready(function(){
		
			
		$('#guerrero').click(function(){
			$('#descripcion').text("Guerro:");
			$('#ataque').text("Ataque : 10");
			$('#defensa').text("Defensa : 14");
			$('#daño').text("Daño : 15");
			$('#vida').text("Vida : 100");
			$('#text').css('background-color','#E6E6FA');
			$('.personaje').css('border','solid 4px black');
			$('#guerrero').css('border','solid 4px red')
		
			
		});
		
		$('#clerigo').click(function(){
			$('#descripcion').text("Clerigo:");
			$('#ataque').text("Ataque : 5");
			$('#defensa').text("Defensa : 16");
			$('#daño').text("Daño : 5");
			$('#vida').text("Vida : 150");
			$('.personaje').css('border','solid 4px black');
			$('#clerigo').css('border','solid 4px red')
			
		});
		
		$('#valkiria').click(function(){
		$('#descripcion').text("Valkiria:");
		$('#ataque').text("Ataque : 10");
		$('#defensa').text("Defensa : 12");
		$('#daño').text("Daño : 20");
		$('#vida').text("Vida : 50");
		$('.personaje').css('border','solid 4px black');
		$('#valkiria').css('border','solid 4px red')		
		});
			
		
		
});		

	















