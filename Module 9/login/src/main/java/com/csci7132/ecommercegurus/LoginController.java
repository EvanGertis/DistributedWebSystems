package com.csci7132.ecommercegurus;

import com.csci7132.ecommercegurus.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("login")
public class LoginController {

	@Autowired
	public UserRepository userRepo;

	private boolean userFound = false;
	
	@ModelAttribute("login")
	public Login getLogin() {
		return new Login();
	}
	
	@GetMapping("/login")
	public String getLogin(Model model, String message) {
		userFound = false;
		model.addAttribute("title", "Login");
		model.addAttribute("login", new Login());
		model.addAttribute("loginMessage", message);
		return "login";
	}
}
