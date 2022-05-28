import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/PAGES/home/home.component';
import { CambioService } from 'src/app/SERVICES/cambio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public home:HomeComponent, public cambio:CambioService) { }

  ngOnInit(): void {
  }

}
