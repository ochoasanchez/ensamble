<?php
if (isset($_REQUEST['submitted'])) {
  $name = $_REQUEST['fullName'];
  $company = $_REQUEST['companyName'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phoneNumber'];
  $description = $_REQUEST['message'];
  $from = "From: ensambleingenieria.com "; //Site name
  // Change this to your email address you want to form sent to
  $to = "info@ensambleingenieria.com";
  $subject = "Nuevo mensaje de contacto";

  $message = "Nombre: " . $name . "\n
  Empresa: " . $company . "\n
  Correo: " . $email ."\n
  Teléfono: " . $phone ."\n
  Mensaje: " . $description ."";

  mail($to,$subject,$message,$from);
	
	header("location: ../../success.html");
}