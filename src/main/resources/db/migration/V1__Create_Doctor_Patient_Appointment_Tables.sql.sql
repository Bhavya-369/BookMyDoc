-- Create Doctor table
CREATE TABLE doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100) NOT NULL
);

-- Create Patient table
CREATE TABLE patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE
);

-- Create Slot table
CREATE TABLE slot (
    slot_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    doctor_id INT NOT NULL,
    slot_time TIME NOT NULL,
    slot_date DATE NOT NULL,
    status ENUM('AVAILABLE', 'BOOKED') DEFAULT 'AVAILABLE',
    CONSTRAINT fk_slot_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id)
);

-- Create Appointment table
CREATE TABLE appointment (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    slot_id BIGINT,
    CONSTRAINT fk_appt_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    CONSTRAINT fk_appt_patient FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    CONSTRAINT fk_appt_slot FOREIGN KEY (slot_id) REFERENCES slot(slot_id)
);

-- Create User table (for login/auth)
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('ROLE_USER', 'ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT') DEFAULT 'ROLE_USER',
    patient_id INT,
    doctor_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_patient FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE SET NULL,
    CONSTRAINT fk_user_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE SET NULL
);
