// tslint:disable-next-line:quotemark
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'angular-intro-p1';
  name: String = 'Paka';
  currentDay: any = new Date().getDay();
  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  renderThisDays() {
    return this.days[this.currentDay];
  }
}
