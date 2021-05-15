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
import { HttpClientModule } from '@angular/common/http';
import { ReposDatePipe } from './repos-date.pipe';
import { ToggleReposDirective } from './toggle-repos.directive';

//fontawesome
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    DisplayResultsComponent,
    UserComponent,
    ReposDatePipe,
    ToggleReposDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
