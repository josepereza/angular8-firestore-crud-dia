import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { Elemento } from '../../models/elemento';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public documentId = null;
  public elementos = [];
  public currentStatus = 1;
  public newElementoForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    ficheros: new FormControl(''),
    componentes: new FormControl(''),
    programas: new FormControl(''),
    id: new FormControl('')
  });
  // check: boolean = true

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.newElementoForm.setValue({
      id: '',
      usuario: '',
      ficheros: '',
      componentes: '',
      programas: ''
    });
    this.firestoreService.getElementos().subscribe((elementosSnapshot) => {
      this.elementos = [];
      elementosSnapshot.forEach((elementoData: any) => {
        this.elementos.push({
          id: elementoData.payload.doc.id,
          data: elementoData.payload.doc.data()
        });
      });
    });
  }

  ngOnDestroy() { }

  public newElemento(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus === 1) {
      const data = {
        usuario: form.usuario,
        ficheros: form.ficheros,
        componentes: form.componentes,
        programas: form.programas
      };
      this.firestoreService.createElemento(data).then(() => {
        console.log('Documento creado.');
        this.newElementoForm.setValue({
          usuario: ['', Validators.required ],
          ficheros: '',
          componentes: '',
          programas: '',
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      const data = {
        usuario: form.usuario,
        ficheros: form.ficheros,
        componentes: form.componentes,
        programas: form.programas
      };
      this.firestoreService.updateElemento(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newElementoForm.setValue({
          usuario: '',
          ficheros: '',
          componentes: '',
          programas: '',
          id: ''
        });
        console.log('Documento editado.');
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editElemento(documentId) {
    const editSubscribe = this.firestoreService.getElemento(documentId).subscribe((elemento) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.newElementoForm.setValue({
        id: documentId,
        usuario: elemento.payload.data()['usuario'],
        ficheros: elemento.payload.data()['ficheros'],
        componentes: elemento.payload.data()['componentes'],
        programas: elemento.payload.data()['programas']
      });
      editSubscribe.unsubscribe();
    });
  }

  public deleteElemento(documentId) {
    this.firestoreService.deleteElemento(documentId).then(() => {
      console.log('Documento eliminado.');
    }, (error) => {
      console.error(error);
    });
  }

  resetForm(){
    this.newElementoForm.setValue({
      usuario: ['', Validators.required ],
      ficheros: '',
      componentes: '',
      programas: '',
      id: ''
    });
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.elementos, event.previousIndex, event.currentIndex);
  }
 
}
