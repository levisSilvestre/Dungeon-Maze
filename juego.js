$(document).ready(function(){


			$('#guerrero').click(function(){
					$('#descripcion').text("Guerro:");
					$('#ataque').text("Ataque : 10");
					$('#defensa').text("Defensa : 14");
					$('#daño').text("Daño : 15");
					$('#vida').text("Vida : 100");
					$('#text').css('background-color','#E6E6FA');
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 1);
					$('#guerrero').css('border','solid 4px red')


			});

			$('#clerigo').click(function(){
					$('#descripcion').text("Clerigo:");
					$('#ataque').text("Ataque : 5");
					$('#defensa').text("Defensa : 16");
					$('#daño').text("Daño : 5");
					$('#vida').text("Vida : 150");
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 2);
					$('#clerigo').css('border','solid 4px red')

			});

			$('#valkiria').click(function(){
					$('#descripcion').text("Valkiria:");
					$('#ataque').text("Ataque : 10");
					$('#defensa').text("Defensa : 12");
					$('#daño').text("Daño : 20");
					$('#vida').text("Vida : 50");
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 3);
					$('#valkiria').css('border','solid 4px red')
			});



});








