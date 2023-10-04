package com.govind.medicare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "admin")
public class Admin {

	@Id
	
	@Column (name = "admin_id")
	private String adminId;
	
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
	private String altContact;
	
	@Column (name = "email")
	private String email;
	
	@Column (name = "password")
	private String password;
	

	public Admin() {
		super();
	}

	public Admin(String id, String firstName, String lastName, int age, String gender, String dateOfBirth, int contact,
			String altContact, String email, String password) {
		super();
		this.adminId = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.contact = contact;
		this.altContact = altContact;
		this.email = email;
		this.password = password;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
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

	public String getAltContact() {
		return altContact;
	}

	public void setAltContact(String altContact) {
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

	@Override
	public String toString() {
		return "Admin [id=" + adminId + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", gender="
				+ gender + ", dateOfBirth=" + dateOfBirth + ", contact=" + contact + ", altContact=" + altContact
				+ ", email=" + email + ", password=" + password + "]";
	}
		
}
