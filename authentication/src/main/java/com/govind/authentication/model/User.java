package com.govind.authentication.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table ( name = "user")
public class User {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	int id;
	
	/*@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-30 characters")  */
	@Column (name = "us_name")
	String username;  	//,firstname,lastname;
	
	@Column (name = "us_firstname")
	String firstname;
	
	@Column (name = "us_lastname")
	String lastname;
	
	/*@NotNull
	@Size(min=2,message="Password must have more than 6 characters")  */
	@Column (name = "us_password")
	String password;
	
	@JsonIgnore
	@ManyToMany 
	@JoinTable (name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private List<Role> roles; 

	public User() {
		super();
	}

	public User(int id, String username, String firstname, String lastname, String password) {
		super();
		this.id = id;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "USER [id=" + id + ", username=" + username + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", password=" + password + "]";
	}
	
}
