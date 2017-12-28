package io.codeHomeProject.blogList;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class blogInfoDBSeeder implements CommandLineRunner{
    
	public blogListRepository BlogListRepository;

	
	public blogInfoDBSeeder(blogListRepository blogListRepository) {
		this.BlogListRepository = blogListRepository;
	}


	@Override
	public void run(String... arg0) throws Exception {
		
		blogInfo blog = new blogInfo("1", "Watch", "MS Dhoni- Movie review", "Movies/Entertainment", "MS Dhoni is very good and rates 4.5 on 5 in my book", "https://i.ndtvimg.com/i/2017-08/ms-dhoni-afp_806x605_51503600539.jpg", true);
		blogInfo blog2 = new blogInfo("2", "Read", "How to Influence People", "Books", "Dale Carnagie masterpiece still proves legit in 2017", "https://images-na.ssl-images-amazon.com/images/I/51SwGh%2BfzXL._SX306_BO1,204,203,200_.jpg", true);
		blogInfo blog3 = new blogInfo("2", "Hear", "Eminem - Revival", "Music","Its a chartbuster album. Exclusive everything", "https://images.genius.com/789a67419a612d81cbbcb10380b5781c.800x800x1.jpg", true);
		
		//Code to drop All hotels.
		this.BlogListRepository.deleteAll();
		
		//Creating Data in database
		List<blogInfo> blogLists = Arrays.asList(blog, blog2, blog3);
		this.BlogListRepository.save(blogLists);
		
	}


}
