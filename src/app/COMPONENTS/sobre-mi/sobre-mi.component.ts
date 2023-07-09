import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  @Output() closeWindowEvent = new EventEmitter<void>();
  close(){
    this.closeWindowEvent.emit();
  }
}
