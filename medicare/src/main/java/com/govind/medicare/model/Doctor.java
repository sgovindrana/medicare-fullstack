package com.govind.medicare.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table (name = "doctor")
public class Doctor {
	
	@Id
	@PrimaryKeyJoinColumn
	@Column (name = "doctor_id")
	private String doctorId;
	
	@Column (name = "firstname")
	private String firstName;
	
	@Column (name = "lastname")
	private String lastName;
	
	@Column (name = "age")
	private int age;
	
	@Column (name = "gender")
	private String gender;
	
	@Column (name = "date_of_birth")
	private String dateOfBirth;
	
	@Column (name = "contact")
	private int contact;
	
	@Column (name = "alt_contact")
	private int altContact;
	
	@Column (name = "email")
	private String email;
	
	@Column (name = "password")
	private String password;
	
	@Column (name = "address1")
	private String address1;
	
	@Column (name = "address2")
	private String address2;
	
	@Column (name = "city")
	private String city;
	
	@Column (name = "zip")
	private int zip;
	
	@Column (name = "degree")
	private String degree;
	
	@Column (name = "speciality")
	private String speciality;
	
	@Column (name = "workhours")
	private int workhours;
	
	@Column (name = "hospitalname")
	private String hospitalName;
	
	@Column (name = "medicare_service_id")
	private int medicareServiceId;
	
	@Column (name = "status")
	private Boolean	status;
	
	@OneToOne(targetEntity=MedicareService.class,cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name="medicare_id")
	private MedicareService medicareService;
	
	public Doctor() {
		super();
	}

	public Doctor(String doctorId, String firstName, String lastName, int age, String gender, String dateOfBirth,
			int contact, int altContact, String email, String password, String address1, String address2, String city,
			int zip, String degree, String speciality, int workhours, String hospitalName, int medicareServiceId,
			Boolean status, MedicareService medicareService) {
		super();
		this.doctorId = doctorId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.contact = contact;
		this.altContact = altContact;
		this.email = email;
		this.password = password;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.zip = zip;
		this.degree = degree;
		this.speciality = speciality;
		this.workhours = workhours;
		this.hospitalName = hospitalName;
		this.medicareServiceId = medicareServiceId;
		this.status = status;
		this.medicareService = medicareService;
	}

	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public int getContact() {
		return contact;
	}

	public void setContact(int contact) {
		this.contact = contact;
	}

	public int getAltContact() {
		return altContact;
	}

	public void setAltContact(int altContact) {
		this.altContact = altContact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public int getWorkhours() {
		return workhours;
	}

	public void setWorkhours(int workhours) {
		this.workhours = workhours;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public int getMedicareServiceId() {
		return medicareServiceId;
	}

	public void setMedicareServiceId(int medicareServiceId) {
		this.medicareServiceId = medicareServiceId;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public MedicareService getMedicareService() {
		return medicareService;
	}

	public void setMedicareService(MedicareService medicareService) {
		this.medicareService = medicareService;
	}

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", gender=" + gender + ", dateOfBirth=" + dateOfBirth + ", contact=" + contact + ", altContact="
				+ altContact + ", email=" + email + ", password=" + password + ", address1=" + address1 + ", address2="
				+ address2 + ", city=" + city + ", zip=" + zip + ", degree=" + degree + ", speciality=" + speciality
				+ ", workhours=" + workhours + ", hospitalName=" + hospitalName + ", medicareServiceId="
				+ medicareServiceId + ", status=" + status + ", medicareService=" + medicareService + "]";
	}

	
}
