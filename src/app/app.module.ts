import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './user-list/user-list.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AppRoutingModule } from './app-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent,
    EmplistComponent,
    AddemployeeComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
