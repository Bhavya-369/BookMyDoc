package com.suri.bookmydoc.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="slot")
public class Slot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="slot_id",nullable = false)
	private Integer slotId;
	
	@ManyToOne
	@JoinColumn(name="doctor_id",nullable = false)
	private Doctor doctor;
	
	
	private LocalTime slotTime;
	
	
	private LocalDate slotDate;
	
	@Enumerated(EnumType.STRING)
	  @Column(nullable = false)
	private SlotStatus status;

}
