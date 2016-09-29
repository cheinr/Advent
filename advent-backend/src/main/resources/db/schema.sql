CREATE TABLE user (id bigint(20) NOT NULL AUTO_INCREMENT, username varchar(255) NOT NULL, display_name varchar(255) NOT NULL,
                    email varchar(255) NOT NULL, password varchar(255) NOT NULL, description varchar(255) NOT NULL);
INSERT INTO user (id, username, display_name, email, password, description) VALUES (1000, 'exampleUser', 'displayName',
                    'email@address.com', 'password', 'description');
CREATE TABLE event (id bigint(20) NOT NULL AUTO_INCREMENT, name varchar(255) not null, description varchar(255) not null,
                    start_date date not null, end_date date, location varchar(255), is_private INTEGER(1));