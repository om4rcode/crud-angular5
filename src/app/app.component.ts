import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud con Angular 5';

  nombre : string;
  
  constructor() {
   
  }

  ngOnInit() {
      
  }

}
