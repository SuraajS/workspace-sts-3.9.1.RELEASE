import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../bloglist.model';
import { BlogListService } from '../bloglist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bloglistitem',
  templateUrl: './bloglistitem.component.html',
  styleUrls: ['./bloglistitem.component.css']
})
export class BloglistitemComponent implements OnInit {


  blogItems: BlogItem[];

  constructor(private blogListService: BlogListService) { }

  ngOnInit() {
    // Getting Updated Blog items.
    this.blogListService.blogItemModified.subscribe(
      (updatedBlogList: BlogItem[])  => {
        this.blogItems = updatedBlogList;
      }
    );

      // this.blogItems = this.blogListService.getBlogList();
  }


}
