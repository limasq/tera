<?php 

	$host = "localhost";
	$base = "localwork";
	$user = "root";
	$pass = "melancia";
	
	$conn = new mysqli($host, $user, $pass, $base);	// importante que esta sequência não seja alterada!
	
	if ($conn->connect_errno){
		echo "falha ao conectar: (" . $conn->connect_errno . ")" . $conn->connect_errno;
		die();
	} 
?>