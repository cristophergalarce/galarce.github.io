<?php
$para = 'cristoph.galarchenko@gmail.com';
$asunto = 'Contacto desde el portfolio';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$msjCorreo = "Nombre: $nombre\n\nE-Mail: $email\n\nMensaje:\n$mensaje";

$cabecera = 'From: '.$nombre.' <'.$email.'>'."\r\n".
			'Reply-To: '.$email."\r\n";

if ($_POST['submit']){
	if (mail($para, $asunto, $msjCorreo, $cabecera)){
		echo "<script language='javascript'>
		alert('Correo enviado :) Dame un dia para responderte.');
		self.location = '../';
		</script>";
	} else {
		echo "<script language='javascript'>
		alert('Fallo el envio :( Refresca la pagina y reintenta.');
		self.location = '../';
		</script>";
	}
}
?>