export class BlogItemInfo {
  public blogNumber: String;
  public blogType: String;
  public blogTitle: String;
  public blogGenre: String;
  public blogContent: String;
  public imagePath: String;
  public isActive: boolean;

  constructor(blogNumber: String, blogType: String, blogTitle: String, blogGenre: String, blogContent: String,
              imagePath: String, isActive: boolean) {
    this.blogNumber = blogNumber;
    this.blogType = blogType;
    this.blogGenre = blogGenre;
    this.blogContent = blogContent;
    this.imagePath = imagePath;
    this.isActive = isActive;
    this.blogTitle = blogTitle;

  }
}


