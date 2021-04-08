// Material Module example.
 // All other Angular Material component imports here
 // but the important ones are…
 import { NgModule } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {startWith} from 'rxjs/operators';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



const materialModules = [
  MatIconModule
];

@NgModule({
   declarations: [],
   imports: [
     // Other material imports removed for brevity,
     MatIconModule,
     materialModules,
     MatInputModule,
     MatFormFieldModule,
     MatAutocompleteModule

       ],
   exports: [
     // Other material exports removed for brevity,
     materialModules,
     MatInputModule,
     MatFormFieldModule,
     MatAutocompleteModule
     

     
   ],
   entryComponents: [],
   providers: [MatIconRegistry]
 })
 export class MaterialModule {}
