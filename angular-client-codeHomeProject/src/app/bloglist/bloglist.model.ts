export class BlogItem {
  public blogTitle: String;
  public content: String;
  public imagePath: String;
  public bgenre: String;
  public blogType: String;
  public bnumber: String;
  public isActive: boolean;


  constructor(name: String, content: String, imagePath: String,
    bgenre: String, btype: String, bnumber: String, isActive: boolean ) {
    this.blogTitle = name;
    this.content = content;
    this.imagePath = imagePath;
    this.bnumber = bnumber;
    this.bgenre = bgenre;
    this.blogType = btype;
    this.isActive = isActive;
  }
}
