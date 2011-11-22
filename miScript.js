
var ataqueJugador;
var defensaJugador;
var vidaJugador;
var dañoJugador;
var defensaFinal;



var vidaEne;
var atacEne;
var defEne;
var danEne;

var llaveX=700;
var llaveY=0;


var x_puerta= 1250;
var y_puerta= 250;



var xOro1 = 0;
var yOro1 = 300;
var xOro2 = 450;
var yOro2 = 0;
var xOro3 = 550;
var yOro3 = 500;
var xOro4 = 1000;
var yOro4 = 300;
var cantOro=0;

var x1=0;
var y1=0;
var y_ene1 = 500;
var x_ene1 = 100;
var y_ene2 = 500;
var x_ene2 = 800;
var y_ene3 = 0;
var x_ene3 = 900;
var y_ene4 = 500;
var x_ene4 = 1200;
var x_boss = 1200;
var y_boss = 250;

var estadoBoss = true; 

var tengoLlave = false;
var lucha = false;
var nivel;

function datosEntrada(nivelMapa){
		nivel = nivelMapa;
		dibujar();
		$("#mapa").show();
		$("#recoger").show();
    	$('#nivel').hide();
		
}


$(document).ready(function inicio(){
		$("#mapa").hide();
    	$('#recoger').hide();
		$('#Final').hide();
		$('#perder').hide();	
		
	    var tipoJugador = $('#tipoJuga').val();
			vidaJugador=$('#vidaPJ').val();
			if(tipoJugador == 1){
			  $('#imgJU').attr("src", 'guerrero.jpg');
			  $('#jugadorPelea').attr("src", 'guerrero.jpg');
			    ataqueJugador = 10;
			    defensaJugador = 14;
			    dañoJugador = 15;
				$('#DatosDelJugador').text("Ataque:10  Defensa:14  Daño:15  Vida:"+vidaJugador);
			}else if(tipoJugador == 2){
				$('#imgJU').attr("src", 'sacerdote.jpg');
				$('#jugadorPelea').attr("src", 'sacerdote.jpg');
				ataqueJugador = 5;
				defensaJugador = 16;
				dañoJugador = 5;
				$('#DatosDelJugador').text("Ataque:5  Defensa:16  Daño:5  Vida:"+vidaJugador);			
			}else{
				$('#imgJU').attr("src", 'valkiria.jpg');
				$('#jugadorPelea').attr("src", 'valkiria.jpg');
				ataqueJugador = 10;
				defensaJugador = 12;
				dañoJugador = 20;
				$('#DatosDelJugador').text("Ataque:10  Defensa:12  Daño:20  Vida:"+vidaJugador);				
			}

		$("#pelea").hide();
    	$('#atacar').hide();
		$('#Dados').hide();
		$('#AvanzarNivel').hide();		
	
		$('#eve1').attr("src", 'espada.jpg');
		$('#eve3').attr("src", 'mano.png');
		$('#puert').hide();	
			
		$("#atacar").click(function(){
			realizarAtackJug();
			if(vidaEne > 0)
				realizarAtackEne();
				$("#vidaEne").text('Vida:'+vidaEne);
				$("#vidaJuga").text('Vida:'+vidaJugador);
					
					if(tipoJugador == 1)
					$('#DatosDelJugador').text("Ataque:10  Defensa:14  Daño:15  Vida:"+vidaJugador);
						else if(tipoJugador == 2)
						$('#DatosDelJugador').text("Ataque:5  Defensa:16  Daño:5  Vida:"+vidaJugador);	
							else
							$('#DatosDelJugador').text("Ataque:10  Defensa:12  Daño:20  Vida:"+vidaJugador);	
			if(vidaEne <= 0){
				alert("Usted mato al enemigo con "+ dañoJugador +" de daño")
				$("#pelea").hide();
				$("#atacar").hide();
				$("#recoger").show();
				$("#Dados").hide();
				$("#mapa").show();
				lucha = false;
			}
		});
		
		$("#recoger").click(function(){
			recogerLlave();
			abrirPuerta();
			recogerOro();
			$('#CantOro').text("Oro:"+cantOro);
		});
		
		

});


