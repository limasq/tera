<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
include('conn.php');
  
$result = $conn->query("SELECT * FROM tb_lista_ans");
  
$output = "[";

while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($output != "[") {
        $output .= ",";
    }
	
    $output .= '{"id_ans":"' . $rs["id_ans"] . '",';
    $output .= ' "departamento":"' . $rs["departamento"] . '",';
    $output .= ' "responsavel":"' . $rs["responsavel"] . '",';
    $output .= ' "consulta":"' . $rs["consulta"] . '",';
    $output .= ' "alcance":"' . $rs["alcance"] . '",';
    $output .= ' "dt_assinatura":"' . $rs["dt_assinatura"] . '",';
    $output .= ' "email":"' . $rs["email"] . '",';
    $output .= ' "situacao":"' . $rs["situacao"] . '"}';
}

$output .= "]";
$conn->close();
  
echo $output;
?>