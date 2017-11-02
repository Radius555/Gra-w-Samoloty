-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 31 Paź 2017, 14:08
-- Wersja serwera: 10.1.26-MariaDB
-- Wersja PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pytanka1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dywizja303`
--

CREATE TABLE `dywizja303` (
  `id` int(2) NOT NULL,
  `Pytanie` text COLLATE utf8_polish_ci NOT NULL,
  `OdpA` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `OdpB` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `OdpC` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `OdpD` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `Poprawna` varchar(20) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `dywizja303`
--

INSERT INTO `dywizja303` (`id`, `Pytanie`, `OdpA`, `OdpB`, `OdpC`, `OdpD`, `Poprawna`) VALUES
(1, 'Dla jakiego państwa służył dywizjon 303?', 'Polski', 'Wielkiej Brytani', 'Niemiec', 'Japonii', 'Polski');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `dywizja303`
--
ALTER TABLE `dywizja303`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
