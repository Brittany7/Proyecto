<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ejercicio 1</title>
</head>
<body>

	<h1 style="color:#7B1313;">Formulario de Datos</h1>
	<form name="f1" action="php/mensaje.php" method="post">
		<label>Nombre: </label>
		<input type="text" name="nom" id="nom"><br><br>
		
		<label>Especialidad:</label>
		<select name="espec" id="espec">
			<option value="TIC">Tecnologías de la Información</option>
			<option value="DN">Desarrollo de Negocios</option>
			<option value="MEC">Mecatrónica</option>
		</select><br><br>

		<label>Fecha de Nacimiento</label>
		<input type="date" name="fechaNac" id="fechaNac">

		<input type="submit" name="mostrar" value="Mostrar datos">
	</form>
	
</body>
</html>