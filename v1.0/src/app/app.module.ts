import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//FontIcons
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Componentes
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
//Servicios
import { FirestoreService } from './services/firestore.service';
//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'usuarios', component: UsuariosComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [
    AngularFirestore,
    FirestoreService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
