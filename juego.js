$(document).ready(function(){


			$('#guerrero').click(function(){
					$('#descripcion').text("Guerrero:");
					$('#ataque').text("Ataque : 10");
					$('#defensa').text("Defensa : 14");
					$('#daño').text("Daño : 15");
					$('#vida').text("Vida : 100");
					$('#text').css('background-color','#E6E6FA');
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 1);
					$('#VidaJuga').attr("value", 100);
					$('#guerrero').css('border','solid 4px red');
					$('#personajes').css('background-image','url(fondoGuerrero.jpg)');
					$('#descripcion').css('color','red');
					$('.descrip').css('color','red');


			});

			$('#clerigo').click(function(){
					$('#descripcion').text("Clerigo:");
					$('#ataque').text("Ataque : 5");
					$('#defensa').text("Defensa : 16");
					$('#daño').text("Daño : 5");
					$('#vida').text("Vida : 150");
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 2);
					$('#VidaJuga').attr("value", 150);
					$('#clerigo').css('border','solid 4px red');
					$('#personajes').css('background-image','url(fondoM.jpg)');
					$('#descripcion').css('color','red');
					$('.descrip').css('color','red');
			});

			$('#valkiria').click(function(){
					$('#descripcion').text("Valkiria:");
					$('#ataque').text("Ataque : 10");
					$('#defensa').text("Defensa : 12");
					$('#daño').text("Daño : 20");
					$('#vida').text("Vida : 50");
					$('.personaje').css('border','solid 4px black');
					$('#tipoJuga').attr("value", 3);
					$('#VidaJuga').attr("value", 50);
					$('#valkiria').css('border','solid 4px red');
					$('#personajes').css('background-image','url(fondoV.jpeg)');
					$('#descripcion').css('color','red');
					$('.descrip').css('color','red');
			});



});








