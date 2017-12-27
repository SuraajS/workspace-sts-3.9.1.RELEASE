export class BlogItem {
  public name: String;
  public content: String;
  public imagePath: String;
  public bgenre: String;
  public btype: String;
  public bnumber: String;
  public isActive: boolean;


  constructor(name: String, content: String, imagePath: String, bgenre: String, btype: String, bnumber: String, isActive: boolean ) {
    this.name = name;
    this.content = content;
    this.imagePath = imagePath;
    this.bnumber = bnumber;
    this.bgenre = bgenre;
    this.btype = btype;
    this.isActive = isActive;
  }
}