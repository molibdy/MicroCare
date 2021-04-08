import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BurgerMenuComponent } from './pages/burger-menu/burger-menu.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IntroComponent } from './pages/intro/intro.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { BuscadorRecetasComponent } from './pages/buscador-recetas/buscador-recetas.component';
import { FichaGrupoComponent } from './pages/ficha-grupo/ficha-grupo.component';
import { FichaMicroComponent } from './pages/ficha-micro/ficha-micro.component';
import { PreferenciasComponent } from './pages/preferencias/preferencias.component';
import { HomeComponent } from './pages/home/home.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { VitaminChartComponent } from './pages/vitamin-chart/vitamin-chart.component';
import { MineralChartComponent } from './pages/mineral-chart/mineral-chart.component';
import { AminoacidChartComponent } from './pages/aminoacid-chart/aminoacid-chart.component';
import { OmegasChartComponent } from './pages/omegas-chart/omegas-chart.component';
import { GraficaOthersComponent } from './pages/grafica-others/grafica-others.component';
import { MicronutrientChartComponent } from './pages/micronutrient-chart/micronutrient-chart.component';
import { VistaRecetaComponent } from './pages/vista-receta/vista-receta.component';
import { MicroScoreComponent } from './pages/micro-score/micro-score.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    BurgerMenuComponent,
    CalendarioComponent,
    IntroComponent,
    ConfiguracionComponent,
    BuscadorRecetasComponent,
    FichaGrupoComponent,
    FichaMicroComponent,
    PreferenciasComponent,
    HomeComponent,
    VitaminChartComponent,
    MineralChartComponent,
    AminoacidChartComponent,
    OmegasChartComponent,
    GraficaOthersComponent,
    MicronutrientChartComponent,
    VistaRecetaComponent,
    MicroScoreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
