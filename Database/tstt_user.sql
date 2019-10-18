-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tstt
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `class` varchar(45) DEFAULT NULL,
  `point` float NOT NULL DEFAULT '0',
  `avatar` text,
  `fullname` varchar(45) DEFAULT NULL,
  `lasttime` int(11) DEFAULT NULL,
  `round` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user01','pass01','10A1',0,NULL,'Hoàng Trung',0,1),(2,'user02','pass02','11A1',0,NULL,'Trần Hữu Quang Trường',0,1),(3,'user03','pass03','10A2',0,NULL,'Lê Nguyễn Anh Tuấn',0,1),(4,'user04','pass04','11A3',0,NULL,'Đặng Ngọc Trâm Anh',0,1),(5,'user05','pass05','11A1',0,NULL,'Kiều Cao Minh Kiệt',0,2),(6,'user06','pass06','11A1',0,NULL,'Hồ Thị Minh Châu',0,2),(7,'user07','pass07','11A1',0,NULL,'Dương Thị Hải',0,2),(8,'user08','pass08','11B6',0,NULL,'Trần Thị Thu Thấm',0,2),(9,'user09','pass09','10A2',0,NULL,'Nguyễn Thị Thanh Huyền',0,3),(10,'user10','pass10','11A3',0,NULL,'Ngô Thị Minh Tâm',0,3),(11,'user11','pass11','11A1',0,NULL,'Nguyễn Thị Khánh Vy',0,3),(12,'user12','pass12','11A1',0,NULL,'Trần Xuân Vinh Quang',0,3),(13,'usermc','passmc',NULL,0,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-18 17:25:39
