import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { ProyectosdbService } from 'src/app/SERVICES/proyectosdb.service';


@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {

  
  name = "Angular " + VERSION.major;
  @ViewChild("titulo")
  titulo!: ElementRef;

  @ViewChild("sub_titulo")
  sub_titulo!: ElementRef;

  @ViewChild("descripcion")
  descripcion!: ElementRef;

  @ViewChild("url_imagen")
  url_imagen!: ElementRef;

  @ViewChild("url_proyecto")
  url_proyecto!: ElementRef;

  @ViewChild("id")
  id!: ElementRef;

  @ViewChild("habilidadDura")
  habilidadDura!: ElementRef;
  @ViewChild("dominio")
  dominio!: ElementRef;
  @ViewChild("idDura")
  idDura!: ElementRef;

  @ViewChild("habilidadBlanda")
  habilidadBlanda!: ElementRef;
  @ViewChild("nivel")
  nivel!: ElementRef;
  @ViewChild("idBlanda")
  idBlanda!: ElementRef;

  @ViewChild("sobreMi")
  sobreMi!: ElementRef;

  @ViewChild("idSobreMi")
  idSobreMi!: ElementRef;


  token=localStorage.getItem('token')
  
  lists: any[] | undefined;
  listDuras: any[] | undefined;
  listBlandas: any[] | undefined;
  listSobreMi: any[] | undefined;


  constructor(
    public pdb: ProyectosdbService) { }
  
    
  ngOnInit(): void {
   this.pdb.obtener().subscribe(p=>{this.lists=p;})
   this.pdb.obtenerDuras().subscribe(p=>{this.listDuras=p})
   this.pdb.obtenerBlandas().subscribe(p=>{this.listBlandas=p})
   this.pdb.obtenerSobreMi().subscribe(p=>{this.listSobreMi=p})
  }


  crear(){
    let proyecto={
      titulo:this.titulo?.nativeElement.value,
      sub_titulo:this.sub_titulo?.nativeElement.value,
      descripcion:this.descripcion?.nativeElement.value,
      url_imagen:this.url_imagen?.nativeElement.value,
      url_proyecto:this.url_proyecto?.nativeElement.value,
      id:this.id?.nativeElement.value
    }
    let pstring= JSON.stringify(proyecto)
    this.pdb.crear(pstring).subscribe(data=>{
      location.reload()
    })
  }

  crearDura(){
    let dura={
      habilidad:this.habilidadDura?.nativeElement.value,
      dominio:this.dominio?.nativeElement.value,
      id:this.idDura?.nativeElement.value
    }
    let pstring= JSON.stringify(dura)
    this.pdb.crearDura(pstring).subscribe(data=>{
      location.reload()
    })
  }
  crearBlanda(){
    let blanda={
      habilidad:this.habilidadBlanda?.nativeElement.value,
      nivel:this.nivel?.nativeElement.value,
      id:this.idBlanda?.nativeElement.value
    }
    let pstring= JSON.stringify(blanda)
    this.pdb.crearBlanda(pstring).subscribe(data=>{
      location.reload()
    })
  }

  crearSobreMi(){
    let sobreMi={
      sobremi:this.sobreMi?.nativeElement.value,
      id:this.idSobreMi?.nativeElement.value
    }
    let pstring= JSON.stringify(sobreMi)
    this.pdb.crearSobreMi(pstring).subscribe(data=>{
      location.reload()
    })
  }

  modificar(item:any){
    this.id.nativeElement.value=item.id;
    this.titulo.nativeElement.value=item.titulo;
    this.sub_titulo.nativeElement.value=item.sub_titulo;
    this.descripcion.nativeElement.value=item.descripcion;
    this.url_imagen.nativeElement.value=item.url_imagen;
    this.url_proyecto.nativeElement.value=item.url_proyecto;
  }
  modificarDura(item:any){
    this.habilidadDura.nativeElement.value=item.habilidad,
    this.dominio.nativeElement.value=item.dominio,
    this.idDura.nativeElement.value=item.id
  }
  modificarBlanda(item:any){
    this.habilidadBlanda.nativeElement.value=item.habilidad,
    this.nivel.nativeElement.value=item.nivel,
    this.idBlanda.nativeElement.value=item.id
  }

  modificarSobreMi(item:any){
    this.sobreMi.nativeElement.value=item.sobremi,
    this.idSobreMi.nativeElement.value=item.id
  }

  borrar(id:any){
    this.pdb.borrar(id).subscribe(data=>{
      location.reload()
    })
  }

  borrarDura(id:Number){
    this.pdb.borrarDura(id).subscribe(data=>{
      location.reload()
    })
  }
  borrarBlanda(id:Number){
    this.pdb.borrarBlanda(id).subscribe(data=>{
      location.reload()
    })
  }
  borrarSobreMi(id:Number){
    this.pdb.borrarSobreMi(id).subscribe(data=>{
      location.reload()
    })
  }

}
