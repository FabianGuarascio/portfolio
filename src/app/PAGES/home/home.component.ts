import { Component, ElementRef, HostListener } from '@angular/core';
import { filter, fromEvent, tap } from 'rxjs';
import { Card } from 'src/app/TYPES/card.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  cardToShow: Card | null = null

  addClassToShow(card: Card | null){
    this.cardToShow = card
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault();
      this.cardToShow === 'about-me' ? this.addClassToShow(null) : this.addClassToShow('about-me')
    } else if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
      this.cardToShow === 'projects' ? this.addClassToShow(null) : this.addClassToShow('projects')
    } else if (event.ctrlKey && event.key === 'c') {
      event.preventDefault();
      this.cardToShow === 'contact' ? this.addClassToShow(null) : this.addClassToShow('contact')
    } else if( event.key === 'Escape'){
      this.addClassToShow(null)
    }
  }

}
