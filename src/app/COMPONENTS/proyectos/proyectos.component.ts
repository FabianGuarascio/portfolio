import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { projectsList } from './projectsList';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  @Output() closeWindowEvent = new EventEmitter<void>();
  public lists = projectsList;

  close(){
    this.closeWindowEvent.emit();
  }

}
