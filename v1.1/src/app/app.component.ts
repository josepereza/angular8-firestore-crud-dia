import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  year: number;
  title = 'app';
  
  constructor(){
    this.year = new Date().getFullYear();
  }

}
