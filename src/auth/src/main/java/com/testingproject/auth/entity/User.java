package com.testingproject.auth.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "id")
	private String id;
	
	@Column(name = "username")
	private String username;

	@Column(name = "email")
	private String email;
	
	@Column(name = "passwd")
	private String passwd;
	
	
	public User() {
		super();
	}
	
	public User(String username, String email, String passwd) {
		super();
		this.username = username;
		this.email = email;
		this.passwd = passwd;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	
	@Override
	public String toString() {
		return "User: { id = " + id + " username = " + username + " email = " + email + " }";
	}
}
