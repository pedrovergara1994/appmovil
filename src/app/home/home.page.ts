import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  
  

 
})
export class HomePage {
  uno: string ;
  dos:string;
  tres: string;
  cuatro: string ;

  constructor() {
    this.uno = 'windstorm';
    this.dos ='asdsad';
    this.tres ='sadsads'
    this.cuatro ='sadsad';
  }
 
}
