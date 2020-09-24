import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { AuthGuard} from './shared/guard';


const routes: Routes = [
  {path: '', loadChildren: () => import('../app/layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  {path: 'forgot', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
