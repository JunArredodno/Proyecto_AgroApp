<?php
try{
    $conexion=new PDO('mysql:host=localhost; dbname=usuarios;','root','');
    echo "conexion exitosa";

    $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST['Enviar'])){
        $id=$_POST['cedula'];
        $contra=$_POST['contra'];

        $query=$conexion->prepare("SELECT * FROM `compradores` WHERE Documento=$id");
        $query->execute();

        $result = $query->fetch(PDO::FETCH_ASSOC);

        if(!$result){
            echo "Error, usuario no hallado";
        }else{
            if (password_verify($contra, $result['Contraseña'])) {
                session_start();
                //$_SESSION['user_id'] = $result['ID'];//Se guarda la cedula o id del usuario como recordatorio
                echo '<p class="success">Bienvenido</p>';
                header("location: index.html");
            } else {
                echo '<p class="error">Error con el usuario o contraseña</p>';
            }
        }

    }

}catch(Exeption $e){
    echo "Error {$e->getMessage}, en la linea{$e->getLine}";
}
?>