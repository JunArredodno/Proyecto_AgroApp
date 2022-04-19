<?php
    //Activando Seciones
    session_start();
    require 'funciones.php';


    if(isset($_GET['id']) && is_numeric($_GET[''])){
        $id=$_GET['id'];
        require('vendor/autoload.php');
        $producto=new AgroApp\Producto;
        $resultado=$producto->mostrarPorId($id);

        if(!$resultado)
            header('Location: index.php');

        if(isset($_SESSION['carrito'])){//Si el pedido existe
            //Si el producto existe
            if(array_key_exists($id,$_SESSION['carrtio'])){
                actualizarProducto($id);
            }else{
                //Si el prodcuto no existe
                agregarProducto($resultado,$id);
            }
        }else{
            //Si el pedido no existe
            agregarProducto($resultado,$id);            
        }
        print '<pre>';
        print_r($_SESSION['carrtio']);
        die;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>
    <!--Navegation bar-->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapsed" data-target="#navbar">
                    <span class="sr-only">Toogle navegation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Agr@pp Store</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav pull-right">
                    <li>
                        <a href="" class="btn">CARRITO<span class="badge">0</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!--Div-->
    <div class="container" id="main">
        
    </div>
    <script scr="assets/js/jquery.min.js"></script>
    <script scr="assets/js/bootstrap.min.js"></script>
</body>
</html>