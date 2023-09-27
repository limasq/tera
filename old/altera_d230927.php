<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
$connect = new PDO("mysql:host=localhost;dbname=localwork","root","melancia");

$data = [
    'situacao'      => $_POST['situacao'],
    'historico'     => $_POST['historico'],
    'consulta'      => $_POST['consulta'],
    'dtAssinatura'  => $_POST['dtAssinatura'],
    'indice'        => $_POST['indice']
];

$stmt = $connect->prepare('UPDATE tb_lista_ans SET situacao = data[0], historico = data[1], consulta = data[2], dtAssinatura = data[3] WHERE id_ans = data[4]');

try {
    $connect->beginTransaction();
    $stmt->execute($data);
    $connect->commit(); 
    echo 'ANS alterada com sucesso!';
} catch (Exception $e) {
    $connect->rollback();
    throw $e;
}
