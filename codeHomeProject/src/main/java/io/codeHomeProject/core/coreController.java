package io.codeHomeProject.core;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class coreController {
	
	@RequestMapping("/main")
 	public String getBlogInfo() {
 		return "Controller is Working";
 	}

}