function abrirPuerta(){
		if(tengoLlave == true){
			if(nivel == 3 && estadoBoss == false){
				if(x1==x_puerta && y1==y_puerta){
					$("#mapa").hide();
					$('#AvanzarNivel').show();
					$('#Final').show();
					$('#vidaPersonajeE').attr("value",vidaJugador);
				}
				}
			else if(nivel == 2 || nivel == 1){
				if(x1==x_puerta && y1==y_puerta){
					$("#mapa").hide();
					$('#AvanzarNivel').show();
					$('#Final').show();
					$('#vidaPersonajeE').attr("value",vidaJugador);
				}
				}
			else{
				if(x1==x_puerta && y1==y_puerta)
					alert('Tienes que matar al boss Illian');
				}
			
			
		}
}
	
function dibujar(){
			if(nivel == 1){
				$("#imgEne1").attr('src','goblin.jpg');
				$("#imgEne2").attr('src','goblin.jpg');
				$("#imgEne3").attr('src','goblin.jpg');
				$("#imgEne4").attr('src','orco.jpg');
			
			}else if(nivel == 2){
				$("#imgEne1").attr('src','goblin.jpg');
				$("#imgEne2").attr('src','orco.jpg');
				$("#imgEne3").attr('src','orco.jpg');
				$("#imgEne4").attr('src','orco.jpg');
			 
			}else if(nivel ==3){
			    $("#boss").hide();
				$("#imgEne1").attr('src','orco.jpg');
				$("#imgEne2").attr('src','orco.jpg');
				$("#imgEne3").attr('src','orco.jpg');
				$("#imgEne4").attr('src','orco.jpg');
			
			}
}
	

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
			xEnemigo=xEnemigo-50;
		}
	else if(x1>xEnemigo && y1<yEnemigo){
		if(x1-xEnemigo<y1-yEnemigo)
			xEnemigo=xEnemigo+50;
		else
			xEnemigo=xEnemigo+50;
						
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
			y_ene1=yEnemigo;
			x_ene1=xEnemigo;
			$("#ene1").css({ "top": yEnemigo + "px"});
			$("#ene1").css({ "left": xEnemigo + "px"});
	}else if (TiEnemigo == 2){
			y_ene2 = yEnemigo;
			x_ene2 = xEnemigo;
			$("#ene2").css({ "top": yEnemigo + "px"});
			$("#ene2").css({ "left": xEnemigo + "px"});
	}else if (TiEnemigo == 3){
			y_ene3 = yEnemigo;
			x_ene3 = xEnemigo;
			$("#ene3").css({ "top": yEnemigo + "px"});
			$("#ene3").css({ "left": xEnemigo + "px"});
	}else if (TiEnemigo == 4){
			y_ene4 = yEnemigo;
			x_ene4 = xEnemigo;
			$("#ene4").css({ "top": yEnemigo + "px"});
			$("#ene4").css({ "left": xEnemigo + "px"});
	}
			
	
	
	
}


function recogerLlave(){
 if(x1 == llaveX && y1 == llaveY){
	llaveX = "eliminado";
	llaveY = "eliminado";
	tengoLlave = true;
	$("#llave").hide(); 
	$('#puert').show();	
	$("#boss").show();
 }
}

function recogerOro(){
	if(x1 == xOro1 && y1 == yOro1){
	xOro1= "eliminado";
	yOro1= "eliminado";
	$("#oro1").hide();
	cantOro=cantOro+25;
	}	else if(x1 == xOro2 && y1 == yOro2){
		xOro2= "eliminado";
		yOro2= "eliminado";
		$("#oro2").hide(); 
		cantOro=cantOro+25;
		} 	else if(x1 == xOro3 && y1 == yOro3){
			xOro3= "eliminado";
			yOro3= "eliminado";
			$("#oro3").hide(); 
			cantOro=cantOro+25;
			}	else if(x1 == xOro4 && y1 == yOro4){
				xOro4= "eliminado";
				yOro4= "eliminado";
				$("#oro4").hide(); 
				cantOro=cantOro+25;
				}
				
}
			
	

function comenzarDuelo(){

	$("#vidaEne").text('Vida:'+vidaEne);
	$("#vidaJuga").text('Vida:'+vidaJugador);
	
    $("#pelea").show();
    $("#mapa").hide();
    $('#atacar').show();
	$('#Dados').show();
    $('#recoger').hide();
	lucha = true;
}




