import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent , canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
  //{ path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
