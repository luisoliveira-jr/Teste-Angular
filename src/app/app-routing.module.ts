import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserNewComponent } from './components/user-new/user-new.component';

const routes: Routes = [
  { path:'', component: UsersListComponent},
  { path:'app-user-view/:id', component: UserViewComponent},
  { path:'app-user-new', component: UserNewComponent},
  { path:'app-user-update/:id', component: UserUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
