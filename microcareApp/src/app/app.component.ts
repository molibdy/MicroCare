import { MatIconRegistry } from '@angular/material/icon';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer : DomSanitizer
  )
  {
/*    //////////////////// CREAR ICONOS //////////////////////// */

    this.matIconRegistry.addSvgIcon("grafica",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/spreadsheet-app.svg"));
    this.matIconRegistry.addSvgIcon("boton-anadir",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/boton-Anadir-Ingesta.svg"));
    this.matIconRegistry.addSvgIcon("calendario",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/calendar.svg"));
    this.matIconRegistry.addSvgIcon("search",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/buscar.svg"));
    this.matIconRegistry.addSvgIcon("recipes",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/chef.svg"));
    this.matIconRegistry.addSvgIcon("settings",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/settings.svg"));
    this.matIconRegistry.addSvgIcon("reto",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/retos.svg"));


    this.matIconRegistry.addSvgIcon("search",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/vidrio-de-aumento.svg"));
    this.matIconRegistry.addSvgIcon("close",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/close.svg"));
    this.matIconRegistry.addSvgIcon("configuracion",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/configuraciones.svg"));
    this.matIconRegistry.addSvgIcon("burger",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/hamburguesa.svg"));
    this.matIconRegistry.addSvgIcon("flecha-desplegable",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/right-arrow.svg"));


  }
  
  title = 'microcareApp';
}
