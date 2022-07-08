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

$mensagem = "ola";

 $mail = new PHPMailer();
 $mail->IsSMTP(); 
 $mail->CharSet = 'UTF-8';
 $mail->True;
 $mail->Host = "smtp.gmail.com"; // Servidor SMTP
 $mail->SMTPSecure = "tls"; // conexão segura com TLS
 $mail->Port = 587; 
 $mail->SMTPAuth = true; // Caso o servidor SMTP precise de autenticação
 $mail->Username = "sonhandoaltobrasil@gmail.com"; // SMTP username
 $mail->Password = "S0nh@nd0Alto"; // SMTP password
 $mail->From = "naoresponder@sonhandoaltobrasil.com"; // From
 $mail->FromName = "Sonhando Alto Brasil" ; // Nome de quem envia o email
 $mail->AddAddress($mailDestino, $nome); // Email e nome de quem receberá //Responder
 $mail->WordWrap = 50; // Definir quebra de linha
 $mail->IsHTML = true ; // Enviar como HTML
 $mail->Subject = $assunto ; // Assunto
 $mail->Body = '<br/>' . $mensagem . '<br/>' ; //Corpo da mensagem caso seja HTML
 $mail->AltBody = "$mensagem" ; //PlainText, para caso quem receber o email não aceite o corpo HTML

if(!$mail->Send()) // Envia o email
 { 
 echo "Erro no envio da mensagem";
 } 


?>