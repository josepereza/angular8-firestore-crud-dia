import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  // Crea un nuevo Elemento
  public createElemento(data: any) {
    return this.firestore.collection('usuarios').add(data);
  }

  // Obtiene un Elemento
  public getElemento(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).snapshotChanges();
  }

  // Obtiene todos los elementos
  public getElementos() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  // Actualiza un Elementos
  public updateElemento(documentId: string, data: any) {
    return this.firestore.collection('usuarios').doc(documentId).set(data);
  }

  // Borra un Item
  public deleteElemento(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).delete();
  }

}
