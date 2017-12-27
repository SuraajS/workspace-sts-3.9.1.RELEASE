import { BlogItem } from './bloglist.model';
import { BlogListService } from './bloglist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
})
export class BloglistComponent implements OnInit {

  blogSelect: BlogItem;
  constructor( private bloglistService: BlogListService) { }

  ngOnInit() {
    this.bloglistService.blogSelected.subscribe(
      (bItem: BlogItem) => {
        this.blogSelect = bItem;
      }
      );
  }


}
