import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {
  public inputText:string = ""
  public foco:boolean = false
  public coincidencia:string[] = ['','Hey como estas',"adios amigo","sss","dd"]
  public imageProfile:string = 'https://media-exp1.licdn.com/dms/image/C5603AQHgQm5806sx2A/profile-displayphoto-shrink_200_200/0/1541434175803?e=1621468800&v=beta&t=MOKmnJRHHZuVXWS2uTrRQvfKVEl3nVDhvMssTmYw79o'
  public desplegable1: boolean = false
  public desplegable2: boolean = false
  public desplegable3: boolean = false
  public desplegable4: boolean = false
  public chip1:string ="chip-grande"
  public chip2:string ="chip-grande"
  constructor() {
  this.desplegable1
  this.desplegable2
  this.desplegable3
  this.desplegable4
  this.chip1
  this.chip2
}
  pulsar1(){
    if(this.desplegable1){
    this.desplegable1=false
    }
    else{
      this.desplegable1 =true
    }
   }

   pulsar4(){
    if(this.desplegable4){
    this.desplegable4=false
    }
    else{
      this.desplegable4 =true
    }
   }

   pulsar2(){
    if(this.desplegable2){
    this.desplegable2=false
    }
    else{
      this.desplegable2 =true
    }
   }

   pulsar3(){
    if(this.desplegable3){
    this.desplegable3=false
    }
    else{
      this.desplegable3 =true
    }
   }

   azul1(){
    if(this.chip1 == "chip-grande"){
    this.chip1 = "chip-grande-azul"
    }
    else {
      this.chip1 ="chip-grande"
    }
   }

   azul2(){
    if(this.chip2 == "chip-grande"){
    this.chip2 = "chip-grande-azul"
    }
    else {
      this.chip2 ="chip-grande"
    }
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
