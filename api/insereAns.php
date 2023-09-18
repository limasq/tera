<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
include('conn.php');
  
$query("
    INSERT INTO `tb_lista_ans` (
        `id_ans`, `departamento`, `responsavel`, `consulta`, `validade`, `dt_assinatura`, `email`, `situacao`
    ) VALUES (
        NULL, 'dpto abc', 'fnrf', 'poupança', '2', '2023-09-11', 'abcfc@fnrf.com', '1');
");
  

  
return 99;
?>