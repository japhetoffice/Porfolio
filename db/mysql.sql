CREATE DATABASE portfolio_db;
USE portfolio_db;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    link VARCHAR(255)
);

-- Add your current projects into the DB
INSERT INTO projects (title, description) VALUES 
('TimeGym', 'A QR based Gym Monitoring and Access.'),
('Python Backend', 'Database connection project and APIs.'),
('Bento Portfolio', 'Minimal personal website.'); 