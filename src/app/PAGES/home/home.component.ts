import { Component, OnInit } from '@angular/core';
import { CambioService } from 'src/app/SERVICES/cambio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  $sobremi:any 
  $proyectos:any 
  $contacto:any 
  clase:String = "cambio"
  constructor( public cambio:CambioService) { }

  ngOnInit(): void {
    this.$sobremi= document.getElementById("sobreMi")
    this.$proyectos= document.getElementById("proyectos")
    this.$contacto= document.getElementById("contacto")
  }
  
//  Pensar como mejorar la funcion de cambio de clase
  cambioSobreMi(){
    this.$sobremi.classList.toggle(this.clase)
    this.$proyectos.classList.remove(this.clase)
    this.$contacto.classList.remove(this.clase)
  }
  cambioProyectos(){
    this.$proyectos.classList.toggle(this.clase)
    this.$sobremi.classList.remove(this.clase)
    this.$contacto.classList.remove(this.clase)
  }
  cambioContacto(){
    this.$contacto.classList.toggle(this.clase)
    this.$sobremi.classList.remove(this.clase)
    this.$proyectos.classList.remove(this.clase)
  }

}
