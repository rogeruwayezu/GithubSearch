import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DisplayResultsComponent } from './display-results/display-results.component';

// Importing routing modules
import {RoutingModule} from './routing/routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    DisplayResultsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
