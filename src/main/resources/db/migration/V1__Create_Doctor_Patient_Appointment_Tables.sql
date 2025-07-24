-- Create Doctor table
CREATE TABLE doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    specialty VARCHAR(100)
);

-- Create Patient table
CREATE TABLE patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    birth_date DATE
);

-- Create Slot table
CREATE TABLE slot (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    doctor_id BIGINT,
    slot_time TIME NOT NULL,
    date DATE,
    status ENUM('AVAILABLE', 'BOOKED') DEFAULT 'AVAILABLE',
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

-- Create Appointment table
CREATE TABLE appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT,
    patient_id INT,
    appointment_date DATE,
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

-- Create user table to handle login
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- Store the hashed password
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('ROLE_USER', 'ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT') DEFAULT 'ROLE_USER',
    patient_id INT,  -- Foreign key if the user is a patient
    FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
