package com.govind.authentication.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="role")
public class Role {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ro_id")
	private int id;
	
	@Column(name="ro_name")
	private String name;
	
	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="user_role", joinColumns = @JoinColumn(name="ur_ro_id"), inverseJoinColumns = @JoinColumn(name="ur_us_id"))
	private List<User> users;

	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Role [id=" + id + ", name=" + name + "]";
	}
	public Role(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
