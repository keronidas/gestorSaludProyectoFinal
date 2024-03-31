import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './Pages/auth-layout/auth-layout.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './Pages/configuracion/configuracion.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FacturasComponent } from './Pages/facturas/facturas.component';
import { FacturaViewComponent } from './Pages/factura-view/factura-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialComponent } from './Pages/material/material.component';
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
import { NewFacturaComponent } from './Components/new-factura/new-factura.component';
import { NewMaterialComponent } from './Components/new-material/new-material.component';
import { NewPacienteComponent } from './Components/new-paciente/new-paciente.component';
import { NewProfesionalComponent } from './Components/new-profesional/new-profesional.component';
import { NewSalaTratamientoComponent } from './Components/new-sala-tratamiento/new-sala-tratamiento.component';
import { NewSesionComponent } from './Components/new-sesion/new-sesion.component';
import { PacientesComponent } from './Pages/pacientes/pacientes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';




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
    FacturaViewComponent,


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
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
