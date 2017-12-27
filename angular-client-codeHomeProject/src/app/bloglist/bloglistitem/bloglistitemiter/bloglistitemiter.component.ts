import { BlogItem } from '../../bloglist.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloglistitemiter',
  templateUrl: './bloglistitemiter.component.html',
  styleUrls: ['./bloglistitemiter.component.css']
})
export class BloglistitemiterComponent implements OnInit {

  @Input() blogItem: BlogItem;
  @Input() index: number;


  ngOnInit() {
  }


}
