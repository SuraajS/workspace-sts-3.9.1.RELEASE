import { AppRoutingModule } from './app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard-header/header.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogListService } from './bloglist/bloglist.service';
import { BloglistitemComponent } from './bloglist/bloglistitem/bloglistitem.component';
import { BloglistiteminfoComponent } from './bloglist/bloglistiteminfo/bloglistiteminfo.component';
import { ProfperfComponent } from './profperf/profperf.component';
import { BloglistitemiterComponent } from './bloglist/bloglistitem/bloglistitemiter/bloglistitemiter.component';
import { BloglistitemdefaultComponent } from './bloglist/bloglistitemdefault/bloglistitemdefault.component';
import { DropDownDirective } from './helper/dropdown.directive';
import { BloglistitemcrudopComponent } from './bloglist/bloglistitemcrudop/bloglistitemcrudop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContinuedPipe } from './helper/pipe/continued.pipe';
import { FilterPipe } from './helper/pipe/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BloglistComponent,
    BloglistitemComponent,
    BloglistiteminfoComponent,
    BloglistitemdefaultComponent,
    ProfperfComponent,
    BloglistitemiterComponent,
    DropDownDirective,
    BloglistitemcrudopComponent,
    ContinuedPipe,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
