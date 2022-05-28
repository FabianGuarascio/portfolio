import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  token=localStorage.getItem('token')
  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    location.reload()
  }
}
