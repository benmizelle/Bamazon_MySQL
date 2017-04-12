CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE products (
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY(item_id)
);
USE Bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Stratocaster", "Musical Instruments", 1500.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "Electronics", 599.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter and the Deathly Hallows", "Books", 29.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nightstand Table", "Interior Decorating", 199.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Legend of Zelda: Breath of the Wild", "Video Games", 49.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acer Computer", "Electronics", 899.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair Straightening Iron", "Beauty/Cosmetics", 59.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jansport Rucksack", "Apparel", 29.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Espresso Machine", "Electronics", 999.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coding for Dummies", "Books", 15.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oakley Sunglasses", "Apparel", 79.99, 0);