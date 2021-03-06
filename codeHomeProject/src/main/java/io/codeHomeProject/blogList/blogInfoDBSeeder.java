package io.codeHomeProject.blogList;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class blogInfoDBSeeder implements CommandLineRunner{
    
	public blogListRepository BlogListRepository;

	
	public blogInfoDBSeeder(blogListRepository blogListRepository) {
		this.BlogListRepository = blogListRepository;
	}

	public String createdDate = "12-12-2017";
	public String updatedDate = "21-12-2017";

	@Override
	public void run(String... arg0) throws Exception {
		
		blogInfo blog = new blogInfo("1", "Read", "To Watch", "To Watch Conetnt", "To WAtch Genre", false, null, null);
		blogInfo blog2 = new blogInfo("2", "Watch", "To Watch", "To Watch Conetnt", "To WAtch Genre", false, null, null);
		blogInfo blog3 = new blogInfo("3", "Hear", "To Hear", "To Hear Conetnt", "To Hear Genre", false, null, null);
		
		//Code to drop All hotels.
		this.BlogListRepository.deleteAll();
		
		//Creating Data in database
		List<blogInfo> blogLists = Arrays.asList(blog, blog2, blog3);
		this.BlogListRepository.save(blogLists);
		
	}


}
