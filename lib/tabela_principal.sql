-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 27-Set-2023 às 03:39
-- Versão do servidor: 8.0.17
-- versão do PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `localwork`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_lista_ans`
--

CREATE TABLE `tb_lista_ans` (
  `id_ans` int(11) NOT NULL,
  `departamento` varchar(128) NOT NULL,
  `responsavel` varchar(128) NOT NULL,
  `consulta` varchar(50) NOT NULL,
  `validade` tinyint(4) NOT NULL,
  `dt_assinatura` date NOT NULL,
  `email` varchar(128) NOT NULL,
  `situacao` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `tb_lista_ans`
--

INSERT INTO `tb_lista_ans` (`id_ans`, `departamento`, `responsavel`, `consulta`, `validade`, `dt_assinatura`, `email`, `situacao`) VALUES
(1, 'dpto xxx', 'sr xxx', 'tb_cartoes, tb_produtos, tb_prejuizo', 3, '2023-08-01', 'xxx@noname.com', 1),
(2, 'dpto xxy', 'sr xxy', 'penhor', 3, '2023-08-01', 'xxy@noname.com', 1),
(3, 'dpto xyy', 'sr xyy', 'prejuizo', 2, '2023-08-01', 'xyy@noname.com', 1),
(4, 'dpto yxy', 'sr yxy', 'renegociado', 2, '2023-07-01', 'yxy@noname.com', 1),
(5, 'dpto yyx', 'sr yyx', 'cartoes, prejuizo', 2, '2023-07-11', 'yxy@noname.com', 1),
(6, 'dpto yyy', 'sr yyy', 'crot, historico_cliente', 1, '2023-06-01', 'yyy@noname.com', 0),
(7, 'dpto xxx', 'sr xxx', 'cdc, consignado', 1, '2023-09-01', 'xxx@noname.com', 1),
(8, 'dpto xxz', 'sr xxz', 'renegociado', 3, '2023-03-01', 'xxz@noname.com', 1),
(9, 'dpto xzx', 'sr xzx', 'cartoes, seguros', 3, '2023-01-03', 'xzx@noname.com', 1),
(10, 'dpto zxx', 'sr zxx', 'seguros', 2, '2021-09-01', 'zxx@noname.com', 0),
(11, 'dpto xyx', 'sr xyx', 'resultado_trimestral', 1, '2021-10-01', 'xyx@noname.com', 0),
(12, 'dpto abc', 'fnrf', 'poupança', 2, '2023-09-11', 'abcfc@fnrf.com', 1),
(13, 'dpto abc', 'fnrf', 'poupança', 2, '2023-09-11', 'abcfc@fnrf.com', 1),
(14, 'dpto abc', 'fnrf', 'poupança', 2, '2023-09-11', 'abcfc@fnrf.com', 1),
(15, '', '', '', 0, '0000-00-00', '', 0),
(16, '', '', '', 0, '0000-00-00', '', 0),
(17, '', '', '', 0, '0000-00-00', '', 0),
(18, '', '', '', 0, '0000-00-00', '', 0),
(19, '', '', '', 0, '0000-00-00', '', 0),
(20, '', '', '', 0, '0000-00-00', '', 0),
(21, '', '', '', 0, '0000-00-00', '', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_lista_ans`
--
ALTER TABLE `tb_lista_ans`
  ADD PRIMARY KEY (`id_ans`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_lista_ans`
--
ALTER TABLE `tb_lista_ans`
  MODIFY `id_ans` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
