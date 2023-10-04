package com.govind.medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.govind.medicare.exception.UserAlreadyExistsException;
import com.govind.medicare.model.Doctor;
import com.govind.medicare.model.Patient;
import com.govind.medicare.services.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@GetMapping("/patient")
	public List<Patient> getPatientList() {
		return adminService.getPatientList();
	}
	
	@GetMapping("/doctor")
	public List<Doctor> getDoctorList() {
		return adminService.getDoctorList();
	}
	
	@PutMapping("/patient/{role}/{patientId}")
	public Boolean validatePatient(@PathVariable String role, @PathVariable String patientId) throws UserAlreadyExistsException {
		System.out.println("request appointment"+role+"**"+patientId);
		
		return adminService.validatePatient(role, patientId);
	}
	
	@PutMapping("/doctor/{role}/{doctorId}")
	public Boolean validateDoctor(@PathVariable String role, @PathVariable String doctorId) throws UserAlreadyExistsException {
		System.out.println("request appointment"+role+"**"+doctorId);
		
		return adminService.validateDoctor(role, doctorId);
	}
	
	@PutMapping("/report/{username}/{reportId}")
	public Boolean validateReport(@PathVariable String username, @PathVariable int reportId) {
		System.out.println("request appointment"+username+"**"+reportId);
		
		return adminService.validateReport(username, reportId);
	}
	
	@DeleteMapping("/removeRequest/{username}/{reportId}")
	public Boolean removePatientRequest(@PathVariable String username, @PathVariable int reportId){
		System.out.println("log 1");
		return adminService.removePatientRequest(username, reportId);
	}
}
