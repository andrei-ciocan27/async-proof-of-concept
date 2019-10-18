-- Up
CREATE TABLE contacts (
    contact_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE
);

INSERT INTO contacts (contact_id, first_name, last_name, email, phone ) VALUES (1, 'John', 'Doe', 'johndoe@example.com', '+123456789');
INSERT INTO contacts (contact_id, first_name, last_name, email, phone ) VALUES (2, 'Jack', 'White', 'jackwhite@example.com', '+223456789');
INSERT INTO contacts (contact_id, first_name, last_name, email, phone ) VALUES (3, 'Dan', 'White', 'danwhite@example.com', '+323456789');
INSERT INTO contacts (contact_id, first_name, last_name, email, phone ) VALUES (4, 'Jane', 'Doe', 'janedoe@example.com', '+623456789');

-- Down
DROP TABLE contacts;