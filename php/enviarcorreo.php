<?php
$para = 'cristoph.galarchenko@gmail.com';
$asunto = 'Contacto desde elalquimista.pro';

$nombre = $_REQUEST['nombre'];
$email = $_REQUEST['email'];
$mensaje = $_REQUEST['mensaje'];

$msjCorreo = "Nombre: $nombre\n\nE-Mail: $email\n\nMensaje:\n$mensaje";

$cabecera = 'From: '.$nombre.' <'.$email.'>'."\r\n".
			'Reply-To: '.$email."\r\n";

if (isset($_REQUEST['submit'])){
	if (@mail($para, $asunto, $msjCorreo, $cabecera)){
		echo "<script language='javascript'>
		alert('Correo enviado :) Dame un dia para responderte.');
		window.location.href = '../';
		</script>";
	} else {
		echo "<script language='javascript'>
		alert('Fallo el envio :( Refresca la pagina y reintenta.');
		window.location.href = '../';
		</script>";
	}
}
?>