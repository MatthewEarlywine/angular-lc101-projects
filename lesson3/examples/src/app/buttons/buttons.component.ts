import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   theButtons: boolean[] = [false, false, false];
   inactive: boolean = false;
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   setButtons(){
      for(let i = 0; i < this.theButtons.length; i++){
          this.theButtons[i] = false;
      }
      return this.theButtons;
   }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

}
