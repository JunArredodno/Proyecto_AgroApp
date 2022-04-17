<?php

namespace AgroApp;

class Categoria{
    private $config;
    private $cn=null;

    public function __construct(){
        $this->config=parse_ini_file(__DIR__.'/../config.ini');

        /*Faltan datos $this->cn=new \PDO( $this->config['dns'], $this->config['usuario'], $this->config['contrasenia']); \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));*/
    }

    public function mostrar(){
        $sql="SELECT * FROM Categorias";

        $resultado = $this->cn->prepae($sql);

        if($resultado->execute())
            return $resultado->fetchAll();
        return false;
    }
}

?>