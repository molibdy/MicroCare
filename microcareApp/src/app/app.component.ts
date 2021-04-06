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
/*     this.matIconRegistry.addSvgIcon("home",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headphone.svg")); */
    this.matIconRegistry.addSvgIcon("grafica",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/spreadsheet-app.svg"));
    this.matIconRegistry.addSvgIcon("boton-anadir",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/boton-Anadir-Ingesta.svg"));
    this.matIconRegistry.addSvgIcon("calendario",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/calendar.svg"));


  }
  
  title = 'microcareApp';
}
