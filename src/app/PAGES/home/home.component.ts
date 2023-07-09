import { Component } from '@angular/core';
import { Card } from 'src/app/TYPES/card.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  cardToShow: Card | null = null


  addClassToShow(card: Card){
    this.cardToShow = card
  }

}
