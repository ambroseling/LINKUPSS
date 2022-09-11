CREATE table if not exists participant_session
(
 participant_session_id int not null AUTO_INCREMENT,
 participant_id int not null,
 session_id int not null,
 extra_info json,
 primary key(participant_session_id)
 )
character set utf8;