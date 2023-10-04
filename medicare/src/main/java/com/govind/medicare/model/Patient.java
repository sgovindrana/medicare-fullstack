package com.govind.medicare.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "patient")
public class Patient {
	
	@Id
	
	@Column (name = "patient_id")
	private String patientId;
	
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
	
	@Column (name = "contact_number")
	private int contact;
	
	@Column (name = "alt_contact_number")
	private int altContact;
	
	@Column (name = "email")
	private String email;
	
	
	@Column (name = "password")
	private String password;
	
	@Column (name = "address_line1")
	private String address1;
	
	@Column (name = "address_line2")
	private String address2;
	
	@Column (name = "city")
	private String city;
	
	@Column (name = "state")
	private String state;
	
	@Column (name = "zip")
	private int zip;
	
	@Column (name = "valid")
	private boolean valid;
	
	
	public Patient() {
		super();
	}


public Patient(String patientId, String firstName, String lastName, int age, String gender, String dateOfBirth,
		int contact, int altContact, String email, String password, String address1, String address2, String city,
		String state, int zip, boolean valid) {
	super();
	this.patientId = patientId;
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
	this.state = state;
	this.zip = zip;
	this.valid = valid;
}


public String getPatientId() {
	return patientId;
}


public void setPatientId(String patientId) {
	this.patientId = patientId;
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


public String getState() {
	return state;
}


public void setState(String state) {
	this.state = state;
}


public int getZip() {
	return zip;
}


public void setZip(int zip) {
	this.zip = zip;
}


public boolean isValid() {
	return valid;
}


public void setValid(boolean valid) {
	this.valid = valid;
}


@Override
public String toString() {
	return "Patient [patientId=" + patientId + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
			+ ", gender=" + gender + ", dateOfBirth=" + dateOfBirth + ", contact=" + contact + ", altContact="
			+ altContact + ", email=" + email + ", password=" + password + ", address1=" + address1 + ", address2="
			+ address2 + ", city=" + city + ", state=" + state + ", zip=" + zip + ", valid=" + valid + "]";
}

	
	
}
