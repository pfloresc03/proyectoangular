import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import "@angular/common/locales/global/es"

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarLoteriaComponent } from './componentes/generar-loteria/generar-loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarLoteriaComponent,
    CalculadoraComponent,
    MultiplicarComponent,
    HolaComponent,
    TuberiasComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    CrudComponent,
    RegistroComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
