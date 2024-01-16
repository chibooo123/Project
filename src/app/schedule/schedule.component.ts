import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  isNightShift: boolean = false;

  toggleShift(shift: string): void {
    if (shift === 'night') {
      this.isNightShift = true;
    } else {
      this.isNightShift = false;
    }
  }
}

