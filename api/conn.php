<?php 

	$host = "localhost";
	$base = "localwork";
	$user = "root";
	$pass = "melancia";
	
	$conn = new mysqli($host, $user, $pass, $base);	// importante que esta sequência não seja alterada!
	
	if ($conn->connect_error){
		exit ("Erro: {$conn->connect_error}");
	} 
?>