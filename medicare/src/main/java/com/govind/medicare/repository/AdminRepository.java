package com.govind.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.govind.medicare.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	public Admin findByAdminId(String name);
}
