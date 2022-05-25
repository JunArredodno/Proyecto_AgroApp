<?php
include('db.php');

$Documento = $decodedData['Documento'];
$Contraseña = md5($decodedData['Contraseña']); //password is hashed

$SQL = "SELECT * FROM usuarios WHERE Documento = '$Documento'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO newuser(Documento, Contraseña) VALUES('$Documento', '$Contraseña')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Complete--!";
    } else {
        $Message = "Error";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);