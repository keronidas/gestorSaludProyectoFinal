import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LayoutComponent } from './Pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
