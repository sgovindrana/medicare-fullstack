package com.govind.medicare.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table (name = "medical_test_history")
public class MedicalTestHistory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@PrimaryKeyJoinColumn
	@Column (name = "request_id")
	private int id;
	
	@Column (name = "patient_id")
	private String patientId;
	
	@Column (name = "doctor_id")
	private String doctorId;
	
	@Column (name = "medical_service_id")
	private int medicalServiceId;
	
	@Column (name = "agent_id")
	private String agentId;
	
	@Column (name = "service_date")
	private String serviceDate;
	
	@Column (name = "test_result_date")
	private String testResultDate;
	
	@Column (name = "diag1_av")
	private String diag1Av;
	
	@Column (name = "diag1_nr")
	private String diag1Nr;
	
	@Column (name = "diag2_av")
	private String diag2Av;
	
	@Column (name = "diag2_nr")
	private String diag2Nr;

	@Column (name = "diag3_av")
	private String diag3Av;
	
	@Column (name = "diag3_nr")
	private String diag3Nr;
	
	@Column (name = "doctor_comments")
	private String doctorComments;
	
	@Column (name = "other_info")
	private String otherInfo;
	
	@Column (name = "status")
	private Boolean	status;
	
	@OneToOne(targetEntity=Doctor.class,cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name="med_doc_request_id")
	private Doctor reqDoctorId;
	
	@OneToOne(targetEntity=Patient.class,cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name="med_pat_request_id")
	private Patient reqPatientId;
	
	public MedicalTestHistory() {
		super();
	}

	public MedicalTestHistory(int id, String patientId, String doctorId, int medicalServiceId, String agentId,
			String serviceDate, String testResultDate, String diag1Av, String diag1Nr, String diag2Av, String diag2Nr,
			String diag3Av, String diag3Nr, String doctorComments, String otherInfo, Boolean status, Doctor reqDoctorId,
			Patient reqPatientId) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.doctorId = doctorId;
		this.medicalServiceId = medicalServiceId;
		this.agentId = agentId;
		this.serviceDate = serviceDate;
		this.testResultDate = testResultDate;
		this.diag1Av = diag1Av;
		this.diag1Nr = diag1Nr;
		this.diag2Av = diag2Av;
		this.diag2Nr = diag2Nr;
		this.diag3Av = diag3Av;
		this.diag3Nr = diag3Nr;
		this.doctorComments = doctorComments;
		this.otherInfo = otherInfo;
		this.status = status;
		this.reqDoctorId = reqDoctorId;
		this.reqPatientId = reqPatientId;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	public int getMedicalServiceId() {
		return medicalServiceId;
	}

	public void setMedicalServiceId(int medicalServiceId) {
		this.medicalServiceId = medicalServiceId;
	}

	public String getAgentId() {
		return agentId;
	}

	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}

	public String getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(String serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getTestResultDate() {
		return testResultDate;
	}

	public void setTestResultDate(String testResultDate) {
		this.testResultDate = testResultDate;
	}

	public String getDiag1Av() {
		return diag1Av;
	}

	public void setDiag1Av(String diag1Av) {
		this.diag1Av = diag1Av;
	}

	public String getDiag1Nr() {
		return diag1Nr;
	}

	public void setDiag1Nr(String diag1Nr) {
		this.diag1Nr = diag1Nr;
	}

	public String getDiag2Av() {
		return diag2Av;
	}

	public void setDiag2Av(String diag2Av) {
		this.diag2Av = diag2Av;
	}

	public String getDiag2Nr() {
		return diag2Nr;
	}

	public void setDiag2Nr(String diag2Nr) {
		this.diag2Nr = diag2Nr;
	}

	public String getDiag3Av() {
		return diag3Av;
	}

	public void setDiag3Av(String diag3Av) {
		this.diag3Av = diag3Av;
	}

	public String getDiag3Nr() {
		return diag3Nr;
	}

	public void setDiag3Nr(String diag3Nr) {
		this.diag3Nr = diag3Nr;
	}

	public String getDoctorComments() {
		return doctorComments;
	}

	public void setDoctorComments(String doctorComments) {
		this.doctorComments = doctorComments;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public void setOtherInfo(String otherInfo) {
		this.otherInfo = otherInfo;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Doctor getReqDoctorId() {
		return reqDoctorId;
	}

	public void setReqDoctorId(Doctor reqDoctorId) {
		this.reqDoctorId = reqDoctorId;
	}

	public Patient getReqPatientId() {
		return reqPatientId;
	}

	public void setReqPatientId(Patient reqPatientId) {
		this.reqPatientId = reqPatientId;
	}

	@Override
	public String toString() {
		return "MedicalTestHistory [id=" + id + ", patientId=" + patientId + ", doctorId=" + doctorId
				+ ", medicalServiceId=" + medicalServiceId + ", agentId=" + agentId + ", serviceDate=" + serviceDate
				+ ", testResultDate=" + testResultDate + ", diag1Av=" + diag1Av + ", diag1Nr=" + diag1Nr + ", diag2Av="
				+ diag2Av + ", diag2Nr=" + diag2Nr + ", diag3Av=" + diag3Av + ", diag3Nr=" + diag3Nr
				+ ", doctorComments=" + doctorComments + ", otherInfo=" + otherInfo + ", status=" + status
				+ ", reqDoctorId=" + reqDoctorId + ", reqPatientId=" + reqPatientId + "]";
	}
	
}
