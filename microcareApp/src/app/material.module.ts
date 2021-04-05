// Material Module example.
 // All other Angular Material component imports here
 // but the important ones are…
 import { NgModule } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

const materialModules = [
  MatIconModule
];

@NgModule({
   declarations: [],
   imports: [
     // Other material imports removed for brevity,
     MatIconModule,
     materialModules
       ],
   exports: [
     // Other material exports removed for brevity,
     materialModules,
     
   ],
   entryComponents: [],
   providers: [MatIconRegistry]
 })
 export class MaterialModule {}
