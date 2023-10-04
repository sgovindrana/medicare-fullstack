package com.govind.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.govind.medicare.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
