package com.govind.medicare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.govind.medicare.model.Doctor;
import com.govind.medicare.model.MedicalTestHistory;
import com.govind.medicare.model.Patient;
import com.govind.medicare.security.AppUserDetailsService;
import com.govind.medicare.services.AdminService;
import com.govind.medicare.services.MedicareServiceService;

@RestController
@RequestMapping("/medicare")
public class MedicareController {

	String role;
	@Autowired
	MedicareServiceService medicareServiceService;

	@Autowired
	AppUserDetailsService appUserDetailsService;

	@Autowired
	AdminService adminService;

	@GetMapping("/doctor")
	public List<Doctor> getDoctorMenuList() {
		return medicareServiceService.getDoctorMenuList();
	}

	@GetMapping("/patient")
	public List<Patient> getPatientMenuList() {
		return medicareServiceService.getPatientMenuList();
	}

	@GetMapping("/patient/{username}")
	public Patient getPatient(@PathVariable String username) {
		return medicareServiceService.getPatient(username);
	}

	@PutMapping("/patient/{username}/{doctorId}")
	public void addRequestAppointment(@PathVariable String username, @PathVariable String doctorId) {
		System.out.println("request appointment" + username + "**" + doctorId);
		medicareServiceService.addRequestAppointment(username, doctorId);
	}

	@GetMapping("/medicalTestHistory/{username}/{role}")
	public List<MedicalTestHistory> getMedicalTestHistoryList(@PathVariable String username,
			@PathVariable String role) {
		System.out.println("******$$$$$ " + role);
		return medicareServiceService.getMedicalTestHistoryList(username, role);
	}

	@GetMapping("/medicalTestHistory/{id}")
	public MedicalTestHistory getMedicalTestHistory(@PathVariable int id) {

		return medicareServiceService.getMedicalTestHistory(id);
	}

	@PutMapping("/saveReport")
	public void saveTestReport(@RequestBody MedicalTestHistory medicalTestHistory) {
		System.out.println("111111111111111111");
		System.out.println(medicalTestHistory);
		medicareServiceService.saveTestReport(medicalTestHistory);
	}

	@GetMapping("/doctor/{username}")
	public Doctor getDoctorById(@PathVariable String username) {
		return medicareServiceService.getDoctorById(username);
	}

	@PutMapping("/saveDoctor")
	public void saveDoctor(@RequestBody Doctor doctor) {
		System.out.println("111111111111111111");
		System.out.println(doctor);
		medicareServiceService.saveDoctor(doctor);
	}

}
