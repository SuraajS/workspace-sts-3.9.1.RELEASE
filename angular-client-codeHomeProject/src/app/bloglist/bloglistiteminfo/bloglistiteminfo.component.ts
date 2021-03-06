import { BlogItemInfo } from '../../helper/blogiteminfo.model';
import { BlogItem } from '../bloglist.model';
import { BlogListService } from '../bloglist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-bloglistiteminfo',
  templateUrl: './bloglistiteminfo.component.html',
  styleUrls: ['./bloglistiteminfo.component.css']
})
export class BloglistiteminfoComponent implements OnInit {

   blogItemInfos: BlogItem;
  id: number;
  activeCodes= ['Yes', 'No'];

  // blogItemInfos: BlogItemInfo[] = [
  // new BlogItemInfo('1', 'Read', 'iPhone 8 Review', 'Technology', 'This is very Great phone and phone of the year 2017',
  //   'https://icdn3.digitaltrends.com/image/iphone-8-update-in-hand-logo-800x533-c.jpg', true),
  // ];

  constructor(private route: ActivatedRoute,
              private blogListService: BlogListService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.blogItemInfos = this.blogListService.getBlogById(this.id);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  getActiveCode() {}
}
