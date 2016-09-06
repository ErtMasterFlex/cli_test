import { 
  Component,
  trigger,
  state,
  style,
  transition,
  animate
 } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(3.2)'
      })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive',animate('100ms ease-out'))
    ])

  ]
})
export class AppComponent {
  title = 'app works';
  progressShowing: boolean = true;
  buttonState: string = 'inactive';

  toggleState(){
    if(this.buttonState == 'active'){
      this.buttonState = 'inactive'
    }
    else{
      this.buttonState = 'active'
    }
      
  }
  
}
