<html>
	<head>
		<title> Mapa 1 </title>
	
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="miScript.js"></script>
		<link rel="stylesheet" type="text/css" href="juego.css" />
		
	</head>
	
	<body onkeydown="moverNinja(event);">
		<div id="mapa">
			<div id="jugador"><img id="imgJU" class="imagenes"/></div>
			<div id="goblin1" class "enemigo"><img src="goblin.jpg" class="imagenes"/></div>
			<div id="goblin2" class "enemigo"><img src="goblin.jpg" class="imagenes"/></div>
			<div id="goblin3" class "enemigo"><img src="goblin.jpg" class="imagenes"/></div>
			<div id="orco1" class "enemigo"><img src="orco.jpg" class="imagenes"/></div>
		</div>
		
		<div id="DatosJugador">
			<p id="nombreJugador"> <?php echo $_POST["nJugador"]; ?></p>
			<input id="tipoJuga" value="<?php  echo $_POST["TipoJugador"]; ?>" type="hidden"/>
			<p id="DatosDelJugador">Ataque:  Defensa:  Daño:  Vida:</p>
		</div>
		
		<div id="accionesJugador">	
			<div id="atacar" class="acciones">
			aa
			</div>

			<div id="defender" class="acciones">
			bb
			</div>
			
			<div id="recoger" class="acciones">
			cc
			</div>
		</div>
	
	</body>
</html>