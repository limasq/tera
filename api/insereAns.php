<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
include('conn.php');
  
$_POST = json_decode(file_get_contents('php://input'), true);

if (empty($_POST['id_ans']))
    echo 'campo vazio';
    $id_ans = $_POST['id_ans'];

if (empty($_POST['departamento']))
    echo 'campo vazio';
    $departamento = $_POST['departamento'];

if (empty($_POST['responsavel']))
    echo 'campo vazio';
    $responsavel = $_POST['responsavel'];

if (empty($_POST['consulta']))
    echo 'campo vazio';
    $consulta = $_POST['consulta'];

if (empty($_POST['validade']))
    echo 'campo vazio';
    $validade = $_POST['validade'];

if (empty($_POST['dt_assinatura']))
    echo 'campo vazio';
    $dt_assinatura = $_POST['dt_assinatura'];

if (empty($_POST['email']))
    echo 'campo vazio';
    $email = $_POST['email'];

if (empty($_POST['situacao']))
    echo 'campo vazio';
    $situacao = $_POST['situacao'];

if ($id_ans == 0) {
    $query = "INSERT INTO tb_lista_ans (departamento,responsavel,consulta,validade,dt_assinatura,email,situacao) VALUES ('$departamentoabc', '$responsavel', '$consulta', '$validade', '$dt_assinatura', '$email', '$situacao');";
    $result = mysqli_query($conn,$query);
    $rows = mysqli_affected_rows($conn);
}


echo $json_response = json_encode($rows);
?>