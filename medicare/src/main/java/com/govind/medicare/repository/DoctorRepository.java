package com.govind.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.govind.medicare.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
	
	public Doctor findByDoctorId(String name);
}
