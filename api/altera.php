<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
include('conn.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$id_ans = $_POST['id_ans'];
(isset($_POST['situacao']) && !empty($_POST['situacao']) ? $situacao = $_POST['situacao'] : $situacao = "");
(isset($_POST['dtAssinatura']) && !empty($_POST['dtAssinatura']) ? $dtAssinatura = $_POST['dtAssinatura'] : $dtAssinatura = "");
(isset($_POST['consulta']) && !empty($_POST['consulta']) ? $consulta = $_POST['consulta'] : $consulta = "");
(isset($_POST['historico']) && !empty($_POST['historico']) ? $historico = $_POST['historico'] : $historico = "");

$sql  = "UPDATE tb_lista_ans ";
$sql .= "SET situacao = '$situacao', consulta = '$consulta', dt_assinatura = '$dtAssinatura', historico = '$historico' ";
$sql .= "WHERE id_ans = '$id_ans'";
$query = $conn->query($sql);

$out = array('error' => false);

if ($conn->query($sql) === TRUE) {
	$out['msg'] = 'ANS removida com sucesso!';
} else {
	$out['msg'] = 'Erro - ANS persiste!';
}

echo json_encode($out);
$conn->close();
?>