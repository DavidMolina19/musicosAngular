import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopService {

 uri:string= "https://servercomfama.herokuapp.com/viajescomfama/habitaciones"

  constructor(public peticion:HttpClient) {
    console.log("arranque a escuchar el servicio")
   }

   buscar():Observable<any>{
    return this.peticion.get(this.uri)

   }
}
