import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-receta',
  templateUrl: './vista-receta.component.html',
  styleUrls: ['./vista-receta.component.css']
})
export class VistaRecetaComponent implements OnInit {
  public nombre:string;
  public ingredientes:object[];
  public pasos:string;
  public imgUrl:string;
  public microscore:string[]
  constructor() { 
    this.nombre='Pollo con almendras'
    this.imgUrl="https://carneentucasa.com/archivos/Noticias/983.jpg"
    this.ingredientes=[
      {cantidad: '3', unidad: 'pechugas', nombre:'pollo'},
      {cantidad: '100', unidad: 'gr', nombre:'almendras'},
      {cantidad: '1', unidad: 'ud', nombre:'cebolla grande'},
      {cantidad: '3', unidad: 'cucharadas', nombre:'aceite de oliva'}
    ]
    this.pasos=`Corta el pollo en dados, del tamaño de un bocado. 
    <br> Ponlos en un bol y añade la salsa de soja, el azúcar y el jengibre en polvo. 
    <br> Mézclalo todo bien, para que el pollo se macere y aromatice. 
    <br> Tapa el bol e introdúcelo en la nevera, al menos durante media hora, mientras preparas el resto de la receta.
    <br> En una sartén a fuego medio-fuerte, pon un poco de aceite y saltea las almendras, hasta que se doren ligeramente. Resérvalas.`
  }

public addToDay(){
  //Añade el id de la receta a la tabla de RecetasPlaneadas
}

  ngOnInit(): void {

    // Tiene que haber un microscoreService que recibe los datos del microscore 
    // de la receta y es accedido por el componente microscoreChart
  }

}
