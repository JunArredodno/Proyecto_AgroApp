<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/estilos.css">
    <title>Document</title>
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
    
    <!--Body-->
    <div class="container" id="main">
        <div class="row">
            <?php
                require 'vendor/autoload.php';
                $producto=new AgroApp\Producto;
                $info_producto=$producto->mostrar();
                $cantidad=count($info_producto);

                if($cantidad>0){
                    for($x=0;$x<$cantidad;$x++){
                        $item=$info_producto[$x];
            ?>
            Lista de productos
            <div class="col-md-3">
                <div class="panel panel-default">                    
                    <div class="panel-heading">
                        <h4 class="text-center nombre-producto"><?php echo $item['nombre'] ?></h4>
                    </div>

                    <div class="panel-body">
                        <?php 
                            $foto='upload/'.$item['foto'];
                            if(file_exists($foto)){
                        ?>
                        <img src="<?php echo $foto ?>" class="img-responsive">
                        <?php }else{ ?>
                            <img src="assets/imagenes/not-found.jpg" class="img-responsive">
                        <?php } ?>
                    </div>

                    <div class="panel-footer">
                        <a href="carrito.php?id=<?php echo $item['id'] ?>" class="btn btn-success btn-block">
                            <span class="glyphicon glyphicon-shopping-cart"></span>Comprar
                        </a>
                    </div>
                </div>


            </div>
            <?php }}else{ ?>
                <h4>No hay registros</h4>
            <?php } ?>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script scr="assets/js/jquery.min.js"></script>
    <script scr="assets/js/bootstrap.min.js"></script>
</body>
</html>