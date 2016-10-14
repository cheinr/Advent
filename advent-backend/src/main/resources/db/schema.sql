CREATE TABLE user (id INT NOT NULL IDENTITY(1,1), display_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL,
                   description VARCHAR(255) NOT NULL);
INSERT INTO user (id, display_name, email, description) VALUES (1000, 'displayName1', 'email@address.com', 'description');
CREATE TABLE event (id bigint(20) NOT NULL AUTO_INCREMENT, name varchar(255) not null, description varchar(255) not null,
                    start_date date, end_date date, location varchar(255), is_private INTEGER(1));