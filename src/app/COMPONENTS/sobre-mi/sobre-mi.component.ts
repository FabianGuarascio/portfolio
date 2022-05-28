import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/PAGES/home/home.component';
import { CambioService } from 'src/app/SERVICES/cambio.service';
import { ProyectosdbService } from 'src/app/SERVICES/proyectosdb.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  $container:any
  sobremi:any[]=[]
  listSobreMi: any[] | undefined;
  listDuras: any[] | undefined;
  listBlandas: any[] | undefined;

  constructor( 
    public cambio:CambioService,
    public home:HomeComponent,
    public pdb:ProyectosdbService) { }

  ngOnInit(): void {
    this.pdb.obtenerSobreMi().subscribe(p=>{this.listSobreMi=p})
    this.pdb.obtenerDuras().subscribe(p=>{this.listDuras=p})
    this.pdb.obtenerBlandas().subscribe(p=>{this.listBlandas=p})
    // para pensarlo, necesito que escuche si haycambio es ture o false y luego le ponga blur o se lo quite
    // pero con ngoninit solo puedo conseguir que se fije al inicio
    // talvez deba usar el input() para la comunicacion padre hijo
    this.$container=document.querySelector('.container')
    if(this.cambio.haycambio){
      this.$container.classList.add("blur")
    }else{
      this.$container.classList.remove("blur")
    }
  }

}
