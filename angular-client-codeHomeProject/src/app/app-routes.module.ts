import { BloglistComponent } from './bloglist/bloglist.component';
import { BloglistitemiterComponent } from './bloglist/bloglistitem/bloglistitemiter/bloglistitemiter.component';
import { BloglistitemcrudopComponent } from './bloglist/bloglistitemcrudop/bloglistitemcrudop.component';
import { BloglistitemdefaultComponent } from './bloglist/bloglistitemdefault/bloglistitemdefault.component';
import { BloglistiteminfoComponent } from './bloglist/bloglistiteminfo/bloglistiteminfo.component';
import { ProfperfComponent } from './profperf/profperf.component';

import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const aRoute: Routes = [
  {path: '', redirectTo: '/bloglist', pathMatch: 'full'},
  {path: 'bloglist', component: BloglistComponent, children: [
    {path: '', component: BloglistitemdefaultComponent },
    {path: 'createNew', component: BloglistitemcrudopComponent },
    {path: ':id', component: BloglistiteminfoComponent },
    {path: ':id/edit', component: BloglistitemcrudopComponent },
  ] },
  {path: 'profile', component: ProfperfComponent },
];

@NgModule ({
  imports: [RouterModule.forRoot(aRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
