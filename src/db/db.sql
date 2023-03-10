-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: testingprojectdb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course_classes`
--

DROP TABLE IF EXISTS `course_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_classes` (
  `id` varchar(36) NOT NULL,
  `class_name` varchar(36) DEFAULT NULL,
  `course_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `course_classes_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_participants`
--

DROP TABLE IF EXISTS `course_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_participants` (
  `id` varchar(256) NOT NULL,
  `full_name` varchar(256) DEFAULT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `course_id` varchar(36) DEFAULT NULL,
  `entry_code` varchar(256) DEFAULT NULL,
  `code_used` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `entry_code` (`entry_code`),
  KEY `user_id` (`user_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `course_participants_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `course_participants_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_participants`
--

LOCK TABLES `course_participants` WRITE;
/*!40000 ALTER TABLE `course_participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_students`
--

DROP TABLE IF EXISTS `course_students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_students` (
  `id` varchar(36) NOT NULL,
  `participant_id` varchar(36) DEFAULT NULL,
  `class_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `participant_id` (`participant_id`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `course_students_ibfk_1` FOREIGN KEY (`participant_id`) REFERENCES `course_participants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_students_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `course_classes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_students`
--

LOCK TABLES `course_students` WRITE;
/*!40000 ALTER TABLE `course_students` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_teachers`
--

DROP TABLE IF EXISTS `course_teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_teachers` (
  `id` varchar(36) NOT NULL,
  `participant_id` varchar(36) DEFAULT NULL,
  `editor_rights` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `participant_id` (`participant_id`),
  CONSTRAINT `course_teachers_ibfk_1` FOREIGN KEY (`participant_id`) REFERENCES `course_participants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_teachers`
--

LOCK TABLES `course_teachers` WRITE;
/*!40000 ALTER TABLE `course_teachers` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` varchar(36) NOT NULL,
  `course_name` varchar(256) DEFAULT NULL,
  `course_code` varchar(36) DEFAULT NULL,
  `course_owner` varchar(36) DEFAULT NULL,
  `institution` varchar(128) DEFAULT NULL,
  `parallel` varchar(36) DEFAULT NULL,
  `subject` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `course_code` (`course_code`),
  KEY `course_owner` (`course_owner`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`course_owner`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_keys`
--

DROP TABLE IF EXISTS `reset_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_keys` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `key_value` varchar(256) DEFAULT NULL,
  `creation_time` datetime DEFAULT NULL,
  `expiration_time` int DEFAULT NULL,
  `key_used` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key_value` (`key_value`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reset_keys_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_keys`
--

LOCK TABLES `reset_keys` WRITE;
/*!40000 ALTER TABLE `reset_keys` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_keys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `login` varchar(256) DEFAULT NULL,
  `passwd` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2023-01-30 13:24:52
