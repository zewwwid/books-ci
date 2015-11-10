-- MySQL dump 10.13  Distrib 5.6.27, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: books_ci
-- ------------------------------------------------------
-- Server version	5.6.27-0ubuntu0.15.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Бография'),(2,'Вестерн'),(3,'Детектив'),(4,'Драма'),(5,'Мемуары'),(6,'Новелла'),(7,'Повест'),(8,'Поэма'),(9,'Фантастика');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genre` int(11) NOT NULL,
  `author` varchar(100) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `year` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `books_genres` (`genre`),
  CONSTRAINT `books_genres` FOREIGN KEY (`genre`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES 
    (1, 1, 'Айзексон Уолтер', 'Стив Джобс', 2011),
    (2, 1, 'Залесский Константин','Сталин. Портрет на фоне войны', 2013),
    (3, 2, 'Рид Томас Майн','Всадник без головы', 1865),
    (4, 2, 'Рид Томас Майн','Белый вождь', 1855),
    (5, 2, 'Шефер Джек','Шейн', 1949),
    (6, 3, 'Конан Дойл Артур','Собака Баскервилей', 1902),
    (7, 3, 'Адамс Гай','Шерлок и его интеллектуальный стиль', 2014),
    (8, 4, 'Кантор Максим','Вечер с бабуином', 2007),
    (9, 5, 'Нидал Оле','Верхом на тигре', 2012),
    (10, 6, 'Лагерлёф Сельма','Легенды о Христе', 1904),
    (11, 6, 'Вишневский Януш Леон','Сцены из жизни за стеной', 2008),
    (12, 7, 'Гарсиа Маркес Габриэль','Полковнику никто не пишет', 1961),
    (13, 8, 'Гоголь Николай','Мертвые души', 1842),
    (14, 9, 'Брэдбери Рэй','Вино из одуванчиков', 1957),
    (15, 9, 'Панов Вадим','Костры на алтарях ', 2007);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL COMMENT 'SHA1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','d033e22ae348aeb5660fc2140aec35850c4da997');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-09 11:48:07
