/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : addresslist

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-04-26 17:48:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(100) NOT NULL,
  `father_id` int(11),
  PRIMARY KEY (`dept_id`),
  UNIQUE KEY `uk_dept_name` (`dept_name`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '计算机科学与软件工程学院', NULL);
INSERT INTO `department` VALUES ('2', '计算机科学技术系', '1');
INSERT INTO `department` VALUES ('3', '软件科学与技术系', '1');
INSERT INTO `department` VALUES ('4', '数据科学与工程系', '1');
INSERT INTO `department` VALUES ('5', '嵌入式软件与系统系', '1');
INSERT INTO `department` VALUES ('6', '密码与网络安全系', '1');
INSERT INTO `department` VALUES ('7', '计算中心', '1');
INSERT INTO `department` VALUES ('8', '信息科学技术学院', NULL);
INSERT INTO `department` VALUES ('9', '电子工程系', '8');
INSERT INTO `department` VALUES ('10', '通信工程系', '8');
INSERT INTO `department` VALUES ('11', '系统科学研究所', '8');
INSERT INTO `department` VALUES ('12', '心理与认知科学学院', NULL);
INSERT INTO `department` VALUES ('13', '心理学系', '12');
INSERT INTO `department` VALUES ('14', '应用心理学系', '12');
INSERT INTO `department` VALUES ('15', '发展与教育心理学研究所', '12');
INSERT INTO `department` VALUES ('16', '认知神经科学研究所', '12');
INSERT INTO `department` VALUES ('17', '外语学院', NULL);
INSERT INTO `department` VALUES ('18', '英语系', '17');
INSERT INTO `department` VALUES ('19', '日语系', '17');
INSERT INTO `department` VALUES ('20', '法语系', '17');
INSERT INTO `department` VALUES ('21', '德语系', '17');
INSERT INTO `department` VALUES ('22', '俄语系', '17');
INSERT INTO `department` VALUES ('23', '翻译系', '17');
INSERT INTO `department` VALUES ('24', '大学英语教学部', '17');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(20) NOT NULL,
  `teacher_dept_id` int(11) DEFAULT NULL,
  `teacher_title` varchar(10) DEFAULT NULL,
  `teacher_tel` varchar(20) DEFAULT NULL,
  `teacher_address` varchar(200) DEFAULT NULL,
  `teacher_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `fk_teacher_dept_id` (`teacher_dept_id`),
  CONSTRAINT `fk_teacher_dept_id` FOREIGN KEY (`teacher_dept_id`) REFERENCES `department` (`dept_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '张三', '2', '讲师', '021-62233333', '理科楼B700', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('2', '李四', '2', '副教授', '021-62233335', '理科楼B701', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('3', '陈龙', '6', '教授', '021-62233331', '理科楼B700', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('4', '李易峰', '7', '讲师', '021-62233332', '理科楼B0001', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('5', '吴亦凡', '4', '讲师', '021-62233330', '理科楼B0002', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('6', '胡歌', '5', '讲师', '021-62233339', '理科楼B0003', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('7', '周杰伦', '2', '教授', '021-62233337', '理科楼B0004', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('8', '黄晓明', '2', '副教授', '021-62233336', '理科楼B0005', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('9', '鹿晗', '2', '讲师', '021-62233334', '理科楼B0001', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('10', '吴六甲', '18', '讲师', '13971337720', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('11', '王乙二', '20', '讲师', '18968279587', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('12', '王乙二', '20', '讲师', '18600020361', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('13', '李丁三', '20', '讲师', '13729971341', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('14', '李一十', '20', '讲师', '13161853001', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('15', '钱丁五', '20', '讲师', '13049774079', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('16', '赵六十', '18', '讲师', '13147409635', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('17', '吴九甲', '20', '讲师', '13839831670', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('18', '郑十丁', '20', '讲师', '15186792277', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('19', '郑十丁', '18', '讲师', '18714930947', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('20', '周十九', '20', '讲师', '13385433654', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('21', '周十九', '18', '讲师', '13020377222', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('22', '孙十二', '20', '讲师', '15710615660', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('23', '赵九十', '20', '讲师', '13752796106', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('24', '孙九二', '18', '讲师', '13594487525', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('25', '王四六', '18', '讲师', '13009505537', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('26', '王四六', '18', '讲师', '13661736978', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('27', '王三乙', '20', '讲师', '13207740762', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('28', '孙三甲', '18', '讲师', '18674278111', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('29', '吴丁六', '20', '讲师', '13424349769', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('30', '赵甲', '20', '讲师', '18926640791', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('31', '周七八', '20', '讲师', '18992320684', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('32', '钱四丙', '18', '讲师', '18676029904', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('33', '周五一', '19', '讲师', '13475709814', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('34', '孙一四', '19', '讲师', '13535729041', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('35', '孙一四', '18', '讲师', '13023792586', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('36', '孙一四', '19', '讲师', '13998460171', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('37', '孙三丁', '18', '讲师', '13230166383', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('38', '吴八三', '18', '讲师', '13034354604', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('39', '钱五', '19', '讲师', '13937889172', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('40', '周四九', '19', '讲师', '13386811334', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('41', '吴甲', '18', '讲师', '13294524699', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('42', '赵七四', '19', '讲师', '18602186832', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('43', '周四六', '19', '讲师', '13517154222', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('44', '吴八六', '19', '讲师', '13096427150', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('45', '吴八六', '19', '讲师', '15716832397', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('46', '郑七十', '19', '讲师', '13016966169', '文科楼', 'test@ecnu.cn');
INSERT INTO `teacher` VALUES ('47', '孙丙', '19', '讲师', '13582586655', '文科楼', 'test@ecnu.cn');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin123!');
INSERT INTO `user` VALUES ('2', 'testuser', 'test123!');

