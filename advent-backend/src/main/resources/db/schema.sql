CREATE TABLE user (id bigint(20) NOT NULL AUTO_INCREMENT, full_name varchar(255) NOT NULL, display_name varchar(255) NOT NULL,
                    email varchar(255) NOT NULL, description varchar(255) NOT NULL, profile_pic_url varchar(255) NOT NULL);

INSERT INTO user (id, full_name, display_name, email, description, profile_pic_url) VALUES (1000, 'exampleUser', 'displayName',
                    'email@address.com', 'description', 'a_picture_url');

CREATE TABLE event (id bigint(20) NOT NULL AUTO_INCREMENT, name varchar(255) not null, description varchar(255) not null,
                    start_date date, end_date date, location varchar(255), is_private INTEGER(1));

