import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
  public busqueda:string = ""

  constructor() {
   }
  ngOnInit(): void {
    console.log(this.busqueda);
    
  }

}
