<?php
/*-------------------------------------------------

	Form Processor Plugin
	by SemiColonWeb

---------------------------------------------------*/


/*-------------------------------------------------
	PHPMailer Initialization
---------------------------------------------------*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception; 

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mailDestino = "simei@smoler.com.br";
$nome = "simei smoler";
$assunto = "teste";
$mensagem = "ola";

 $mail = new PHPMailer();
 $mail->IsSMTP(); // enable SMTP
 $mail->CharSet = 'UTF-8';
 $mail->SMTPDebug = 1;
 $mail->Mailer = "smtp";
 $mail->Timeout =   60; // set the timeout (seconds)
 $mail->Host = "mail.formulario.email"; // Servidor SMTP
 $mail->Port = 465; 
 $mail->SMTPAuth = true;
 $mail->SMTPSecure = 'tls';
 $mail->IsHTML(true);
 $mail->Username = "sonhandoalto@formulario.email"; // SMTP username
 $mail->Password = "S0nh@ndoAlt0"; // SMTP password
 $mail->AddAddress($mailDestino, $nome); // Email e nome de quem receberá //Responder
 $mail->WordWrap = 50; // Definir quebra de linha
 $mail->IsHTML = true ; // Enviar como HTML
 $mail->Subject = $assunto ; // Assunto
 $mail->Body = '<br/>' . $mensagem . '<br/>' ; //Corpo da mensagem caso seja HTML
 $mail->AltBody = "$mensagem" ; //PlainText, para caso quem receber o email não aceite o corpo HTML

 if($mail->send()){
    echo 'mensagem enviadat';
}else{
    echo 'não pode ser enviada.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}


?>