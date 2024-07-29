import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent},
  { path: '**', redirectTo: '/users' }  // Wildcard route for a 404 page
];
