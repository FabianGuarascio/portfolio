import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  @ViewChild("userName")
  userName!: ElementRef;
  @ViewChild("userPassword")
  userPassword!: ElementRef;
  ngOnInit(): void {
  }
  async iniciarSesion() {
    let datos = {
                email:"",
                password:""
              };
    datos.email = this.userName?.nativeElement.value;
    datos.password = this.userPassword?.nativeElement.value;
  
    const request = await fetch('https://portfolio-argentina-program.herokuapp.com/api/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    const respuesta = await request.text();
    console.log(respuesta)
    if (respuesta != 'FAIL') {
      localStorage['token'] = respuesta;
      localStorage['email'] = datos.email;
      this.router.navigate(['/posteos'])
    } else {
      alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
    }
  }
}
