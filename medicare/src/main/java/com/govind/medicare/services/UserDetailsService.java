package com.govind.medicare.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.govind.medicare.exception.AdminAlreadyExistsException;
import com.govind.medicare.exception.DoctorAlreadyExistsException;
import com.govind.medicare.exception.PatientAlreadyExistsException;
import com.govind.medicare.model.Admin;
import com.govind.medicare.model.Doctor;
import com.govind.medicare.model.MedicareService;
import com.govind.medicare.model.Patient;
import com.govind.medicare.model.Role;
import com.govind.medicare.model.User;
import com.govind.medicare.repository.AdminRepository;
import com.govind.medicare.repository.DoctorRepository;
import com.govind.medicare.repository.MedicareServiceRepository;
import com.govind.medicare.repository.PatientRepository;
import com.govind.medicare.repository.RoleRepository;
import com.govind.medicare.repository.UserRepository;



@Service
public class UserDetailsService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	MedicareServiceRepository medicareServiceRepository;
	

	public List<Admin> getAdminList() {
		
		return adminRepository.findAll();
	}
	
	public Boolean AdminSignUp(Admin admin) throws AdminAlreadyExistsException{
		
		Admin admin1 = adminRepository.findByAdminId(admin.getAdminId()); 
		if(admin1 != null || admin.getAdminId().equalsIgnoreCase("admin"))
		{
			throw new AdminAlreadyExistsException();
		}
		
		else {
			admin.setPassword(new BCryptPasswordEncoder().encode(admin.getPassword()));
			List<Role> rolelist = new ArrayList<Role>();
			
			Role role = roleRepository.findById(2).get();
			rolelist.add(role);
			//admin.setRoles(rolelist);
			adminRepository.save(admin);
			
			User user = new User();
			user.setUsername(admin.getAdminId());
			user.setFirstname(admin.getFirstName());
			user.setLastname(admin.getLastName());
			System.out.println("***************************");
				System.out.println(admin.getPassword());
			System.out.println("****************************");
			user.setPassword(admin.getPassword());
			user.setRoles(rolelist);
			userRepository.save(user);
			return true;
			
			
		}
	} 
	
	public Boolean DoctorSignUp(Doctor doctor) throws DoctorAlreadyExistsException{
		
		System.out.println("888888888888888888888888 doctor ***********");
			System.out.println(doctor);
		System.out.println("888888888888888888888888");
		Doctor doctor1 = doctorRepository.findByDoctorId(doctor.getDoctorId());
		System.out.println("****************** doctor 11***********");
		System.out.println(doctor1);
	System.out.println("**************************");
		if(doctor1 != null)
		{
			throw new DoctorAlreadyExistsException();
		}
		
		else {
			doctor.setPassword(new BCryptPasswordEncoder().encode(doctor.getPassword()));
			System.out.println("***********setting medicare ser**************");
			System.out.println(doctor.getMedicareServiceId());
			MedicareService medicareService = medicareServiceRepository.findById(doctor.getMedicareServiceId()).get();
			System.out.println();
			System.out.println("***********setting medicare ser**************");
			doctor.setMedicareService(medicareService);
			doctorRepository.save(doctor);
			
			return true;	
		}
		
	} 
	
	
	public Boolean PatientSignUp(Patient patient) throws PatientAlreadyExistsException{
		
		Patient patient1 = patientRepository.findByPatientId(patient.getPatientId()); 
		if(patient1 != null)
		{
			throw new PatientAlreadyExistsException();
		}
		
		else {
			patient.setPassword(new BCryptPasswordEncoder().encode(patient.getPassword()));
			//admin.setRoles(rolelist);
			
			patientRepository.save(patient);
			return true;		
		}
	} 
	
}
