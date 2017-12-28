package io.codeHomeProject.blogList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "BlogInfo")
public class blogInfo {

	@Id
	private String id;
	private String blogNumber;
 	private String blogType;
 	private String blogTitle;
 	private String blogGenre;
 	private String blogContent;
 	private String imagePath;
 	private boolean isActive;


 	public blogInfo() {
		
	}
 	
 	
	public blogInfo(String blogNumber, String blogType, String blogTitle, String blogGenre, String blogContent, String imagePath, boolean isActive) {
		this.blogNumber = blogNumber;
		this.blogType = blogType;
		this.blogTitle = blogTitle;
		this.blogGenre = blogGenre;
		this.blogContent = blogContent;
		this.imagePath = imagePath;
		this.isActive = isActive;

	}
	
 	
	public String getId() {
		return id;
	}

	public String getBlogNumber() {
		return blogNumber;
	}


	public String getBlogType() {
		return blogType;
	}

	public String getBlogTitle() {
		return blogTitle;
	}

	public String getBlogGenre() {
		return blogGenre;
	}

	public String getBlogContent() {
		return blogContent;
	}

	public String getImagePath() {
		return imagePath;
	}

	public boolean isActive() {
		return isActive;
	}



}
