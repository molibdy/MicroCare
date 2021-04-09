import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public favoritos:object[]  = [{nombre: "Desayuno", score: "A,B,B", class: 'gradientOG'},{nombre: "Merienda", score: "A,B,B",class: 'gradientGO'},{nombre: "Cena", score: "A,B,B",class: 'gradientOG'},{nombre: "Pan tumaca", score: "A,B,B",class: 'gradientPG'}]

  constructor() { }

  ngOnInit(): void {
  }
  anadirFavorito()
  {
    
  }


}
