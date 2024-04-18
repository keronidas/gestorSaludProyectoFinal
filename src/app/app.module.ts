import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './Pages/auth-layout/auth-layout.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { CommonModule } from '@angular/common';
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
import { PacienteViewComponent } from './Pages/paciente-view/paciente-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormatoFechaPipe } from './Pipes/formato-fecha.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MonedaPipe } from './Pipes/moneda.pipe';
import { ProfesionalesComponent } from './Pages/profesionales/profesionales.component';
import { ProfesionalViewComponent } from './Pages/profesional-view/profesional-view.component';
import { FechaYHoraPipe } from './Pipes/fecha-yhora.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    CalendarioComponent,
    DashboardComponent,
    FacturasComponent,
    FacturaViewComponent,
    FormatoFechaPipe,
    LayoutComponent,
    LoginPageComponent,
    MaterialComponent,
    MonedaPipe,
    NewFacturaComponent,
    NewMaterialComponent,
    NewPacienteComponent,
    NewProfesionalComponent,
    NewSalaTratamientoComponent,
    NewSesionComponent,
    PacientesComponent,
    PacienteViewComponent,
    ProfesionalesComponent,
    ProfesionalViewComponent,
    FechaYHoraPipe
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
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    provideAnimationsAsync(),
    MonedaPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
