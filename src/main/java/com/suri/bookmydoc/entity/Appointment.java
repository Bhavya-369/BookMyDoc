package com.suri.bookmydoc.entity;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="appointment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	@Column(name="appointment_id")
	private Integer appointmentId;
	
	@JoinColumn(name="doctor_id",nullable = false)
	@ManyToOne
	private Doctor doctor;
	
	
	@JoinColumn(name="patient_id",nullable = false)
	@ManyToOne
	private Patient patient;
	
	@JoinColumn(name="slot_id",nullable = false)
	@ManyToOne
	private Slot slot;
	
	@Column(name = "appointment_date", nullable = false)
	private LocalDate appointmentDate;;
	
	

}
