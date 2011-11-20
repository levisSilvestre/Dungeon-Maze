var x1=0;
var y1=0;
var y_goblin1 = 500;
var x_goblin1 = 100;
var y_goblin2 = 500;
var x_goblin2 = 800;
var y_goblin3 = 0;
var x_goblin3 = 900;
var y_orco1 = 500;
var x_orco1 = 1200;

	$(document).ready(function(){
	var tipoJugador = $('#tipoJuga').val();

			if(tipoJugador == 1)
			$('#imgJU').attr("src", 'guerrero.jpg');
				else if(tipoJugador == 2)
				$('#imgJU').attr("src", 'sacerdote.jpg');
					else
					$('#imgJU').attr("src", 'valkiria.jpg');
	});




function cambiarPosicionEnemigo(xEnemigo,yEnemigo,TiEnemigo) {

	if(x1>xEnemigo && y1>yEnemigo){
		if(x1-xEnemigo<y1-yEnemigo)
		xEnemigo=xEnemigo+50;
			else
				yEnemigo=yEnemigo+50;
	
	}
		else if(x1<xEnemigo && y1<yEnemigo){
			if(xEnemigo-x1<yEnemigo-y1)
			xEnemigo=xEnemigo-50;
				else
					yEnemigo=yEnemigo-50;
			
		}
			else if(x1<xEnemigo && y1>yEnemigo){
				if(xEnemigo-x1<y1-yEnemigo)
				xEnemigo=xEnemigo-50;
					else
						yEnemigo=yEnemigo+50;
			}
				else if(x1>xEnemigo && y1<yEnemigo){
					if(x1-xEnemigo<y1-yEnemigo)
					xEnemigo=xEnemigo+50;
						else
						yEnemigo=yEnemigo-50;
						
				}
					else if(x1 == xEnemigo){
						if((y1-yEnemigo)>0)
							yEnemigo=yEnemigo+50;
							else
							yEnemigo=yEnemigo-50;
						
					}
						else if((y1 == yEnemigo)){
							if(x1-xEnemigo>0)
								xEnemigo=xEnemigo+50;
								else
								xEnemigo = xEnemigo-50;
						}	
					

	if(TiEnemigo == 1){
	y_goblin1=yEnemigo;
	x_goblin1=xEnemigo;
    $("#goblin1").css({ "top": yEnemigo + "px"});
    $("#goblin1").css({ "left": xEnemigo + "px"});
	}	else if (TiEnemigo == 2){
		y_goblin2 = yEnemigo;
		x_goblin2 = xEnemigo;
		$("#goblin2").css({ "top": yEnemigo + "px"});
		$("#goblin2").css({ "left": xEnemigo + "px"});
		}	else if (TiEnemigo == 3){
			y_goblin3 = yEnemigo;
			x_goblin3 = xEnemigo;
			$("#goblin3").css({ "top": yEnemigo + "px"});
			$("#goblin3").css({ "left": xEnemigo + "px"});
		}
			else if (TiEnemigo == 4){
			y_orco1 = yEnemigo;
			x_orco1 = xEnemigo;
			$("#orco1").css({ "top": yEnemigo + "px"});
			$("#orco1").css({ "left": xEnemigo + "px"});
		}
			
	
	
	
}
/*
function detectarColision() {
    if (x1 == x_troll && y1 == y_troll) {
        $("#enemigo").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
        clearInterval(interval_id);
        $('#enemigo').fadeOut('slow', function() {
    // Animation complete.
      });
    }
}
*/

function moverEnemigosMapa1(){
		cambiarPosicionEnemigo(x_goblin1,y_goblin1,1);
		cambiarPosicionEnemigo(x_goblin2,y_goblin2,2);
		cambiarPosicionEnemigo(x_goblin3,y_goblin3,3);
		cambiarPosicionEnemigo(x_orco1,y_orco1,4);
}

function moverNinja(direccion)
{

	switch(direccion.keyCode)
	{
	case 38:
		if( y1 > 0){
		y1-=50;
		document.getElementById("jugador").style.top=String(y1)+"px";
		moverEnemigosMapa1();
	}


break;
	case 37:
		if( x1 > 0){
		x1-=50;
		document.getElementById("jugador").style.left=String(x1)+"px";
		moverEnemigosMapa1();
	}


break;
	case 40:
		if( y1 < 550){
		y1+=50;
		document.getElementById("jugador").style.top=String(y1)+"px";
		moverEnemigosMapa1();
	}


break;
	case 39:
		if( x1 < 1250){
		x1+=50;
		document.getElementById("jugador").style.left=String(x1)+"px";
		moverEnemigosMapa1();
	}


break;
}
}



