import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { ChoreService, Chore } from '../chore.service';
import { startOfDay } from 'date-fns';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  public static Route = {
    path: 'calendar',
    component: CalendarComponent,
  }

  public chores$: Observable<Chore[]>;

  events: CalendarEvent[] = []

  constructor(private choreService: ChoreService, private router: Router) {
    this.chores$ = choreService.getAllChores();
    this.chores$.subscribe((chores: Chore[]) => {
      let chore: any
      for (chore of chores) {
        this.events.push({
          start: new Date(new Date(chore.assignedDate).setUTCHours(4, 0, 0, 0)),
          title: chore.name
        })
      }
    })
    console.log(this.events)
  }

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

}

