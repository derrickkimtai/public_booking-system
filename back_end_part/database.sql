-- Create the 'seats' table
CREATE TABLE seats  (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    seat_number VARCHAR(10) NOT NULL,
    is_reserved BOOLEAN NOT NULL DEFAULT TRUE
);

-- Insert data into the 'seats' table
INSERT INTO seats (seat_number) VALUES
('A1'), ('A2'), ('A3'), ('A4'), ('A5'), ('A6'), ('A7'),
('B1'), ('B2'), ('B3'), ('B4'), ('B5'), ('B6'), ('B7');
