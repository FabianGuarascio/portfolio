import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosdbService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  rutaheroku="https://portfolio-argentina-program.herokuapp.com/"

  //local
  rutageneral="http://192.168.0.248:8080/"
  rutalocal="http://192.168.0.248:8080/api/proyectos"
  rutacrearlocal="http://192.168.0.248:8080/api/proyectos/crear"
  rutaborrarlocal="http://192.168.0.248:8080/api/proyectos/"
  
  rutaHabilidadesBlandas= this.rutaheroku+"api/habilidadesBlandas/"
  rutaHabilidadesDuras= this.rutaheroku+"api/habilidadesDuras/"
  rutaSobremi= this.rutaheroku+"api/sobremi/"




  
  
  //heroku
  ruta= this.rutaheroku+ "api/proyectos"
  rutaborrar= this.rutaheroku+ "api/proyectos/"
  rutacrear= this.rutaheroku+ "api/proyectos/crear"



  constructor(private http: HttpClient) { }

  obtener():Observable<any>{
    return this.http.get<any>(this.ruta)
  }
  obtenerDuras():Observable<any>{
    return this.http.get<any>(this.rutaHabilidadesDuras)
  }
  obtenerBlandas():Observable<any>{
    return this.http.get<any>(this.rutaHabilidadesBlandas)
  }
  obtenerSobreMi():Observable<any>{
    return this.http.get<any>(this.rutaSobremi)
  }
  crear(objeto:any):Observable<any>{
    return this.http.post(this.rutacrear, objeto, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  crearDura(objeto:any):Observable<any>{
    return this.http.post(this.rutaHabilidadesDuras+"crear", objeto, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  crearBlanda(objeto:any):Observable<any>{
    return this.http.post(this.rutaHabilidadesBlandas+"crear", objeto, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  crearSobreMi(objeto:any):Observable<any>{
    return this.http.post(this.rutaSobremi+"crear", objeto, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }

  borrar(id:any):Observable<any>{
    return this.http.delete(this.rutaborrar + id, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  borrarDura(id:any):Observable<any>{
    return this.http.delete(this.rutaHabilidadesDuras + id, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  borrarBlanda(id:any):Observable<any>{
    return this.http.delete(this.rutaHabilidadesBlandas + id, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
  borrarSobreMi(id:any):Observable<any>{
    return this.http.delete(this.rutaSobremi + id, {headers :{'Content-Type': 'application/json','Authorization': localStorage['token']}})
  }
}
