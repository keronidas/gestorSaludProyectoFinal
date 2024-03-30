import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { PacientesComponent } from './Pages/pacientes/pacientes.component';
import { ProfesionalesComponent } from './Pages/profesionales/profesionales.component';
import { SalasTratamientoComponent } from './Pages/salas-tratamiento/salas-tratamiento.component';
import { MaterialComponent } from './Pages/material/material.component';
import { FacturasComponent } from './Pages/facturas/facturas.component';
import { ConfiguracionComponent } from './Pages/configuracion/configuracion.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

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
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'pacientes', component: PacientesComponent, pathMatch: 'full' },
      { path: 'profesionales', component: ProfesionalesComponent, pathMatch: 'full' },
      { path: 'salas-tratamiento', component: SalasTratamientoComponent, pathMatch: 'full' },
      { path: 'calendario', component: CalendarioComponent, pathMatch: 'full' },
      { path: 'material', component: MaterialComponent, pathMatch: 'full' },
      { path: 'facturas', component: FacturasComponent, pathMatch: 'full' },
      { path: 'configuracion', component: ConfiguracionComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ]
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
