import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoredbService {
  
  proyectos: Observable<any[]>;
  mi: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.proyectos = firestore.collection('proyectos').valueChanges();
    this.mi = firestore.collection('sobremi').valueChanges();
    



  }
}
