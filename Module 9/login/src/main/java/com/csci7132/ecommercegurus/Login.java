package com.csci7132.ecommercegurus;

public class Login {

	  private String username;
	  private String password;
	  private Integer user_id;
	  private Integer basket_id;
	  private boolean logged_in;
	  
	  public Login() {
		this.username="null";
		this.logged_in = false;
	}

	public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
	    this.username = username;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public Integer getBasket_id() {
		return basket_id;
	}

	public void setBasket_id(Integer basket_id) {
		this.basket_id = basket_id;
	}

	public boolean isLogged_in() {
		return logged_in;
	}

	public void setLogged_in(boolean logged_in) {
		this.logged_in = logged_in;
	}
}