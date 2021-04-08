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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import {  SwiperOptions } from 'swiper';
import { IntroComponent } from './pages/intro/intro.component';
import { IngestaMenuComponent } from './pages/ingesta-menu/ingesta-menu.component';
import { IntroducirManualComponent } from './pages/ingestaComponentes/introducir-manual/introducir-manual.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    BurgerMenuComponent,
    CalendarioComponent,
    IntroComponent,
    IngestaMenuComponent,
    IntroducirManualComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SwiperModule,
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
    MatAutocompleteModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
