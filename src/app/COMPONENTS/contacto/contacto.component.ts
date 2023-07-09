import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  @Output() closeWindowEvent = new EventEmitter<void>();

  close(){
    this.closeWindowEvent.emit();
  }
}
