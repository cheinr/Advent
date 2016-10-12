CREATE TABLE user (id INT NOT NULL IDENTITY(1,1), display_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL);
INSERT INTO user (id, display_name, email, description) VALUES (1000, 'displayName1', 'email@address.com', 'description');