function realizarAtackJug(){
 throwdice();
 var ataqueFinal;
 var preAtack = resultadoDados + ataqueJugador;
 
 if(preAtack > defEne){
   ataqueFinal = dañoJugador;
   $("#ataJug").text('Ataque Final Jugador'+' '+ataqueFinal);

 }else{ 
	ataqueFinal = 0;
	$("#ataJug").text('Ataque Final Jugador'+' '+ataqueFinal);
 }
 vidaEne = vidaEne - ataqueFinal ;
}

function realizarAtackEne(){
 var ataqueFinal;
 var preAtack = Math.floor((Math.random()*6) + 1) + Math.floor((Math.random()*6)+1) + atacEne;
 if(preAtack > defensaJugador){
   ataqueFinal = danEne;
   $("#ataEne").text('Ataque Final Enemigo'+' '+ataqueFinal);
 }else{ 
 ataqueFinal = 0;
 $("#ataEne").text('Ataque Final Enemigo'+' '+ataqueFinal);
 }
 vidaJugador = vidaJugador - ataqueFinal;
 
 if(vidaJugador<=0){
				$("#pelea").hide();
				$("#atacar").hide();
				$("#mapa").hide();
				$('#recoger').hide();
				$('#perder').show();
				$('#Dados').hide();
 }
}


