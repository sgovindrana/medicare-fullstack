package com.govind.medicare.exception;

public class AdminAlreadyExistsException extends Exception {

	private static final long serialVersionUID = 1L;

	public AdminAlreadyExistsException() {
		System.out.println("Admin already exist !");
	}
}
