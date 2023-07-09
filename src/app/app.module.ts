import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SobreMiComponent } from './COMPONENTS/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './COMPONENTS/proyectos/proyectos.component';
import { ContactoComponent } from './COMPONENTS/contacto/contacto.component';
import { HomeComponent } from './PAGES/home/home.component';
import { PageNotFoundComponent } from './PAGES/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { HttpClientModule } from '@angular/common/http';
import { CloudsComponent } from './COMPONENTS/clouds/clouds.component';
@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    HomeComponent,
    PageNotFoundComponent,
    CloudsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
