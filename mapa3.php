<html>
	<head>
		<title> Mapa 1 </title>
	
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="miScript.js"></script>
		<link rel="stylesheet" type="text/css" href="juego.css" />
		
		
		
	</head>
	
	<body onkeydown="moverNinja(event);">
	
	<input id ="nivel" type="button" value="EmpezarNivel ClickMe" onClick="datosEntrada(3)" />
	
	
		<div id="mapa">
			<div id="jugador"><img id="imgJU" class="imagenes"/></div>
			
			
			
			<div id="ene1" class "enemigo"><img id="imgEne1" class="imagenes"/></div>
			
			<div id="ene2" class "enemigo"><img id="imgEne2"  class="imagenes"/></div>
			
			<div id="ene3" class "enemigo"><img id="imgEne3" class="imagenes"/></div>
			
			<div id="ene4" class "enemigo"><img id="imgEne4" class="imagenes"/></div>
			
			<div id="boss" class "enemigo"><img src ="boss.gif" id="imgBoos"/></div>
			
			
			
			<div id="pared1"></div>
			<div id="llav"> <img id = "llave" src="llave.jpg"/></div> 
			<div id="puert"> <img id="puerta" src="puerta.jpg" /> </div>
			<div id="oro1"> <img class="oro" src="oro.png" /> </div>
			<div id="oro2"> <img class="oro" src="oro.png" /> </div>
			<div id="oro3"> <img class="oro" src="oro.png" /> </div>
			<div id="oro4"> <img class="oro" src="oro.png" /> </div>
			
		</div>
		
		<div id="pelea">
		    <img id="jugadorPelea" class="peleadores"/>
			<p id="nombreJuga" class="detalle">Enemigo: </p>
			<p id="vidaJuga" class="detalle">Vida:</p>
		    <img id="EnemigoPelea" class="peleadores"/>
			<p id="nombreEne" class="detalle">personaje: </p>
			<p id="vidaEne" class="detalle">Vida:</p>
		</div>
		
		<div id="Dados">
		<canvas id = "canvas" width = "400" height = "300">
		</canvas>
		<div id="resultadosAtack">
		<p id="ataJug">Ataque Final Jugador</p></br>
		<p id="ataEne">Ataque Final Enemigo</p>
		</div>
		</div>
		
		<div id="DatosJugador">
			<p id="nombreJugador"> <?php echo $_POST["nJugador"]; ?></p>
			<input id="tipoJuga" value="<?php  echo $_POST["TipoJugador"]; ?>" type="hidden"/>
			<input id="vidaPJ" value="<?php  echo $_POST["VidaP"];?>" name="vidaPersonaje" type="hidden"/>
			<p id="DatosDelJugador"></p>
			<p id="CantOro">Oro: </p>
		</div>
		
		<div id="accionesJugador">	
			<div id="atacar" class="acciones">
			<img id ="eve1" src="" class="imgEvento"/>
			</div>
			
			
			<div id="recoger" class="acciones">
			<img id="eve3" src="" class="imgEvento"/>
			</div>
		</div>
		
		<div id = "Final">
		<p id = "textFinal"> Derrotaste a los Enemigos :D</p>
		<a href="juego.html"> Regresar al Inicio </a>
		</div>
		
		<div id = "perder">
			<form method="post" action="juego.html">		
			<input type="submit" id="derrota" value="Perdistes  CLICK ME" />
		</form>	
		</div>
	
	</body>
</html>