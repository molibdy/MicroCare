import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerMenuComponent } from './pages/burger-menu/burger-menu.component';
import { BuscadorRecetasComponent } from './pages/buscador-recetas/buscador-recetas.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { FichaGrupoComponent } from './pages/ficha-grupo/ficha-grupo.component';
import { FichaMicroComponent } from './pages/ficha-micro/ficha-micro.component';
import { HomeComponent } from './pages/home/home.component';
import { IngestaMenuComponent } from './pages/ingesta-menu/ingesta-menu.component';
import { IntroducirManualComponent } from './pages/ingestaComponentes/introducir-manual/introducir-manual.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'dia', component:CalendarioComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:BurgerMenuComponent},
  {path:'home/grupo', component:FichaGrupoComponent},
  {path:'buscar-receta', component:BuscadorRecetasComponent},
  {path:'home/configuracion', component:ConfiguracionComponent},
  {path:'home/grupo/micro',component:FichaMicroComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path:'manual', component:IntroducirManualComponent},
  {path:'anadir', component:IngestaMenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
