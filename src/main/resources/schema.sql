create database if not exists`lookatmybaby`;

use `lookatmybaby`;

create table if not exists `post` (
  `id` bigint unsigned not null auto_increment comment 'ID',
  `image_path` text comment '이미지 패스',
  `social_url` text comment '소셜네트워크 링크',
  `rescue_url` text comment '유기견 링크',
  `status_code` text comment '포스트 상태코드'
  `create_time` datetime not null default current_timestamp comment '작성일',
  `update_time` datetime not null default current_timestamp on update current_timestamp comment'수정일',
  primary key (`id`),
) engine=innodb default charset=utf8mb4 comment='post_table';
