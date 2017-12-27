package io.codeHomeProject.blogList;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.querydsl.core.types.dsl.BooleanExpression;

@RestController
@RequestMapping("/bloglist")
public class blogListController {
	
	public blogListRepository BlogListRepository;
	
	
 	public blogListController(blogListRepository blogListRepository) {
		this.BlogListRepository = blogListRepository;
	}

 	@GetMapping("/blog")
	public List<blogInfo> AllBlogsByUserId() {
		List<blogInfo> blogs = this.BlogListRepository.findAll();
		return blogs;
 	}
	
	@GetMapping("/blog/{id}")
	public blogInfo getById(@PathVariable("id") String id) {
		blogInfo blog = this.BlogListRepository.findById(id);
		return blog;
	}
	
	@GetMapping("/blogType={blogType}")
	public List<blogInfo> getBlogType(@PathVariable("blogType") String blogType){
		QblogInfo qBlog = new QblogInfo("blogType");
		BooleanExpression filterByBlogType = qBlog.blogType.eq(blogType);
		List<blogInfo> blogList = (List<blogInfo>) this.BlogListRepository.findAll(filterByBlogType);	
		return blogList;
	}
	
	@GetMapping("/blogNo={blogNumber}")
	public List<blogInfo> getBlogNumber(@PathVariable("blogNumber") String blogNumber){
		QblogInfo qBlog = new QblogInfo("blogNumber");
		BooleanExpression filterByBlogNumber = qBlog.blogNumber.eq(blogNumber);
		List<blogInfo> blogList = (List<blogInfo>) this.BlogListRepository.findAll(filterByBlogNumber);	
		return blogList;
	}

	@PutMapping
	public void insert(@RequestBody blogInfo blog) {
		this.BlogListRepository.insert(blog);
	}
	
	@PostMapping
	public void update(@RequestBody blogInfo blog) {
		this.BlogListRepository.save(blog);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") String id) {
		this.BlogListRepository.delete(id);
	}
	
}
