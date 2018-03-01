/*
Navicat MySQL Data Transfer

Source Server         : 60.205.205.170_3306
Source Server Version : 50173
Source Host           : 60.205.205.170:3306
Source Database       : online

Target Server Type    : MYSQL
Target Server Version : 50173
File Encoding         : 65001

Date: 2018-03-01 15:05:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('1', '张敏', '12345');

-- ----------------------------
-- Table structure for course_table
-- ----------------------------
DROP TABLE IF EXISTS `course_table`;
CREATE TABLE `course_table` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `diff` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `title` varchar(32) NOT NULL COMMENT '大标题',
  `diff1` varchar(255) DEFAULT NULL,
  `description` varchar(200) NOT NULL COMMENT '描述文字',
  `ref` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of course_table
-- ----------------------------
INSERT INTO `course_table` VALUES ('1', '1.jpg', '抽奖转盘', '难度：中等 时间：一天', '大约有1200人学习了这门课程', '基于CSS3实现抽奖大转盘', '中级', '本课程将 教会大家如何使用 CSS3 的特有属性 transform 制作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、的定义、概念发展简史 ', 'Message');
INSERT INTO `course_table` VALUES ('2', 'Jquery.png', 'jQuery在购物车的使用', '难度：中等 时间：一天', '大约有1200人学习了这门课程', 'jQuery在购物车的使用', '中级', '我们使用 jQuery 实现在购物车中添加删除商品，合计商品总价的功能。通过本课程的学习，你可以熟练操作 jQuery 实现更多的功能。', 'CursorContent');
INSERT INTO `course_table` VALUES ('3', 'Jquery.png', '网页版别踩白块游戏', '难度：中等 时间：一天', '大约有1200人学习了这门课程', '网页版别踩白块游戏', '中级', '本课程使用最基础的 HTML+CSS+JavaScript 实现网页版别踩白块游戏，通过完成这个简单有趣的游戏，可以实践你的前端技能。提升你学习的兴趣，建议使用原生的就js实现。', 'CursorContent');
INSERT INTO `course_table` VALUES ('4', '1.jpg', ' vue 创建实例', '难度：简单 时间：1天', '大约有1890人学习了这门课程', ' vue 动态数据绑定', '简单', '本课程将会教会我们如何使用 vue 实现数据的动态绑定，和实时渲染功能，体验他的自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。让我们对 vue 有一个初步的了解', 'CursorContent');
INSERT INTO `course_table` VALUES ('5', '1.jpg', 'Node.js ', '难度：中等 时间：一天', '大约有1200人学习了这门课程', 'Node.js 入门', '中等', 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。让我们开始最基础的 nodejs的学习吧', 'CursorContent');
INSERT INTO `course_table` VALUES ('6', '1.jpg', '有趣的鼠标悬浮模糊效果', '难度：中等 时间：一天', '大约有120人学习了这门课程', '有趣的鼠标悬浮模糊效果', '中等', '任务目的 针对设计稿样式进行合理的HTML架构，包括以下但不限于： 掌握常用HTML标签的含义、用法 能够基于设计稿来合理规划HTML文档结构 理解语义化，合理地使用HTML标签来构建页面 掌握基本的CSS编码，包括以下但不限于： 了解CSS的定义、概念、发展简史 掌握CSS选择器的含义和用法 实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单布局等样式的定义方式 任务描述 实现图示效果（点击', 'CursorContent');
INSERT INTO `course_table` VALUES ('14', '1.jpg', '1111111', '1111', '执行1', '执行2', '执行3', '执行4', 'CursorContent');
INSERT INTO `course_table` VALUES ('21', '1.jpg', '48', '45', '45', '45', '45', '45', 'CursorContent');
INSERT INTO `course_table` VALUES ('27', '1.jpg', '1', '1', '1', '1', '1', '1', '$1');
INSERT INTO `course_table` VALUES ('29', '1.jpg', '大约有', '大约有', '大约有', '大约有', '大约有', '大约有', '大约有');
INSERT INTO `course_table` VALUES ('32', '1.jpg', '1', 'cou', 'courseDescription_table', 'courseDescription_table', 'courseDescription_table', 'courseDescription_table', 'courseDescription_table');
INSERT INTO `course_table` VALUES ('33', '1.jpg', '12', '12', '12', '1211', '1', '1', '1');
INSERT INTO `course_table` VALUES ('34', '1.jpg', '浏擦擦擦', '12', '12', '121', '12', '12', '121');

-- ----------------------------
-- Table structure for coursecontent_table
-- ----------------------------
DROP TABLE IF EXISTS `coursecontent_table`;
CREATE TABLE `coursecontent_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) CHARACTER SET utf8 NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8 NOT NULL,
  `diff` varchar(255) CHARACTER SET utf8 NOT NULL,
  `number` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `diff1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tag1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tag2` varchar(255) CHARACTER SET utf8 NOT NULL,
  `aim` varchar(255) CHARACTER SET utf8 NOT NULL,
  `aim1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `aim2` varchar(255) CHARACTER SET utf8 NOT NULL,
  `aim3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aim4` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aim5` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aim6` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aim7` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aim8` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `task` varchar(255) CHARACTER SET utf8 NOT NULL,
  `task1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel2` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel3` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel4` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel5` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idel6` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idel7` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idel8` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `idel9` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `reference` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL,
  `reference1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `reference2` varchar(255) CHARACTER SET utf8 NOT NULL,
  `reference3` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of coursecontent_table
-- ----------------------------
INSERT INTO `coursecontent_table` VALUES ('8', '1.jpg', '基于CSS3实现抽奖大转盘', '难度：中等 时间：一天', '12333', '基于CSS3实现抽奖大转盘', '中级', '本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。', 'CSS3', '动画', '课程目标', '针对设计稿样式进行合理的HTML架构，包括以下但不限于：', '掌握常用HTML标签的含义、用法', '能够基于设计稿来合理规划HTML文档结构', '理解语义化，合理地使用HTML标签来构建页面', '掌握基本的CSS编码，包括以下但不限于：', '了解CSS的定义、概念、发展简史', '掌握CSS选择器的含义和用法', '实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单 布局等样式的定义方式', '任务描述', 'CSS3 实现抽奖大转盘', '课程思路', '首先来分析下抽奖转盘的特点,确定一下设计的整体构思。', '以一个从没写过抽奖转盘的新手角度来考虑，大概会遇到一下几个难点：', '1、转盘如何才能开始旋转；', '2、转盘的速度控制。为了更加逼真的模拟现实中的转盘旋转，需要将转盘速度控制为 慢-快-慢；', '3、如何等分切割转盘的扇形区域；', '4、奖品是如何随机抽取的；', '5、如何判定旋转已经结束；', '接下来，就将逐个解决以上问题，同时，也一步步完成我们的抽奖转盘。', '', '在线学习参考资料', 'MDN HTML入门', 'MDN CSS3入门教程', 'w3cplus');

-- ----------------------------
-- Table structure for courseDescription_table
-- ----------------------------
DROP TABLE IF EXISTS `courseDescription_table`;
CREATE TABLE `courseDescription_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `title` varchar(100) NOT NULL COMMENT '标题',
  `summary` varchar(500) NOT NULL COMMENT '简介',
  `tag1` varchar(300) NOT NULL COMMENT '产品小图标',
  `tag2` varchar(300) NOT NULL,
  `number` int(11) NOT NULL,
  `href` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of courseDescription_table
-- ----------------------------
INSERT INTO `courseDescription_table` VALUES ('1', '1.jpg', '零基础HTML及CSS编码', '\'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战\'', 'HTML', '网页制作', '891', '/CursorContent');
INSERT INTO `courseDescription_table` VALUES ('2', '1.jpg', '零基础入门 JavaScript', '\'精选课程，和我们一起零基础入门 JavaScript，共发布 4个课程，等你来挑战\'', 'HTML', 'JavaScript', '120', 'CursorContent');
INSERT INTO `courseDescription_table` VALUES ('3', '1.jpg', '初级 Vue 入门学习', '精选入门学习 vue，共发布 4 个课程，课程等你来完成', 'vue', 'vuex', '100', 'CursorContent');
INSERT INTO `courseDescription_table` VALUES ('4', '1.jpg', '入门学习 Node.js', '\'精选课程，让我重头开始学习 node，共发布6个课程，等你来挑战\'', 'node.js', '后端', '200', 'CursorContent');
INSERT INTO `courseDescription_table` VALUES ('5', '1.jpg', '数据结构', '\'精选课程，和我们一起探索数据结构的博大精深，共发布5个课程，等你来挑战\',', '数据结构', '', '100', 'CursorContent');
INSERT INTO `courseDescription_table` VALUES ('6', '1.jpg', '算法', '\'精选课程，和我们来学习算法，共发布6个课程，等你来完成\',', '算法', '程序', '203', 'CursorContent');
INSERT INTO `courseDescription_table` VALUES ('9', '008ff5957a374e4f6021d5033ca21ef0.png', '空开课', '我', '1', '1', '12', 'CursorContent');

-- ----------------------------
-- Table structure for msg_table
-- ----------------------------
DROP TABLE IF EXISTS `msg_table`;
CREATE TABLE `msg_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `message` varchar(225) NOT NULL,
  `message1` varchar(225) NOT NULL,
  `message2` varchar(225) NOT NULL,
  `message3` varchar(225) NOT NULL,
  `message4` varchar(255) NOT NULL,
  `message5` varchar(255) NOT NULL,
  `message6` varchar(255) NOT NULL,
  `message7` varchar(255) NOT NULL,
  `message8` varchar(255) NOT NULL,
  `message9` varchar(255) DEFAULT NULL,
  `message10` varchar(255) DEFAULT NULL,
  `product` varchar(255) NOT NULL,
  `product1` varchar(255) NOT NULL,
  `product2` varchar(255) NOT NULL,
  `product3` varchar(255) NOT NULL,
  `product4` varchar(255) NOT NULL,
  `product5` varchar(255) NOT NULL,
  `product6` varchar(255) NOT NULL,
  `product7` varchar(255) DEFAULT NULL,
  `product8` varchar(255) DEFAULT NULL,
  `product9` varchar(255) DEFAULT NULL,
  `product10` varchar(255) DEFAULT NULL,
  `finance` varchar(255) NOT NULL,
  `finance1` varchar(255) NOT NULL,
  `finance2` varchar(255) NOT NULL,
  `finance3` varchar(255) NOT NULL,
  `finance4` varchar(255) NOT NULL,
  `finance5` varchar(255) NOT NULL,
  `finance6` varchar(255) NOT NULL,
  `finance7` varchar(255) NOT NULL,
  `finance8` varchar(255) DEFAULT NULL,
  `finance9` varchar(255) DEFAULT NULL,
  `finance10` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`,`product1`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg_table
-- ----------------------------
INSERT INTO `msg_table` VALUES ('2', '资讯', '1.蚂蚁金服研发出眼纹识别技术 能识别同卵多胞胎', '2.中国取消会计从业资格证，做假账将不得再从事会计工作。', '3.滴滴拿下电子地图甲级测绘资质。', '4.马云：蚂蚁金服两年内不会上市，更多关注金融科技。', '5.京东今日宣布 3C 事业部合并组建为 3C 文旅事业部。', '6.每日优鲜宣布全面转型会员制，推出会员专享商品 300 款， 返现 5%。', '7.华为和印度多家运营商谈判，计划在当地推进 5G 技术创新。', '8.微软 Dynamics 365 今日宣布正式登陆中国。', '9.Facebook 称，至少 12% 的账户是虚假或重复账户。', '10.彭博社：腾讯音乐寻求银行参与其至少 10 亿美元 IPO。', '产品', '1.京东金融上线“京东超脑”可实现刷脸支付。', '2.传 ofo 正秘密研发共享充电宝。', '3.美团点评关闭充电宝. 松鼠便利店试点运营两个项目。', '4.QQ 同步助手将用户生日信息弹窗给他人，律师称此行为侵犯隐私。', '5.11 月 8 日腾讯将公布神秘的吃鸡手游。', '6.新浪微博全资收购短视频公司“酷燃”，“秒拍”拟受波动。', '8.国家邮政局微信小程序上线：可以收发上百家快递案。', '9.爱奇艺用 AI 算法预测节目流量，中国有嘻哈请吴亦凡由 AI 定。', '10.星巴克将茶饮品牌 Tazo 3.84 亿美元售予联合利华，将专注唯一茶饮品牌 Teavana。', '2', '金融', '1.湘财证券募集资金 15.18 亿，原有股东认购 99.46%。', '2.无人便利店“零号元素”获 1000 万 Pre-A 轮融资。', '3.聚焦办公空间生态环境“开工大吉”获得数百万元天使投资。', '4.办公室无人货架公司“小闪科技”完成 2000 万元融资。', '5.5.法律人工智能技术团队“法狗狗”法完成千万级别 Pre-A 轮融资。', '6.在线汽车交易平台易鑫拟于香港 IPO 筹资 8.67 亿美元。', '7.全球潮货移动电商品牌“达令”获得苏宁电器战略投资。', '8.珠宝共享平台“一起戴”APP 完成了 5000 万元的战略融资。', '9.专注语音合成前端技术的“标贝科技”完成千万级人民币融资。', '1');
INSERT INTO `msg_table` VALUES ('5', '42222222', '4', '4', '4', '4.马云：蚂蚁金服两年内不会上市，更多关注金融科技。', '4', '4', '4', '4', '44', '4', '4', '4', '4', '4', '4.QQ 同步助手将用户生日信息弹窗给他人，律师称此行为侵犯隐私。', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4.办公室无人货架公司“小闪科技”完成 2000 万元融资。', '4', '4', '4', '4', '4', '4');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `graduate` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', '123', '123', '0000000500');
INSERT INTO `user_table` VALUES ('2', '34', '34', '0000001000');
INSERT INTO `user_table` VALUES ('3', '56', '56', '0000001000');
INSERT INTO `user_table` VALUES ('4', '32', '23', '0000001000');
INSERT INTO `user_table` VALUES ('5', 'rt', 'rt', '0000001000');
INSERT INTO `user_table` VALUES ('9', '34222', '11', '0000001000');