function detectarColision() 
{
if(nivel == 1){ 
	if (y1==y_ene1 && x1 == x_ene1 ) {
		y_ene1 = "eliminado";
		x_ene1 = "eliminado";
		$("#ene1").hide();
		$('#EnemigoPelea').attr("src", 'goblin.jpg');
		vidaEne = 10;
		atacEne = 5; 
		defEne = 11;
		danEne = 5;
		comenzarDuelo();

    }else if(y1 == y_ene2 && x1 ==  x_ene2){
	    y_ene2 = "eliminado";
	    x_ene2 = "eliminado";
	    $("#ene2").hide(); 
        $('#EnemigoPelea').attr("src", 'goblin.jpg');		
	  vidaEne = 10;
		atacEne = 5; 
		defEne = 11;
		danEne = 5;
		comenzarDuelo();

	}else if(y1 == y_ene3 && x1 == x_ene3){
	  	y_ene3 = "eliminado";
	    x_ene3 = "eliminado";
		$("#ene3").hide();
		$('#EnemigoPelea').attr("src", 'goblin.jpg');
		vidaEne = 10;
		atacEne = 5; 
		defEne = 11;
		danEne = 5;
		comenzarDuelo();

	   
	}else if(y1 == y_ene4 && x1 == x_ene4){
	  	y_ene4 = "eliminado";
	    x_ene4 = "eliminado";
		$("#ene4").hide();
		$('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
	    comenzarDuelo();

	}

}
else if(nivel == 2){
if (y1==y_ene1 && x1 == x_ene1 ) {
	  y_ene1 = "eliminado";
	  x_ene1 = "eliminado";
	  $("#ene1").hide();
	  $('#EnemigoPelea').attr("src", 'goblin.jpg');
	  vidaEne = 10;
	  atacEne = 5; 
	  defEne = 11;
      danEne = 5;
	  comenzarDuelo();

    }else if(y1 == y_ene2 && x1 ==  x_ene2){
	    y_ene2 = "eliminado";
	    x_ene2 = "eliminado";
	    $("#ene2").hide(); 
        $('#EnemigoPelea').attr("src", 'orco.jpg');		
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
		comenzarDuelo();

	}else if(y1 == y_ene3 && x1 == x_ene3){
	  	y_ene3 = "eliminado";
	    x_ene3 = "eliminado";
		$("#ene3").hide();
		$('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
		comenzarDuelo();

	   
	}else if(y1 == y_ene4 && x1 == x_ene4){
	  	y_ene4 = "eliminado";
	    x_ene4 = "eliminado";
		$("#ene4").hide();
		$('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
	    comenzarDuelo();

	}

}
else{
	if (y1==y_ene1 && x1 == x_ene1 ) {
	  y_ene1 = "eliminado";
	  x_ene1 = "eliminado";
	  $("#ene1").hide();
	  $('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
	  comenzarDuelo();

    }else if(y1 == y_ene2 && x1 ==  x_ene2){
	    y_ene2 = "eliminado";
	    x_ene2 = "eliminado";
	    $("#ene2").hide(); 
        $('#EnemigoPelea').attr("src", 'orco.jpg');		
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
		comenzarDuelo();

	}else if(y1 == y_ene3 && x1 == x_ene3){
	  	y_ene3 = "eliminado";
	    x_ene3 = "eliminado";
		$("#ene3").hide();
		$('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
		comenzarDuelo();

	   
	}else if(y1 == y_ene4 && x1 == x_ene4){
	  	y_ene4 = "eliminado";
	    x_ene4 = "eliminado";
		$("#ene4").hide();
		$('#EnemigoPelea').attr("src", 'orco.jpg');
		vidaEne = 20;
		atacEne = 10; 
		defEne = 13;
		danEne = 10;
	    comenzarDuelo();

	}else if(y1 == y_boss && x1 == x_boss){
	  	y_boss = "eliminado";
	    x_boss = "eliminado";
		$("#boss").hide();
		$('#EnemigoPelea').attr("src", 'boss.gif');
		vidaEne = 100;
		atacEne = 13; 
		defEne = 16;
		danEne = 10;
	    comenzarDuelo();
		estadoBoss = false;
	}

}
}




function detectarParedDerecha()
{
    if(x1<=400 && y1<500 || y1>=500 || x1>550){
	 return true;
	}
	return false;
}

function detectarParedIzquierda()
{
	if(x1>=650 || x1<=450 || y1>=500){
	 return true;
	}
   return false
}

function detectarParedArriba()
{
	if(x1>=600 || x1<=450 || x1>450 && x1<600 && y1==550){
	 return true;
	}
    return false
}

function detectarParedAbajo()
{
   return true
}



function moverEnemigosMapa1(){

		cambiarPosicionEnemigo(x_ene1,y_ene1,1);
		cambiarPosicionEnemigo(x_ene2,y_ene2,2);
		cambiarPosicionEnemigo(x_ene3,y_ene3,3);
		cambiarPosicionEnemigo(x_ene4,y_ene4,4);
}


function moverNinja(direccion)
{
if(lucha == false)
	switch(direccion.keyCode)
	{
	case 38: 
		if( y1 > 0){
		if(detectarParedArriba()==true){
		moverEnemigosMapa1();
		y1-=50;
		document.getElementById("jugador").style.top=String(y1)+"px";
		detectarColision() ;
		}
		}
		
	


break;
	case 37:
        if( x1 > 0){
		if(detectarParedIzquierda()==true){
		moverEnemigosMapa1();
		x1-=50;
		document.getElementById("jugador").style.left=String(x1)+"px";
		detectarColision() ;
	}
		
	}


break;
	case 40:

		if( y1 < 550){
		if(detectarParedAbajo()==true){
		moverEnemigosMapa1();
		y1+=50;
		document.getElementById("jugador").style.top=String(y1)+"px";
		detectarColision();
		}
	}


break;
	case 39:
if( x1 < 1250){
		if(detectarParedDerecha()==true){
		moverEnemigosMapa1();
		x1+=50;
		document.getElementById("jugador").style.left=String(x1)+"px";
		detectarColision() ;
		}
	}


break;
}
}


/* Lanzar Dados */

var cwidth = 400;
  var cheight = 300;
  var dicex = 50;
  var dicey = 50;
  var dicewidth = 100;
  var diceheight = 100;
  var dotrad = 6;
  var ctx;
  var dx;
  var dy;
  var firstturn = true;
  var point;
  var resultadoDados;
  
  function throwdice(){
    var ch = 1+Math.floor(Math.random()*6);
    resultadoDados = ch;
    dx = dicex;
    dy = dicey;
    drawface(ch);
    dx = (dicex + 150);
    ch = 1+Math.floor(Math.random()*6);
    resultadoDados += ch;
    drawface(ch);
 }
  
  function drawface(n) {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(dx, dy,dicewidth, diceheight);
    ctx.strokeRect(dx, dy,dicewidth, diceheight);
    var dotx;
    var doty;
    ctx.fillStyle = "#009966";
      switch(n){
        case 1:
          draw1();
          break;
        case 2:
          draw2();
          break;
        case 3:
          draw2();
          draw1();
          break;
        case 4:
          draw4();
          break;
        case 5:
          draw4();
          draw1();
          break;
        case 6:
          draw4();
          draw2mid();
          break;
      }
  
  }
  
  function draw1(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + .5*dicewidth;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
  
  function draw2(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    
  }
  
  function draw4(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + 3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
  
  function draw2mid(){
    var dotx;
    var doty;
    ctx.beginPath();
    dotx = dx + 3*dotrad;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx = dx + dicewidth-3*dotrad;
    doty = dy + .5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
	
	
  }
