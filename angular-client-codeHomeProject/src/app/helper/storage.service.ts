import { BlogItem } from '../bloglist/bloglist.model';
import { BlogListService } from '../bloglist/bloglist.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StorageService {
  private bloglistUrl = 'rest/bloglist/blog';

  constructor(private http: Http,
              private blogListService: BlogListService) {}

  getAllBlogs() {
    this.http.get(this.bloglistUrl).subscribe(
      (response: Response) => {
       const blogItemsFromDB: BlogItem[] = response.json();
        console.log(response);
        console.log(blogItemsFromDB);
        this.blogListService.setDataToBlogItemArr(blogItemsFromDB);
    });
  }


  /* getAllBlogs(): Promise<BlogItem> {
    return this.http.get(this.bloglistUrl)
               .toPromise()
               .then(response => response.json() as BlogItem[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  } */
 }

