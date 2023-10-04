CREATE DATABASE  IF NOT EXISTS `medicare` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `medicare`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: medicare
-- ------------------------------------------------------
-- Server version	5.7.10-log

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

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_id` varchar(45) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `alt_contact` int(11) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('BR1010',23,9990,1234567890,'08/09/1978','masoomrz100@gmail.com','Blob','Male','Rob','$2a$10$U1HhSMN1U7sQBhgO/mzy4.uviDdYfaTKh83ln5azfirQulg2E8Aii'),('102B',30,22220,2222,'03/03/1998','def@gmail.com','Lasith','male','Malinga','$2a$10$PiVDa3tQ4Emy7PBVIuUEEu0T6HSHQJb5z0bAjAXD6MUqrud7f0dAS');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor` (
  `doctor_id` varchar(45) NOT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `alt_contact` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `hospitalname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `medicare_service_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `workhours` int(11) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  `medicare_id` int(11) DEFAULT NULL,
  `p_id` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `FKcbf38bqj9q0mpn0o6qi21ycwp` (`medicare_service_id`),
  KEY `FKky4bsn21utu44gt6td6nyskof` (`p_id`),
  KEY `FK3lveheq48trq61xe5xr5smfyf` (`medicare_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES ('D345','Gachibowli','Hyd',29,5555,'Hyderabad',4444,'09/07/1980','BDS','robin@gmail.com','Robin','Male','Sasso0n','Singh','5','$2a$10$lc7qY3KeGApUZ9t8thYJdu1pDQPMU.oPf9K8mG13sVEDhcJYA16Dq','Dental',6,500019,5,'P005',1),('D450','Manpa','Pune',11,1111,'Pune',1111,'03/08/1997','M.Pharma','raza@gmail.com','raza','Male','Pune Hospital','_10','3','$2a$10$BQogWvbyZSr10prqKMgSVeZeWehCafZbq37vofh053qOtziI7Ivi6','qqq',2,111,3,NULL,NULL),('D199','Gujrat','India',30,7778,'Surat',223,'09/07/1998','MBBS','kevi@gmail.com','Keval','Male','Sun Multi Speciality Hospital','Jain','1','$2a$10$s53kS5wu.h918TKfpVhVZuEJ5TyRzHbImuTf9LUt6laHjBOgezWtu','MBBS',4,345762,1,'P004',1);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_test_history`
--

DROP TABLE IF EXISTS `medical_test_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_test_history` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
  `agent_id` varchar(45) DEFAULT NULL,
  `diag1_av` varchar(255) DEFAULT NULL,
  `diag1_nr` varchar(255) DEFAULT NULL,
  `diag2_av` varchar(255) DEFAULT NULL,
  `diag2_nr` varchar(255) DEFAULT NULL,
  `diag3_av` varchar(255) DEFAULT NULL,
  `diag3_nr` varchar(255) DEFAULT NULL,
  `doctor_comments` varchar(255) DEFAULT NULL,
  `doctor_id` varchar(45) DEFAULT NULL,
  `medical_service_id` int(11) DEFAULT NULL,
  `other_info` varchar(255) DEFAULT NULL,
  `patient_id` varchar(45) DEFAULT NULL,
  `service_date` varchar(255) DEFAULT NULL,
  `test_result_date` varchar(255) DEFAULT NULL,
  `med_doc_request_id` varchar(255) DEFAULT NULL,
  `med_pat_request_id` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  KEY `FKjlp1y7wo7q00mkprqnbu0o7bw` (`med_doc_request_id`),
  KEY `FKt7t03cwr5721ha6ksxomrtd6k` (`med_pat_request_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_test_history`
--

LOCK TABLES `medical_test_history` WRITE;
/*!40000 ALTER TABLE `medical_test_history` DISABLE KEYS */;
INSERT INTO `medical_test_history` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D199',1,NULL,'P005',NULL,NULL,'D199','P005','\0'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D450',3,NULL,'P005',NULL,NULL,'D450','P005',NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D345',5,NULL,'P004',NULL,NULL,'D345','P004',NULL),(5,NULL,'12','15','10','15','17','15','High Sugar','D199',1,'Diabetic Symptom : Else Fine','P004','10/11/2019','12/11/2019','D199','P004',''),(6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D450',3,NULL,'P004',NULL,NULL,'D450','P004',NULL);
/*!40000 ALTER TABLE `medical_test_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicare_service`
--

DROP TABLE IF EXISTS `medicare_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicare_service` (
  `medicare_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) DEFAULT NULL,
  `medicare_service` varchar(255) DEFAULT NULL,
  `service_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`medicare_service_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicare_service`
--

LOCK TABLES `medicare_service` WRITE;
/*!40000 ALTER TABLE `medicare_service` DISABLE KEYS */;
INSERT INTO `medicare_service` VALUES (2,1000,'Plaster(POP)','Bone fracture plaster'),(3,7000,'Body check up','All body test'),(4,5000,'MRI','Brain imaging'),(5,3000,'Dental checkup','Full Mouth check'),(1,800,'X-Ray','X-ray Sheet of Bone');
/*!40000 ALTER TABLE `medicare_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `patient_id` varchar(45) NOT NULL,
  `address_line1` varchar(255) DEFAULT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `alt_contact_number` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `contact_number` int(11) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `valid` bit(1) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES ('P012','Katraj','Pune',23,4387,'Pune',6734,'08/03/1996','satist@gmail.com','Satish','Male','Singh','$2a$10$qnXFTCE/njMJXne.orKeNeh12AkPSvDJ2o1R7p9S3Hq05/J9VvpIq','Maharashtra','\0',411062),('P003','Gachibowli','Hyd',24,567,'Hyderabad',9876,'09/08/1996','vvv@gmail.com','Ravi','Male','Teja','$2a$10$HT9Oe/.z77W5iU7MwsWOWeTTIi2Oe6vfX/h0nrhJEOqZ9ZHtBH0Zy','Telengana','\0',500019),('P004','Gachibowli','Hyd',20,1112,'Hyderabad',1111,'09/08/2016','d@qwer','Durga','Female','Devi','$2a$10$SXTVcTgp785dtIs5ERv6ueIXn3J.WAR7s077AlTTuPtOnhrEp3TFC','Telengana','',500019),('P005','Colom','Hyd',65,9990,'Hyderabad',333,'02/09/2019','pranav@gmail.com','Pranav','Female','Attank','$2a$10$ubmmK3CiM0T.aQNLa5jH..jB4RMr7XRZRNXjPrRxgLXII7hH4h6Bu','Telengana','',500023);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_doctor_medicare`
--

DROP TABLE IF EXISTS `patient_doctor_medicare`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_doctor_medicare` (
  `pd_pa_id` int(11) NOT NULL,
  `pd_do_id` int(11) NOT NULL,
  `dm_me_id` int(11) NOT NULL,
  `dm_do_id` int(11) NOT NULL,
  KEY `FKtesb6g46ujwx4hwq4tt6gi9hl` (`dm_do_id`),
  KEY `FKo2231pg2wfc08uk1vf8mnliac` (`dm_me_id`),
  KEY `FKtbphryuh9xelqir8ri4w9xnw6` (`pd_do_id`),
  KEY `FKpsa2g5u9mvcjjjnn9pkvx8egg` (`pd_pa_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_doctor_medicare`
--

LOCK TABLES `patient_doctor_medicare` WRITE;
/*!40000 ALTER TABLE `patient_doctor_medicare` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_doctor_medicare` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_medical_test_history`
--

DROP TABLE IF EXISTS `patient_medical_test_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_medical_test_history` (
  `pm_pa_id` int(11) NOT NULL,
  `pm_mt_id` int(11) NOT NULL,
  KEY `FK2k06pylme855ay471hml4uojd` (`pm_pa_id`),
  KEY `FKk7x1gnmm3fy4rxpfd8tp4b71o` (`pm_mt_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_medical_test_history`
--

LOCK TABLES `patient_medical_test_history` WRITE;
/*!40000 ALTER TABLE `patient_medical_test_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_medical_test_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `ro_id` int(11) NOT NULL AUTO_INCREMENT,
  `ro_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ro_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'user'),(2,'admin'),(3,'doctor'),(4,'patient');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `us_id` int(11) NOT NULL AUTO_INCREMENT,
  `us_firstname` varchar(255) DEFAULT NULL,
  `us_lastname` varchar(255) DEFAULT NULL,
  `us_password` varchar(255) DEFAULT NULL,
  `us_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`us_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user1','user1','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','user'),(2,'admin1','admin1','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','admin'),(3,'doctor1','doctor1','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','doctor'),(4,'patient1','patient1','$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','patient'),(6,'Lasith','Malinga','$2a$10$PiVDa3tQ4Emy7PBVIuUEEu0T6HSHQJb5z0bAjAXD6MUqrud7f0dAS','102B'),(15,'abc','qqq','$2a$10$W1Jywd/E/jo.V2GgcH1Mj.N2lJQN3Yh.u.O83XHWHdEza2LJauDBq','P002'),(14,'Gaurav','Phoot','$2a$10$qykRgbnNAmMz0JCggTdTk.hC0i5fNalMpUOBBji9l/fGSJlhnYjGi','P001'),(25,'Ashok','Kumar','$2a$10$CwXKHMVWAAha3.ycTsE54utItu2yNzH4BKYDxDBu7cjpgmcsXVxEC','P011'),(11,'Blob','Rob','$2a$10$U1HhSMN1U7sQBhgO/mzy4.uviDdYfaTKh83ln5azfirQulg2E8Aii','BR1010'),(24,'Robin','Singh','$2a$10$lc7qY3KeGApUZ9t8thYJdu1pDQPMU.oPf9K8mG13sVEDhcJYA16Dq','D345'),(23,'Kevala','jainwa','$2a$10$s53kS5wu.h918TKfpVhVZuEJ5TyRzHbImuTf9LUt6laHjBOgezWtu','D199'),(18,'Ravi','Teja','$2a$10$HT9Oe/.z77W5iU7MwsWOWeTTIi2Oe6vfX/h0nrhJEOqZ9ZHtBH0Zy','P003'),(21,'Pranav','Attank','$2a$10$ubmmK3CiM0T.aQNLa5jH..jB4RMr7XRZRNXjPrRxgLXII7hH4h6Bu','P005'),(22,'Durga','Devi','$2a$10$SXTVcTgp785dtIs5ERv6ueIXn3J.WAR7s077AlTTuPtOnhrEp3TFC','P004');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `ur_id` int(11) NOT NULL AUTO_INCREMENT,
  `ur_us_id` int(11) NOT NULL,
  `ur_ro_id` int(11) NOT NULL,
  PRIMARY KEY (`ur_id`),
  KEY `FKjia4161ecu6h4p0egc2oc04lt` (`ur_ro_id`),
  KEY `FK1t65ha4bv531fmav53vlu66fg` (`ur_us_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(6,6,2),(11,11,2),(14,14,4),(15,15,4),(24,24,3),(23,23,3),(18,18,4),(21,21,4),(22,22,4),(25,25,4);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-01  9:40:09
