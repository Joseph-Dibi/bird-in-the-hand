import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AviaryComponent } from './aviary/aviary.component';
import { LoginComponent } from './login/login.component';
import { NestComponent } from './nest/nest.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'aviary', component: AviaryComponent },
  { path: 'nest', component: NestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Wildcard route for undefined paths
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
