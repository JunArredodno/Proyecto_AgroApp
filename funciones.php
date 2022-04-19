<?php 
    function agregarProducto($resultado, $id, $cantidad=1){
        $_SESSION['carrito'][$id]= array(
            'id'=>$resultado['id'],
            'titulo'=>$resultado['titulo'],
            'foto'=>$resultado['foto'],
            'precio'=>$resultado['precio'],
            'cantidad'=>$cantidad
        );
    }
    
    function actualizarProducto($id, $cantidad=FALSE){
        if($cantidad){
            $_SESSION['carrito'][$id]['cantidad']= $cantidad;
        }else{
            $_SESSION['carrito'][$id]['cantidad']+=1;
        }
    }

    function calcularTotal(){

    }
    function cantidadProductos(){

    }
?>