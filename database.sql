drop table if exists `students`;

create table `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `remote` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

lock table `student` write;

insert into `student` VALUES
(1, 'tata', 'tata',45,0),
(2, 'tutu', 'toto',29,1),
(3, 'tutu', 'tutu',35,1);

unlock tables;
