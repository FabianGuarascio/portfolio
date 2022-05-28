import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  haycambio:boolean=false
  constructor() { }

  cambio(elemento:any){
    elemento.classList.add("cambio")
    this.haycambio=true
  }
  quitar(elemento:any){
    elemento.classList.remove("cambio")
    this.haycambio=false
  }
}
