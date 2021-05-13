import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'


import { SearchFormComponent } from '../search-form/search-form.component';
import { DisplayResultsComponent } from '../display-results/display-results.component';


// Defining routes
const routes:Routes=[
  {path:"search-form",component:SearchFormComponent},
  {path:"display-results",component:DisplayResultsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }