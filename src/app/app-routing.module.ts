import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { PageNotFoundComponent } from './PAGES/page-not-found/page-not-found.component';
import { PosteosComponent } from './PAGES/posteos/posteos.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"posteos",component:PosteosComponent},

  
  {path:"**",component:PageNotFoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
