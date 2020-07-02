import { Component, Input, OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input() rating: number = 4;
  starWidth: number;

  /*This sets up the communication between the Parent Componenet 
 and the data being sent back by this child component 
 */
  @Output() clickedEvent: EventEmitter<String> = new EventEmitter();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  /*
  This is method used to send the data back to the parent componenet
  */
  ngOnClick(): void {
    //use the property that was setup and use the emit method to send back
    this.clickedEvent.emit(`Stars Clicked ${this.rating}`);
  }
  /*
How does the parent component listen to this event? 
-> listens on the HTML
-> Use event binding  (clickedEvent) = 'refrence to a method that takes in an event to procss'
-> Parent component then runs that function.



*/
}
