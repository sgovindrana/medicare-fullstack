package com.govind.medicare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity 
@Table (name = "medicare_service")
public class MedicareService {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name = "medicare_service_id")
	private int id;
	
	@Column (name = "medicare_service")
	private String medicareService;
	
	@Column (name = "service_description")
	private String serviceDescription;
	
	@Column (name = "amount")
	private int amount;
	
	public MedicareService() {
		super();
	}

	public MedicareService(int id, String medicareService, String serviceDescription, int amount) {
		super();
		this.id = id;
		this.medicareService = medicareService;
		this.serviceDescription = serviceDescription;
		this.amount = amount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMedicareService() {
		return medicareService;
	}

	public void setMedicareService(String medicareService) {
		this.medicareService = medicareService;
	}

	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "MedicareService [id=" + id + ", medicareService=" + medicareService + ", serviceDescription="
				+ serviceDescription + ", amount=" + amount + "]";
	}

	
}
