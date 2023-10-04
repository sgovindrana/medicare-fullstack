package com.govind.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.govind.medicare.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	public Patient findByPatientId(String name);
}
