DROP DATABASE IF EXISTS recipe_finder;

CREATE DATABASE recipe_finder;

USE recipe_finder;

CREATE TABLE searched_recipes (
  id INT,
  image VARCHAR(8000),
  title VARCHAR(250),
  description VARCHAR(500),
  PRIMARY KEY(id)
);

CREATE TABLE saved_recipes (
  id INT,
  image VARCHAR(8000),
  title VARCHAR(250),
  PRIMARY KEY(id),
);

-- mysql -u root < server/db/schema.sql
