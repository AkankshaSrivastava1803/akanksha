import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './user-list/user-list.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path: "users",component:UsersListComponent},
{path:"emplist", component:EmplistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
