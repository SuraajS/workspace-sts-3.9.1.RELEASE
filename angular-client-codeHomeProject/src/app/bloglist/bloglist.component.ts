import { StorageService } from '../helper/storage.service';
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
  constructor( private bloglistService: BlogListService,
                private storageService: StorageService) { }

  ngOnInit() {
    this.bloglistService.blogSelected.subscribe(
      (bItem: BlogItem) => {
        this.blogSelect = bItem;
      }
      );
    console.log ('BlogList Componet is getting initiated');
    this.storageService.getAllBlogs();
    console.log ('BlogList Componet is getting completed');
  }


}
