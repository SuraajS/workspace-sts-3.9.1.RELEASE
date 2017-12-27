import { BlogItem } from './bloglist.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class BlogListService {
    blogItemModified = new Subject<BlogItem[]>();
    blogSelected = new EventEmitter<BlogItem>();

   private blogItems: BlogItem[] = [
   new BlogItem('iPhone X Review', 'An Comprehensive review for the best phone of 2017',
      'https://icdn3.digitaltrends.com/image/iphone-8-update-in-hand-logo-800x533-c.jpg',
    'Technology', 'Read', '1', true),

   new BlogItem('Should I Invest in BitCoin- Podcast', 'The New Money Making machine',
     'https://bitcoin.org/img/icons/opengraph.png',
    'Finance', 'Hear', '2', true),

   new BlogItem('Bahubali 2 - The Conclusion Review', 'The latest iteration review of the Bahubali franchise',
     'https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SX385_.jpg',
    'Movies', 'Watch', '3', true)
 ];

  getBlogList() {
    return this.blogItems.slice();
  }

  getBlogById(blogId: number) {
    return this.blogItems[blogId];
  }

  addBlog(blogItem: BlogItem) {
    this.blogItems.push(blogItem);
    this.blogItemModified.next(this.blogItems.slice());
   }

  updateBlog(index: number, blogItem: BlogItem) {
    this.blogItems[index] = blogItem;
    this.blogItemModified.next(this.blogItems.slice());
  }

  deleteBlog(index: number, blogItem: BlogItem) {
    this.blogItems.splice(index, 1);
    this.blogItemModified.next(this.blogItems.slice());
  }
}