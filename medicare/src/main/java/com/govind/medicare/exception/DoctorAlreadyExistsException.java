package com.govind.medicare.exception;

public class DoctorAlreadyExistsException extends Exception {
	
	
	private static final long serialVersionUID = 1L;

	public DoctorAlreadyExistsException() {
		System.out.println("Doctor already exist !");
	}
}
