var x1=0;
var y1=0;
var y_troll = 100;
var x_troll = 300;


function cambiarPosicionTroll() {
	
	x_troll = Math.floor(Math.random()*83) * 5;
    y_troll = Math.floor(Math.random()*75) * 5;
    $("#enemigo").css({ "top": y_troll + "px"});
    $("#enemigo").css({ "left": x_troll + "px"});
}


function detectarColision() {
    if (x1 == x_troll && y1 == y_troll) {
        $("#enemigo").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
        clearInterval(interval_id);
        $('#enemigo').fadeOut('slow', function() {
    // Animation complete.
      });
    }
}



function moverNinja(direccion)
		{
				
			switch(direccion.keyCode)
			{
				case 38:
					if( y1 > 0){
					detectarColision();
					y1-=50;
					document.getElementById("jugador").style.top=String(y1)+"px";
					 cambiarPosicionTroll();
					}
					
					
				break;
				case 37:
					if( x1 > 0){
					detectarColision();
					x1-=50;
					document.getElementById("jugador").style.left=String(x1)+"px";
					 cambiarPosicionTroll();
					}
					
					
				break;
				case 40:
					if( y1 < 550){
					detectarColision();
					y1+=50;
					document.getElementById("jugador").style.top=String(y1)+"px";
					 cambiarPosicionTroll();
					}
					
					
				break;
				case 39:
					if( x1 < 1250){
					detectarColision();
					x1+=50;
					document.getElementById("jugador").style.left=String(x1)+"px";
					 cambiarPosicionTroll();
					}
					
					
				break;
			}
		}
















//$("body").keypress(function(event) {
//  $("#g").css({ 'width': '50px'});
//  alert(event.which);
//});