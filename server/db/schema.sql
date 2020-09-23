
DROP DATABASE IF EXISTS recipe_finder;
CREATE DATABASE recipe_finder;

USE recipe_finder;

CREATE TABLE saved_recipes (
  id int NOT NULL AUTO_INCREMENT,
  image varchar(8000),
  title varchar(250),
  PRIMARY KEY (id)
);

-- mysql -u root < server/db/schema.sql
