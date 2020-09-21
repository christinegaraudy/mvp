DROP DATABASE IF EXISTS recipe_finder;

CREATE DATABASE recipe_finder;

USE recipe_finder;

CREATE TABLE recipes (
  id INT,
  image VARCHAR(10000),
  title VARCHAR(250),
  description VARCHAR(500),
  PRIMARY KEY(id)
)