import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SobreMiComponent } from './COMPONENTS/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './COMPONENTS/proyectos/proyectos.component';
import { ContactoComponent } from './COMPONENTS/contacto/contacto.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { PageNotFoundComponent } from './PAGES/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from "./shared/services/auth.service";

import { SignInComponent } from './COMPONENTS/sign-in/sign-in.component';
import { NuevoComponent } from './COMPONENTS/nuevo/nuevo.component';
import { PosteosComponent } from './PAGES/posteos/posteos.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './COMPONENTS/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignInComponent,
    NuevoComponent,
    PosteosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
