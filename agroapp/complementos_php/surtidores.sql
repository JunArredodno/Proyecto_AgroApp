-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2022 a las 21:17:24
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `surtidores`
--

CREATE TABLE `surtidores` (
  `Documento` int(10) NOT NULL,
  `Nombre` varchar(30) DEFAULT NULL,
  `Barrio` varchar(15) DEFAULT NULL,
  `Telefono` int(10) DEFAULT NULL,
  `edad` int(2) DEFAULT NULL,
  `Contraseña` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `surtidores`
--

INSERT INTO `surtidores` (`Documento`, `Nombre`, `Barrio`, `Telefono`, `edad`, `Contraseña`) VALUES
(10, 'juan', NULL, NULL, NULL, '123'),
(1234, '', NULL, NULL, NULL, '1234'),
(3541, 'juanes', NULL, NULL, NULL, '456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `surtidores`
--
ALTER TABLE `surtidores`
  ADD PRIMARY KEY (`Documento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
