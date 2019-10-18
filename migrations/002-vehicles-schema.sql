-- Up
CREATE TABLE vehicles (
    vehicle_id INTEGER PRIMARY KEY,
    vehicle_type TEXT NOT NULL,
    vehicle_brand TEXT NOT NULL,
    vehicle_color TEXT NOT NULL
);

INSERT INTO vehicles (vehicle_id, vehicle_type, vehicle_brand, vehicle_color ) VALUES (1, 'Hatchback', 'Volkswagen Golf', 'red');
INSERT INTO vehicles (vehicle_id, vehicle_type, vehicle_brand, vehicle_color ) VALUES (2, 'Sedan', 'Honda Accord', 'blue');
INSERT INTO vehicles (vehicle_id, vehicle_type, vehicle_brand, vehicle_color ) VALUES (3, 'Coupe', 'Toyota 86', 'black');
INSERT INTO vehicles (vehicle_id, vehicle_type, vehicle_brand, vehicle_color ) VALUES (4, 'MPV', 'Volkswagen Touran', 'grey');

-- Down
DROP TABLE vehicles;