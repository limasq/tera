<?php
	include('conn.php');

	$id_ans = $_GET["id_ans"];
    $out = array('error' => false);
 
   	$sql = "DELETE FROM tb_lista_ans WHERE id_ans = '$id_ans'";
   	$query = $conn->query($sql);
 
   	if($query){
   		$out['msg'] = 'ANS removida com sucesso!';
   	}
   	else{
   		$out['msg'] = 'Erro - ANS persiste!';
   	}
 
    echo json_encode($out);
?>