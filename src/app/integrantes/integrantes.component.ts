import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.js'; 


@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent {
   
   

   personajes:Personaje[]=[
    {"nombre":"fher olvera","edad":45,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/mana1.jpg?alt=media&token=f3650a34-bcea-42c4-a3e2-291134c1f42d"},
    {"nombre":"camilo","edad":50,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/mana2.jpg?alt=media&token=e335c1cb-98f6-417d-9983-d765d65505f2"},
    {"nombre":"berlin","edad":40,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/mana3.jpg?alt=media&token=af0acbeb-d956-4098-95c7-8fa128ca2ce4"},
    {"nombre":"carlos","edad":53,"foto":"https://firebasestorage.googleapis.com/v0/b/molinatiendatcc.appspot.com/o/mana4.jpg?alt=media&token=5e95fff9-8336-416a-9ce3-0319fd93ec12"}

   ];

  constructor() { }

 

}
