import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { AuthLayoutComponent } from './Pages/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialComponent } from './Pages/material/material.component';
import { FacturasComponent } from './Pages/facturas/facturas.component';
import { ConfiguracionComponent } from './Pages/configuracion/configuracion.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './Pages/pacientes/pacientes.component';
import { NewPacienteComponent } from './Components/new-paciente/new-paciente.component';
import { NewMaterialComponent } from './Components/new-material/new-material.component';
import { NewProfesionalComponent } from './Components/new-profesional/new-profesional.component';
import { NewSalaTratamientoComponent } from './Components/new-sala-tratamiento/new-sala-tratamiento.component';
import { NewFacturaComponent } from './Components/new-factura/new-factura.component';
import { NewSesionComponent } from './Components/new-sesion/new-sesion.component';
import { FacturaViewComponent } from './Pages/factura-view/factura-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    MaterialComponent,
    FacturasComponent,
    ConfiguracionComponent,
    CalendarioComponent,
    DashboardComponent,
    PacientesComponent,
    NewPacienteComponent,
    NewMaterialComponent,
    NewProfesionalComponent,
    NewSalaTratamientoComponent,
    NewFacturaComponent,
    NewSesionComponent,
    FacturaViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
