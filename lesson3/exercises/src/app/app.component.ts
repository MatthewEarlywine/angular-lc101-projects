import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  edgeCheck(width, height){
    if(width > 260000 || width < 0 || height < 0 || height > 340000){
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }

 handleLanding(rocketImage) {
  let result = window.confirm('Are you sure the shuttle is ready to land?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle on ground.';
     this.takeOffEnabled = true;
     rocketImage.style.bottom = '0px';
  }
 }

  handleMissionAbort(rocketImage) {
    let result = window.confirm('Are you sure the mission should be aborted?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Launch canceled.';
       this.takeOffEnabled = true;
       rocketImage.style.bottom = '0px';
    }
  }

 moveRocket(rocketImage, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  } else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
  } else if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
  } else if (direction === 'down') {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
  }
  this.edgeCheck(this.width, this.height);
 }

}