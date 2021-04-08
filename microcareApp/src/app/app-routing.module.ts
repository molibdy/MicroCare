import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AminoacidChartComponent } from './pages/aminoacid-chart/aminoacid-chart.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'calendario', component:CalendarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
