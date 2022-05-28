import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/PAGES/home/home.component';
import { CambioService } from 'src/app/SERVICES/cambio.service';
import { FirestoredbService } from 'src/app/SERVICES/firestoredb.service';
import { ProyectosdbService } from 'src/app/SERVICES/proyectosdb.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  lists: any[] | undefined;

  constructor(
    public home:HomeComponent,
    public cambio:CambioService,
    public db:FirestoredbService,
    public pdb: ProyectosdbService
  ) {}

  

  ngOnInit(): void {
   this.pdb.obtener().subscribe(p=>{
     this.lists=p;
      console.log(p)
    })
  }

}
