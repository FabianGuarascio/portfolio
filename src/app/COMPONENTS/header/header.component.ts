import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  token=localStorage.getItem('token')
  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/home'])
  }
}
