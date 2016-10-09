CREATE TABLE user (id bigint(20) NOT NULL AUTO_INCREMENT, display_name varchar(255) NOT NULL, email varchar(255) NOT NULL,
        description varchar(255) NOT NULL);
INSERT INTO user (id, display_name, email, description) VALUES (1000, 'displayName', 'email@address.com', 'description');