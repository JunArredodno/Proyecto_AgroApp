<?php
    $conn = mysqli_connect('localhost', 'root', ''); 
    $database = mysqli_select_db($conn, 'usuarios');
    $encodedData = file_get_contents('php://input');
    $decodedData = json_decode($encodedData, true);
?>