package com.csci7132.ecommercegurus;

import com.csci7132.ecommercegurus.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("SELECT basket_id FROM User WHERE user_id=:searchTerm")
	public Iterable<User> getBasketId(@Param("searchTerm") Integer searchTerm);
	
	@Query("SELECT permission_id FROM User WHERE user_id=:searchTerm")
	public Integer getPermissionId(@Param("searchTerm") Integer searchTerm);
}